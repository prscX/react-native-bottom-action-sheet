
# React Native: Bottom Action Sheet (Android/iOS)

A simple library that creates BottomSheets according to the [Material Design Specs](https://material.google.com/components/bottom-sheets.html) 
## Android

- **Sheet View**

![](https://github.com/rubensousa/BottomSheetBuilder/raw/master/screens/normal_demo.gif)

- **Grid View**

![](https://github.com/rubensousa/BottomSheetBuilder/raw/master/screens/tablet_grid.png)

- **Alert View**

![](https://raw.githubusercontent.com/javiersantos/BottomDialogs/master/Screenshots/gif-1.gif)

#### iOS

- **Sheet View**

![](https://github.com/sagiwei/SGActionView/raw/master/sheet.png)

- **Grid View**

![](https://github.com/sagiwei/SGActionView/raw/master/grid.png)

- **Alert View**

![](https://github.com/sagiwei/SGActionView/raw/master/alert.png)

It is a React Native Bridge around below native Android & iOS Libraries

- [rubensousa/BottomSheetBuilder](https://github.com/rubensousa/BottomSheetBuilder)
- [javiersantos/BottomDialogs](https://github.com/javiersantos/BottomDialogs)
- [sagiwei/SGActionView](https://github.com/sagiwei/SGActionView)

Before we dive into on how to use this library. We would like to thank all the contributor of above libraries for providing such a awesome nice, cool library

## Getting started

- `$ npm install react-native-bottom-action-sheet --save`

- `$ react-native link react-native-bottom-action-sheet`


## Usage
```javascript
import RNBottomActionSheet from 'react-native-bottom-action-sheet';

```

- **Sheet View**
```javascript
let SheetView = RNBottomActionSheet.SheetView()
    SheetView.setTitle("Awesome!")
    SheetView.addItem('Facebook', 'Facebook App', facebook)

    SheetView.addDividerItem("Items");
    SheetView.addItem("LinkedIn", "LinkedIN App", linkedin);

    SheetView.setTheme('light')
    SheetView.setSelection(3)

    SheetView.onSelection(selection => {});
    SheetView.show()
```

- **Grid View**
```javascript
let GridView = RNBottomActionSheet.GridView();
    GridView.setTitle("Awesome!");
    GridView.addItem("Facebook", facebook);
    GridView.addItem("LinkedIn", linkedin);

    GridView.setTheme('light')

    GridView.onSelection((selection) => {})
    GridView.show();
```

- **Alert View**
```javascript
let AlertView = RNBottomActionSheet.AlertView()
    AlertView.setTitle("Awesome!");
    AlertView.setMessage("What can we improve? Your feedback is always welcome.");
    AlertView.setPositiveText("OK");
    AlertView.setPositiveBackgroundColor("#eeffee");
    AlertView.setPositiveTextColor("#006500");
    AlertView.setNegativeText("Exit");
    AlertView.setNegativeBackgroundColor("#ffebeb");
    AlertView.setNegativeTextColor("#760000");
    AlertView.onPositive(() => {})
    AlertView.onNegative(() => {})
    
    AlertView.setTheme('light')
    AlertView.show()
```

## API's

- **Sheet View**
	- `setTitle(title: string)`
	- `addItem(title: string, subTitle: string, icon: image) - subTitle: iOS Only`
	- `onSelection(selcFunc: function)`
	- `show()`
	- `setTitleTextColor(color: string) - Android Only` 
	- `setItemTextColor(color: string) - Android Only`
	- `setItemTintColor(color: string) - Android Only`
	- `setBackgroundColor(color: string) - Android Only`
	- `setDelayDismissOnItemClick(flag: bool) - Android Only`
	- `addDividerItem(title: string) - Android Only`
	- `setTheme(theme: string) - iOS Only`
	- `setSelection(selc: int) - iOS Only`

- **Grid View**
	- `setTitle(title: string)`
	- `addItem(title: string, icon: image)`
	- `onSelection(selcFunc: function)`
	- `show()`
	- `setItemTextColor(color: string) - Android Only`
	- `setItemTintColor(color: string) - Android Only`
	- `setBackgroundColor(color: string) - Android Only`
	- `setDelayDismissOnItemClick(flag: bool) - Android Only`
	- `setTheme(theme: string): iOS Only`

- **Alert View**
	- `setTitle(title: string)`
	- `setMessage(message: string)`
	- `setPositiveText(text: string)`
	- `setPositiveBackgroundColor(color: string)`
	- `setPositiveTextColor(color: string)`
	- `setNegativeText(text: string)`
	- `setNegativeBackgroundColor(color: string)`
	- `setNegativeTextColor(color: string)`
	- `onPositive(selcFunc: function)`
	- `onNegative(selcFunc: function)`
	- `setTheme(theme: string) - iOS Only`
	- `show()`

## TO DO
- Enable Android customization features for iOS platform as well

## Credits

- Android BottomSheetBuilder: [rubensousa/BottomSheetBuilder](https://github.com/rubensousa/BottomSheetBuilder)
- Android BottomDialogs: [javiersantos/BottomDialogs](https://github.com/javiersantos/BottomDialogs)
- iOS BottomSheet: [sagiwei/SGActionView](https://github.com/sagiwei/SGActionView)

## Contribution
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## License
Copyright Pranav Raj Singh Chauhan

RNBottomActionSheet is provided under the MIT License.




## Other Contributions
- React Native - Spruce: [react-native-spruce](https://github.com/prscX/react-native-spruce)

![Screenshots](https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/extensibility-tests.gif)

- React Native - App Tour Library: [react-native-taptargetview](https://github.com/prscX/react-native-taptargetview) & [react-native-material-showcase-ios](https://github.com/prscX/react-native-material-showcase-ios)

![Screenshots](https://github.com/KeepSafe/TapTargetView/raw/master/.github/video.gif)
![Screenshots](https://github.com/aromajoin/material-showcase-ios/raw/master/art/material-showcase.gif?raw=true)


- React Native - Popover: [react-native-popover-menu](https://github.com/prscX/react-native-popover-menu)

![](https://github.com/zawadz88/MaterialPopupMenu/raw/master/art/components_menus.png)

- React Native - Tooltips: [react-native-tooltips](https://github.com/prscX/react-native-tooltips)

![](https://camo.githubusercontent.com/add1764d27026b81adb117e07a10781c9abbde1b/687474703a2f2f692e696d6775722e636f6d2f4f4e383257526c2e676966)

- React Native - Shine Button: [react-native-shine-button](https://github.com/prscX/react-native-shine-button)

![Screenshots](https://raw.githubusercontent.com/ChadCSong/ShineButton/master/demo_shine_others.gif)

- React Native Iconic: [react-native-iconic](https://github.com/prscX/react-native-iconic)
![Screenshots](https://camo.githubusercontent.com/b18993cbfe91de8abdc0019dc9a6cd44707eec21/68747470733a2f2f6431337961637572716a676172612e636c6f756466726f6e742e6e65742f75736572732f3338313133332f73637265656e73686f74732f313639363538302f766266706f70666c6174627574746f6e332e676966)

- React Native Download Button: [react-native-download-button](https://github.com/prscX/react-native-download-button)

![](https://github.com/fenjuly/ArrowDownloadButton/raw/master/screenshots/arrowdownloadbutton.gif)

- React Native Siri Wave View: [react-native-siri-wave-view](https://github.com/prscX/react-native-siri-wave-view)

![](https://cdn.dribbble.com/users/341264/screenshots/2203511/wave.gif)

- React Native Material Shadows: [react-native-material-shadows](https://github.com/prscX/react-native-material-shadows)

![](
https://raw.githubusercontent.com/harjot-oberai/MaterialShadows/master/screens/cover.png
)

- React Native Gradient Blur View: [react-native-gradient-blur-view](https://github.com/prscX/react-native-gradient-blur-view)

![](
https://github.com/prscX/react-native-gradient-blur-view/raw/master/assets/hero.png
)

- React Native About Libraries: [react-native-about-libraries](https://github.com/prscX/react-native-about-libraries)

![](
https://github.com/prscX/react-native-about-libraries/raw/master/hero.png
)

- Visual Code Essential Plugins: [vs-essential-plugins](https://github.com/prscX/vs-essential-plugins)

![Screenshots](https://pbs.twimg.com/profile_images/922911523328081920/jEKFRPKV_400x400.jpg)

- Prettier Pack: [prettier-pack](https://github.com/prscX/prettier-pack)

![Screenshots](https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png)


