<h1 align="center">

<p align="center">
  <img src="https://storage.googleapis.com/material-design/publish/material_v_12/assets/0B7WCemMG6e0VVWZzZ1FIN09XWGc/components-bottom-sheets.png" height="300" width="300" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-bottom-action-sheet"><img src="http://img.shields.io/npm/v/react-native-bottom-action-sheet.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-bottom-action-sheet/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-bottom-action-sheet#License"><img src="https://img.shields.io/npm/l/react-native-bottom-action-sheet.svg?style=flat" /></a>
</p>


    ReactNative: Native Bottom Action Sheet (Android/iOS)

If this project has helped you out, please support us with a star 🌟
</h1>

A simple library that creates native BottomSheet actions according to the [Material Design Specs](https://material.google.com/components/bottom-sheets.html)


#### Android


| **[Sheet View: rubensousa/BottomSheetBuilder](https://github.com/rubensousa/BottomSheetBuilder)**             |
| ----------------- |
| <img src="https://github.com/rubensousa/BottomSheetBuilder/raw/master/screens/normal_demo.gif" width="320" />                  |

| **[Grid View: rubensousa/BottomSheetBuilder](https://github.com/rubensousa/BottomSheetBuilder)**             |
| ----------------- |
| <img src="https://github.com/rubensousa/BottomSheetBuilder/raw/master/screens/tablet_grid.png" width="600"/>                  |


| **[Alert View: javiersantos/BottomDialogs](https://github.com/javiersantos/BottomDialogs)**             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/javiersantos/BottomDialogs/master/Screenshots/gif-1.gif" width="320" />                 

#### iOS

| **[Sheet View: sagiwei/SGActionView](https://github.com/sagiwei/SGActionView)**             |
| ----------------- |
| <img src="https://github.com/sagiwei/SGActionView/raw/master/sheet.png" width="437" />                  |

| **[Grid View: sagiwei/SGActionView](https://github.com/sagiwei/SGActionView)**             |
| ----------------- |
| <img src="https://github.com/sagiwei/SGActionView/raw/master/grid.png" width="437" />                  |


| **[Alert View: sagiwei/SGActionView](https://github.com/sagiwei/SGActionView)**             |
| ----------------- |
| <img src="https://github.com/sagiwei/SGActionView/raw/master/alert.png" width="437" />                  |


## 📖 Getting started

`$ npm install react-native-bottom-action-sheet --save`

`$ react-native link react-native-bottom-action-sheet`

`$ react-native link react-native-vector-icons`

- **iOS**

	- After `react-native link react-native-bottom-action-sheet`, please verify node_modules/react-native-bottom-action-sheet/ios/ contains Pods folder. If does not exist please execute `pod install` command on `node_modules/react-native-bottom-action-sheet/ios/`, if any error => try `pod repo update` then `pod install`

- **Android**

Please add below snippet into your app `build.gradle`

```

buildscript {
    repositories {
        jcenter()
        maven { url "https://maven.google.com" }
		...
    }
	...
}


allprojects {
    repositories {
        maven { url 'https://jitpack.io' }
		maven { url "https://maven.google.com" }
		...
    }
}
```

> **Note:** This library is support on Android 27 > above

## 💻 Usage

```javascript
import RNBottomActionSheet from 'react-native-bottom-action-sheet';

import Icon from 'react-native-vector-icons'

```

## 💡 Example's

- **Sheet View**

	- **API Way**

	```javascript

	let facebook = <Icon family={'FontAwesome'} name={'facebook'} color={'#000000'} size={30} />
	let instagram = <Icon family={'FontAwesome'} name={'instagram'} color={'#000000'} size={30} />

	let SheetView = RNBottomActionSheet.SheetView
	SheetView.Show({
		title: "Awesome!",
		items: [
			{ title: "Facebook", value: "fb", subTitle: "Facebook Description", icon: facebook },
			{ title: "Instagram", value: "insta", subTitle: "Instagram Description", icon: instagram },
		],
		theme: "light",
		selection: 3,
		onSelection: (index, value) => {
			// value is optional
			console.log("selection: " + index + " " + value);
		}
	});

	```

	- **React Way**

	```javascript
	let facebook = <Icon family={'FontAwesome'} name={'facebook'} color={'#000000'} size={30} />
	let instagram = <Icon family={'FontAwesome'} name={'instagram'} color={'#000000'} size={30} />

	<RNBottomActionSheet.SheetView visible={this.state.sheetView} title={"Awesome!"} theme={"light"} onSelection={(index, value) => {
		// value is optional
		console.log("selection: " + index + " " + value);
	}}>
		<RNBottomActionSheet.SheetView.Item title={"Facebook"} subTitle={"Facebook Description"} icon={facebook} />
		<RNBottomActionSheet.SheetView.Item title={"Instagram"} subTitle={"Instagram Description"} icon={instagram} />
	</RNBottomActionSheet.SheetView>

	```

> **Note:**
> - We have added `family` prop for `Icon` class, please make sure that you pass the props


- **Grid View**

	- **API Way**

	```javascript
	let facebook = <Icon family={'FontAwesome'} name={'facebook'} color={'#000000'} size={30} />
	let instagram = <Icon family={'FontAwesome'} name={'instagram'} color={'#000000'} size={30} />

	let GridView = RNBottomActionSheet.GridView
		GridView.Show({
			title: "Awesome!",
			items: [
			{ title: "Facebook", icon: facebook },
			{ title: "Instagram", icon: instagram }
			],
			theme: 'light',
			onSelection: (index, value) => {
			console.log('selection: ' + index + ' ' + value)
			}
		});
	```

	- **React Way**

	```javascript
	let facebook = <Icon family={'FontAwesome'} name={'facebook'} color={'#000000'} size={30} />
	let instagram = <Icon family={'FontAwesome'} name={'instagram'} color={'#000000'} size={30} />

	<RNBottomActionSheet.GridView visible={this.state.gridView} title={"Awesome!"} theme={"light"} selection={3} onSelection={(index, value) => {
		console.log('selection: ' + index + ' ' + value);
		}}>
		<RNBottomActionSheet.GridView.Item title={"Facebook"} icon={facebook} />
		<RNBottomActionSheet.GridView.Item title={"Instagram"} icon={instagram} />
	</RNBottomActionSheet.GridView>

	```


- **Alert View**

	- **API Way**

	```javascript
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
	```

	- **React Way**

	```javascript
	<RNBottomActionSheet.AlertView
		visible={this.state.alterView}
		title={"Awesome!"}
		message={"What can we improve? Your feedback is always welcome."}
		positiveText={"OK"}
		positiveBackgroundColor={"#eeffee"}
		positiveTextColor={"#006500"}
		negativeText={"Exit"}
		negativeBackgroundColor={"#ffebeb"}
		negativeTextColor={"#760000"}
		theme={"light"}
		onPositive={() => {
			console.log("positive clicked");
		}}
		onNegative={() => {
			console.log("negative clicked");
		}} />
	```

## 🎨 APIs

- **Sheet View**

	- **Generic**
		- `title: string`
		- `items: Array<{ title: string, subTitle: string, icon?: image, value?: mixed }> - subTitle: iOS Only`
		- `onSelection: (index: number, value: ?mixed) => void`
		- `Show()`

	- **Android**
		- `titleTextColor: string` 
		- `itemTextColor: string`
		- `itemTintColor: string`
		- `backgroundColor: string`
		- `delayDismissOnItemClick: bool`
		- `dividerItem(title: string)`

	- **iOS**
		- `theme: string`
		- `selection: int`


- **Grid View**

	- **Generic**
		- `title: string`
		- `items: Array<{ title: string, icon?: image, value?: mixed }>`
		- `onSelection: (index: number, value: ?mixed) => void`
		- `Show()`

	- **Android**
		- `itemTextColor: string`
		- `itemTintColor: string`
		- `backgroundColor: string`
		- `delayDismissOnItemClick: bool`

	- **iOS**
		- `theme: string`


- **Alert View**

	- **Generic**
		- `title string`
		- `message: string`
		- `positiveText: string`
		- `positiveBackgroundColor: string`
		- `positiveTextColor: string`
		- `negativeText: string`
		- `negativeBackgroundColor: string`
		- `negativeTextColor: string`
		- `onPositive: () => void`
		- `onNegative: () => void`
		- `Show()`

	- **Android**

	- **iOS**
		- `theme: string - iOS Only`



## Icons

- **RN Vector Icons:** It supports [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) library. Please find below snippet for the usage:

```javascript
	let facebook = <Icon family={'FontAwesome'} name={'facebook'} color={'#000000'} size={30} />

	<RNBottomActionSheet.GridView.Item title={"Facebook"} icon={facebook} />
```

> **Note:**
> - We have added `family` prop for `Icon` class, please make sure that you pass the props


- **Custom Icons**

> **Note:**
> Since we are using native libraries, we have not found a solution in order to render RN Images in production, therefore please copy all your image assets in platform specific folders:

- Android: Please copy your image assets in app resource drawable folder
- iOS: Please copy your image assets in app resources folder

> Please refer example application for the image usage.


## ✨ Credits

- Android BottomSheetBuilder: [rubensousa/BottomSheetBuilder](https://github.com/rubensousa/BottomSheetBuilder)
- Android BottomDialogs: [javiersantos/BottomDialogs](https://github.com/javiersantos/BottomDialogs)
- iOS BottomSheet: [sagiwei/SGActionView](https://github.com/sagiwei/SGActionView)

## 🤔 How to contribute
Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/prscX/react-native-bottom-action-sheet/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## 💫 Where is this library used?
If you are using this library in one of your projects, add it in this list below. ✨


## 📜 License
This library is provided under the Apache 2 License.

RNBottomActionSheet @ [prscX](https://github.com/prscX)

## 💖 Support my projects
I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously, this takes time. You can integrate and use these projects in your applications for free! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:
* Starring and sharing the projects you like 🚀
* If you're feeling especially charitable, please follow [prscX](https://github.com/prscX) on GitHub.

  <a href="https://www.buymeacoffee.com/prscX" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

  Thanks! ❤️
  <br/>
  [prscX.github.io](https://prscx.github.io)
  <br/>
  </ Pranav >
