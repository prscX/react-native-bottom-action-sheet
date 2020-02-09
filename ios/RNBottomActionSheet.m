
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

RCT_EXPORT_METHOD(SheetView:(NSDictionary *)props onSelecctionCallback:(RCTResponseSenderBlock)onSelecctionCallback onCancelCallback:(RCTResponseSenderBlock)onCancelCallback) {
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

              onSelecctionCallback(@[[NSNumber numberWithLong: index]]);
              callbackInvoked = true;
          }
     ];
}

RCT_EXPORT_METHOD(GridView:(NSDictionary *)props onSelecctionCallback:(RCTResponseSenderBlock)onSelecctionCallback onCancelCallback:(RCTResponseSenderBlock)onCancelCallback) {
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

        UIImage *image = [RNImageHelper GenerateImage: icon];
        if (image != nil) {
            [itemIcons addObject: image];
        }
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

             onSelecctionCallback(@[[NSNumber numberWithLong: index - 1]]);
             callbackInvoked = true;
         }
     ];
}

@end
  
