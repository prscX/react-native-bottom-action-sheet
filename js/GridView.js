import { NativeModules } from "react-native";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const { RNBottomActionSheet } = NativeModules;

class GridView {
  constructor() {
    this.items = new Array();

    this.theme = 'light'
  }

  setTitle(title) {
    this.title = title;
  }

  addItem(title, icon) {
    this.items.push({ title: title, icon: resolveAssetSource(icon) });
  }

  setTheme(theme) {
    this.theme = theme
  }

  onSelection = (onSelection) => {
    this._onSelection = onSelection
  }

  show() {
    RNBottomActionSheet.GridView({
      title: this.title,
      items: this.items,
      theme: this.theme
    }, (selection) => {
      this._onSelection && this._onSelection(selection)
    });
  }
}

export { GridView };
