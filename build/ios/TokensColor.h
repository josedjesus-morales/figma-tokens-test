
//
// TokensColor.h
//

// Do not edit directly
// Generated on Tue, 11 Jul 2023 04:43:39 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, TokensColorName) {
ColorAlertWarning,
ColorAlertError,
ColorAlertSuccess,
ColorNeutral00,
ColorNeutral05,
ColorNeutral20,
ColorNeutral40,
ColorNeutral80,
ColorPrimaryDark,
ColorPrimaryMain,
ColorPrimaryLight
};

@interface TokensColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(TokensColorName)color;
@end
