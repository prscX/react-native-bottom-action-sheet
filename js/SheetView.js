import { NativeModules } from "react-native";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const { RNBottomActionSheet } = NativeModules;


class SheetView {
  constructor() {
    this.items = new Array();
    this.theme = "light";
  }

  setTitle(title) {
    this.title = title;
  }

  addDividerItem (title) {
    this.items.push({
      title: title,
      divider: true
    })
  }

  addItem(title, subTitle, icon) {
    this.items.push({
      title: title,
      subTitle: subTitle,
      icon: icon && resolveAssetSource(icon),
      divider: false
    });
  }

  setTheme(theme) {
    this.theme = theme;
  }

  setSelection (selection) {
      this.selection = selection
  }

  onSelection = onSelection => {
    this._onSelection = onSelection;
  }

  show() {
    RNBottomActionSheet.SheetView({
      title: this.title,
      items: this.items,
      theme: this.theme,
      selection: this.selection
    }, (selection) => {
        this._onSelection && this._onSelection(selection)
    });
  }
}

export { SheetView };
