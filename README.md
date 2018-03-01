
<p align="center">
  <img src="https://storage.googleapis.com/material-design/publish/material_v_12/assets/0B7WCemMG6e0VVWZzZ1FIN09XWGc/components-bottom-sheets.png" height="300" width="600" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-bottom-action-sheet"><img src="http://img.shields.io/npm/v/react-native-bottom-action-sheet.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-bottom-action-sheet/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-bottom-action-sheet#License"><img src="https://img.shields.io/npm/l/react-native-bottom-action-sheet.svg?style=flat" /></a>
</p>


# React Native: Bottom Action Sheet (Android/iOS)

A simple library that creates BottomSheets according to the [Material Design Specs](https://material.google.com/components/bottom-sheets.html) 
## Android


| **Sheet View**             |
| ----------------- |
| <img src="https://github.com/rubensousa/BottomSheetBuilder/raw/master/screens/normal_demo.gif" width="600" height="600" />                  |

| **Grid View**             |
| ----------------- |
| <img src="https://github.com/rubensousa/BottomSheetBuilder/raw/master/screens/tablet_grid.png" width="600" height="600" />                  |


| **Alert View**             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/javiersantos/BottomDialogs/master/Screenshots/gif-1.gif" width="600" height="600" />                  |


#### iOS

| **Sheet View**             |
| ----------------- |
| <img src="https://github.com/sagiwei/SGActionView/raw/master/sheet.png" width="600" height="600" />                  |

| **Grid View**             |
| ----------------- |
| <img src="https://github.com/sagiwei/SGActionView/raw/master/grid.png" width="600" height="600" />                  |


| **Alert View**             |
| ----------------- |
| <img src="https://github.com/sagiwei/SGActionView/raw/master/alert.png" width="600" height="600" />                  |


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

- API Way
let SheetView = RNBottomActionSheet.SheetView
SheetView.Show({
	title: "Awesome!",
	items: [
		{ title: "Facebook", subTitle: "Facebook Description", icon: facebook },
		{ title: "Instagram", subTitle: "Instagram Description", icon: instagram },
	],
	theme: "light",
	selection: 3,
	onSelection: selection => {
		console.log("selection: " + selection);
	}
});

- React Way

<RNBottomActionSheet.SheetView visible={this.state.sheetView} title={"Awesome!"} theme={"light"} onSelection={selection => {
	console.log("selection: " + selection);
}}>
	<RNBottomActionSheet.SheetView.Item title={"Facebook"} subTitle={"Facebook Description"} icon={facebook} />
	<RNBottomActionSheet.SheetView.Item title={"Instagram"} subTitle={"Instagram Description"} icon={instagram} />
</RNBottomActionSheet.SheetView>

```

- **Grid View**
```javascript

- API Way
let GridView = RNBottomActionSheet.GridView
	GridView.Show({
		title: "Awesome!",
		items: [
		{ title: "Facebook", icon: facebook },
		{ title: "Instagram", icon: instagram },
		{ title: "Skype", icon: skype },
		{ title: "Twitter", icon: twitter },
		{ title: "WhatsApp", icon: whatsapp },
		{ title: "YouTube", icon: youtube },
		{ title: "Google", icon: google },
		{ title: "LinkedIn", icon: linkedin }
		],
		theme: 'light',
		onSelection: (selection) => {
		console.log('selection: ' + selection)
		}
	});

- React Way
<RNBottomActionSheet.GridView visible={this.state.gridView} title={"Awesome!"} theme={"light"} selection={3} onSelection={selection => {
	console.log("selection: " + selection);
	}}>
	<RNBottomActionSheet.GridView.Item title={"Facebook"} icon={facebook} />
	<RNBottomActionSheet.GridView.Item title={"Instagram"} icon={instagram} />
</RNBottomActionSheet.GridView>

```

- **Alert View**
```javascript

- API Way
let AlertView = RNBottomActionSheet.AlertView
    AlertView.Show({
      title: "Awesome!",
      message: "What can we improve? Your feedback is always welcome.",
      positiveText: "OK",
      positiveBackgroundColor: "#eeffee",
      positiveTextColor: "#006500",
      negativeText: "Exit",
      negativeBackgroundColor: "#ffebeb",
      negativeTextColor: "#760000",
      theme: 'light',
      onPositive: () => {
        console.log('positive clicked')
      },
      onNegative: () => {
        console.log('negative clicked')
      }
	})
	
- React Way
<RNBottomActionSheet.AlertView visible={this.state.alterView} title={"Awesome!"} message={"What can we improve? Your feedback is always welcome."} positiveText={"OK"} positiveBackgroundColor={"#eeffee"} positiveTextColor={"#006500"} negativeText={"Exit"} negativeBackgroundColor={"#ffebeb"} negativeTextColor={"#760000"} theme={"light"} onPositive={() => {
	console.log("positive clicked");
	}} onNegative={() => {
	console.log("negative clicked");
	}} />


```

## API's

- **Sheet View**
	- `title(title: string)`
	- `items(title: string, subTitle: string, icon: image) - subTitle: iOS Only`
	- `onSelection(selcFunc: function)`
	- `Show()`
	- `titleTextColor(color: string) - Android Only` 
	- `itemTextColor(color: string) - Android Only`
	- `itemTintColor(color: string) - Android Only`
	- `backgroundColor(color: string) - Android Only`
	- `delayDismissOnItemClick(flag: bool) - Android Only`
	- `dividerItem(title: string) - Android Only`
	- `theme(theme: string) - iOS Only`
	- `selection(selc: int) - iOS Only`

- **Grid View**
	- `title(title: string)`
	- `ttems(title: string, icon: image)`
	- `selection(selcFunc: function)`
	- `Show()`
	- `itemTextColor(color: string) - Android Only`
	- `itemTintColor(color: string) - Android Only`
	- `backgroundColor(color: string) - Android Only`
	- `delayDismissOnItemClick(flag: bool) - Android Only`
	- `theme(theme: string): iOS Only`

- **Alert View**
	- `title(title: string)`
	- `message(message: string)`
	- `positiveText(text: string)`
	- `positiveBackgroundColor(color: string)`
	- `positiveTextColor(color: string)`
	- `negativeText(text: string)`
	- `negativeBackgroundColor(color: string)`
	- `negativeTextColor(color: string)`
	- `onPositive(selcFunc: function)`
	- `onNegative(selcFunc: function)`
	- `theme(theme: string) - iOS Only`
	- `Show()`

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

| [awesome-react-native-native-modules](https://github.com/prscX/awesome-react-native-native-modules)              |
| ----------------- |
| <img src="https://github.com/prscX/awesome-react-native-native-modules/raw/master/assets/hero.png" width="600" height="300" />                  |


| [react-native-spruce](https://github.com/prscX/react-native-spruce)              |
| ----------------- |
| <img src="https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/extensibility-tests.gif" width="600" height="300" />                  |


| [react-native-taptargetview](https://github.com/prscX/react-native-taptargetview) & [react-native-material-showcase-ios](https://github.com/prscX/react-native-material-showcase-ios)              |
| ----------------- |
| <img src="https://github.com/KeepSafe/TapTargetView/raw/master/.github/video.gif" width="600" height="600" />  |




| [react-native-popover-menu](https://github.com/prscX/react-native-popover-menu)             |
| ----------------- |
| <img src="https://github.com/zawadz88/MaterialPopupMenu/raw/master/art/components_menus.png" width="600" height="300" />                  |


| [react-native-tooltips](https://github.com/prscX/react-native-tooltips)             |
| ----------------- |
| <img src="https://camo.githubusercontent.com/add1764d27026b81adb117e07a10781c9abbde1b/687474703a2f2f692e696d6775722e636f6d2f4f4e383257526c2e676966" width="600" height="300" />                  |


| [react-native-shine-button](https://github.com/prscX/react-native-shine-button)             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/ChadCSong/ShineButton/master/demo_shine_others.gif" width="600" height="300" />                  |


| [react-native-iconic](https://github.com/prscX/react-native-iconic)             |
| ----------------- |
| <img src="https://camo.githubusercontent.com/b18993cbfe91de8abdc0019dc9a6cd44707eec21/68747470733a2f2f6431337961637572716a676172612e636c6f756466726f6e742e6e65742f75736572732f3338313133332f73637265656e73686f74732f313639363538302f766266706f70666c6174627574746f6e332e676966" width="600" height="300" />                  |


| [react-native-download-button](https://github.com/prscX/react-native-download-button)             |
| ----------------- |
| <img src="https://github.com/fenjuly/ArrowDownloadButton/raw/master/screenshots/arrowdownloadbutton.gif" width="600" height="600" />                  |


| [react-native-siri-wave-view](https://github.com/prscX/react-native-siri-wave-view)             |
| ----------------- |
| <img src="https://cdn.dribbble.com/users/341264/screenshots/2203511/wave.gif" width="600" height="300" />                  |


|  [react-native-material-shadows](https://github.com/prscX/react-native-material-shadows)             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/harjot-oberai/MaterialShadows/master/screens/cover.png" width="600" height="300" />                  |


|  [react-native-gradient-blur-view](https://github.com/prscX/react-native-gradient-blur-view)             |
| ----------------- |
| <img src="https://github.com/prscX/react-native-gradient-blur-view/raw/master/assets/hero.png" width="600" height="300" />                  |


|  [react-native-about-libraries](https://github.com/prscX/react-native-about-libraries)             |
| ----------------- |
| <img src="https://github.com/prscX/react-native-about-libraries/raw/master/hero.png" width="600" height="600" />                  |



|  [vs-essential-plugins](https://github.com/prscX/vs-essential-plugins)             |
| ----------------- |
| <img src="https://pbs.twimg.com/profile_images/922911523328081920/jEKFRPKV_400x400.jpg" width="600" height="300" />                  |


|  [prettier-pack](https://github.com/prscX/prettier-pack)             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png" width="600" height="300" />                  |
