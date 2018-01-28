
#import "RNBottomActionSheet.h"

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
    
    [SGActionView showAlertWithTitle:title
         message:message
        leftButtonTitle:negativeText
         rightButtonTitle:positiveText
          selectedHandle:^(NSInteger index) {
              callback(@[[NSNumber numberWithLong: index]]);
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

    [SGActionView showSheetWithTitle:title
         itemTitles:itemTitles
        itemSubTitles:itemSubTitles
          selectedIndex: [selection intValue]
          selectedHandle:^(NSInteger index) {
              callback(@[[NSNumber numberWithLong: index]]);
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

        int width = [[icon objectForKey: @"width"] intValue];
        int height = [[icon objectForKey: @"height"] intValue];
        NSString *imagePath = [icon objectForKey: @"uri"];
        
        NSURL *url = [NSURL URLWithString: imagePath];
        NSData *data = [NSData dataWithContentsOfURL:url];

        UIImage *image = [[UIImage alloc] initWithCIImage: [CIImage imageWithData: data]];

        // Resize Image
//        CGSize size = CGSizeMake(width, height);
//        UIGraphicsBeginImageContextWithOptions(size, NO, 0.0);
//        [image drawInRect:CGRectMake(0, 0, size.width, size.height)];
//        image = UIGraphicsGetImageFromCurrentImageContext();
//        UIGraphicsEndImageContext();
        
        [itemIcons addObject: image];
    }

    if ([theme isEqualToString: @"light"]) {
        [[SGActionView sharedActionView] setStyle:SGActionViewStyleLight];
    } else {
        [[SGActionView sharedActionView] setStyle:SGActionViewStyleDark];
    }
    
    [SGActionView showGridMenuWithTitle:title
          itemTitles:itemTitles
       images:itemIcons
         selectedHandle:^(NSInteger index) {
             callback(@[[NSNumber numberWithLong: index]]);
         }
     ];
}

@end
  
