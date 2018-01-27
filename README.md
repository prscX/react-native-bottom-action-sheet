
# react-native-bottom-action-sheet

## Getting started

`$ npm install react-native-bottom-action-sheet --save`

### Mostly automatic installation

`$ react-native link react-native-bottom-action-sheet`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-bottom-action-sheet` and add `RNBottomActionSheet.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNBottomActionSheet.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNBottomActionSheetPackage;` to the imports at the top of the file
  - Add `new RNBottomActionSheetPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-bottom-action-sheet'
  	project(':react-native-bottom-action-sheet').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-bottom-action-sheet/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-bottom-action-sheet')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNBottomActionSheet.sln` in `node_modules/react-native-bottom-action-sheet/windows/RNBottomActionSheet.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Bottom.Action.Sheet.RNBottomActionSheet;` to the usings at the top of the file
  - Add `new RNBottomActionSheetPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNBottomActionSheet from 'react-native-bottom-action-sheet';

// TODO: What to do with the module?
RNBottomActionSheet;
```
  