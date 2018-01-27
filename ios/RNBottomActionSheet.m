
#import "RNBottomActionSheet.h"

@implementation RNBottomActionSheet

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()


RCT_EXPORT_METHOD(AlertView:(NSDictionary *)props) {
    NSString *title = [props objectForKey: @"title"];
    NSString *message = [props objectForKey: @"message"];
    
    NSString *positiveText = [props objectForKey: @"positiveText"];
    NSString *positiveBackgroundColor = [props objectForKey: @"positiveBackgroundColor"];
    NSString *positiveTextColor = [props objectForKey: @"positiveTextColor"];
    
    NSString *negativeText = [props objectForKey: @"negativeText"];
    NSString *negativeBackgroundColor = [props objectForKey: @"negativeBackgroundColor"];
    NSString *negativeTextColor = [props objectForKey: @"negativeTextColor"];
    
    [SGActionView showAlertWithTitle:title
         message:message
        leftButtonTitle:negativeText
         rightButtonTitle:positiveText
      selectedHandle:nil];
}

RCT_EXPORT_METHOD(SheetView:(NSDictionary *)props) {
    NSString *title = [props objectForKey: @"title"];
    NSArray *items = [props objectForKey: @"items"];
    
    NSMutableArray *itemTitles = [[NSMutableArray alloc] init];
    NSMutableArray *itemSubTitles = [[NSMutableArray alloc] init];
    
    for (NSDictionary *item in items) {
        [itemTitles addObject: [item objectForKey: @"title"]];
        [itemSubTitles addObject: [item objectForKey: @"subTitle"]];
    }
    
    [SGActionView showSheetWithTitle:title
         itemTitles:itemTitles
        itemSubTitles:itemSubTitles
          selectedIndex: 0
        selectedHandle:nil
     ];
}

RCT_EXPORT_METHOD(GridView:(NSDictionary *)props) {
    NSString *title = [props objectForKey: @"title"];
    NSArray *items = [props objectForKey: @"items"];

    NSMutableArray *itemTitles = [[NSMutableArray alloc] init];
    NSMutableArray *itemIcons = [[NSMutableArray alloc] init];

    for (NSDictionary *item in items) {
        [itemTitles addObject: [item objectForKey: @"title"]];

        NSDictionary *icon = [item objectForKey: @"icon"];
        
        NSString *imagePath = [icon objectForKey: @"uri"];
        NSURL *url = [NSURL URLWithString: imagePath];
        NSData *data = [NSData dataWithContentsOfURL:url];
        CIImage *ciImage = [CIImage imageWithData: data];
        
        
        UIImage *image = [[UIImage alloc] initWithCIImage:ciImage];
        [itemIcons addObject: image];
    }

    [SGActionView showGridMenuWithTitle:title
                          itemTitles:itemTitles
                       images:itemIcons
                      selectedHandle:nil
     ];
}

@end
  
