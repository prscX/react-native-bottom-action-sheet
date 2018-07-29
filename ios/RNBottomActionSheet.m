
#import "RNBottomActionSheet.h"

#import "RCTUtils.h"

@implementation RNBottomActionSheet

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()


RCT_EXPORT_METHOD(AlertView:(NSDictionary *)props callback:(RCTResponseSenderBlock)callback) {
    NSString *title = [props objectForKey: @"title"];
    NSString *message = [props objectForKey: @"message"];
    NSString *theme = [props objectForKey: @"theme"];
    
    NSString *positiveText = [props objectForKey: @"positiveText"];
    NSString *positiveBackgroundColor = [props objectForKey: @"positiveBackgroundColor"];
    NSString *positiveTextColor = [props objectForKey: @"positiveTextColor"];
    
    NSString *negativeText = [props objectForKey: @"negativeText"];
    NSString *negativeBackgroundColor = [props objectForKey: @"negativeBackgroundColor"];
    NSString *negativeTextColor = [props objectForKey: @"negativeTextColor"];

    if ([theme isEqualToString: @"light"]) {
        [[SGActionView sharedActionView] setStyle:SGActionViewStyleLight];
    } else {
        [[SGActionView sharedActionView] setStyle:SGActionViewStyleDark];
    }
    
    __block bool callbackInvoked = false;
    [SGActionView showAlertWithTitle:title
         message:message
        leftButtonTitle:negativeText
         rightButtonTitle:positiveText
          selectedHandle:^(NSInteger index) {
              if (callbackInvoked) return;

              callback(@[[NSNumber numberWithLong: index]]);
              callbackInvoked = true;
          }
     ];
}

RCT_EXPORT_METHOD(SheetView:(NSDictionary *)props callback:(RCTResponseSenderBlock)callback) {
    NSString *title = [props objectForKey: @"title"];
    NSArray *items = [props objectForKey: @"items"];
    NSString *theme = [props objectForKey: @"theme"];
    NSNumber *selection = [props objectForKey: @"selection"];
    
    NSMutableArray *itemTitles = [[NSMutableArray alloc] init];
    NSMutableArray *itemSubTitles = [[NSMutableArray alloc] init];
    
    for (NSDictionary *item in items) {
        [itemTitles addObject: [item objectForKey: @"title"]];
        [itemSubTitles addObject: [item objectForKey: @"subTitle"]];
    }

    if ([theme isEqualToString: @"light"]) {
        [[SGActionView sharedActionView] setStyle:SGActionViewStyleLight];
    } else {
        [[SGActionView sharedActionView] setStyle:SGActionViewStyleDark];
    }

    __block bool callbackInvoked = false;
    [SGActionView showSheetWithTitle:title
         itemTitles:itemTitles
        itemSubTitles:itemSubTitles
          selectedIndex: [selection intValue]
          selectedHandle:^(NSInteger index) {
              if (callbackInvoked) return;

              callback(@[[NSNumber numberWithLong: index]]);
              callbackInvoked = true;
          }
     ];
}

RCT_EXPORT_METHOD(GridView:(NSDictionary *)props callback:(RCTResponseSenderBlock)callback) {
    NSString *title = [props objectForKey: @"title"];
    NSArray *items = [props objectForKey: @"items"];
    NSString *theme = [props objectForKey: @"theme"];
    
    NSMutableArray *itemTitles = [[NSMutableArray alloc] init];
    NSMutableArray *itemIcons = [[NSMutableArray alloc] init];

    for (NSDictionary *item in items) {
        [itemTitles addObject: [item objectForKey: @"title"]];

        NSDictionary *icon = [item objectForKey: @"icon"];
        if (icon == nil || [icon count] == 0) {
            [itemIcons addObject: [[UIImage alloc] init]];
            continue;
        }

        UIImage *image = [self generateVectorIcon: icon];
        [itemIcons addObject: image];
    }

    if ([theme isEqualToString: @"light"]) {
        [[SGActionView sharedActionView] setStyle:SGActionViewStyleLight];
    } else {
        [[SGActionView sharedActionView] setStyle:SGActionViewStyleDark];
    }

    __block bool callbackInvoked = false;
    [SGActionView showGridMenuWithTitle:title
          itemTitles:itemTitles
       images:itemIcons
         selectedHandle:^(NSInteger index) {
             if (callbackInvoked) return;

             callback(@[[NSNumber numberWithLong: index - 1]]);
             callbackInvoked = true;
         }
     ];
}


- (UIImage *) generateVectorIcon: (NSDictionary *) icon {
    NSString *family = [icon objectForKey: @"family"];
    NSString *name = [icon objectForKey: @"name"];
    NSString *glyph = [icon objectForKey: @"glyph"];
    NSNumber *size = [icon objectForKey: @"size"];
    NSString *color = [icon objectForKey: @"color"];
    
    if (name != nil && [name length] > 0 && [name containsString: @"."]) {
        return [UIImage imageNamed: name];
    }
    
    UIColor *uiColor = [RNBottomActionSheet colorFromHexCode: color];
    CGFloat screenScale = RCTScreenScale();
    
    UIFont *font = [UIFont fontWithName:family size:[size floatValue]];
    NSAttributedString *attributedString = [[NSAttributedString alloc] initWithString:glyph attributes:@{NSFontAttributeName: font, NSForegroundColorAttributeName: uiColor}];
    
    CGSize iconSize = [attributedString size];
    UIGraphicsBeginImageContextWithOptions(iconSize, NO, 0.0);
    [attributedString drawAtPoint:CGPointMake(0, 0)];
    
    UIImage *iconImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    
    return iconImage;
}


+ (UIColor *) colorFromHexCode:(NSString *)hexString {
    NSString *cleanString = [hexString stringByReplacingOccurrencesOfString:@"#" withString:@""];
    if([cleanString length] == 3) {
        cleanString = [NSString stringWithFormat:@"%@%@%@%@%@%@",
                       [cleanString substringWithRange:NSMakeRange(0, 1)],[cleanString substringWithRange:NSMakeRange(0, 1)],
                       [cleanString substringWithRange:NSMakeRange(1, 1)],[cleanString substringWithRange:NSMakeRange(1, 1)],
                       [cleanString substringWithRange:NSMakeRange(2, 1)],[cleanString substringWithRange:NSMakeRange(2, 1)]];
    }
    if([cleanString length] == 6) {
        cleanString = [cleanString stringByAppendingString:@"ff"];
    }
    
    unsigned int baseValue;
    [[NSScanner scannerWithString:cleanString] scanHexInt:&baseValue];
    
    float red = ((baseValue >> 24) & 0xFF)/255.0f;
    float green = ((baseValue >> 16) & 0xFF)/255.0f;
    float blue = ((baseValue >> 8) & 0xFF)/255.0f;
    float alpha = ((baseValue >> 0) & 0xFF)/255.0f;
    
    return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
}

@end
  
