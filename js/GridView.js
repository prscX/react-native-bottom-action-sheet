import { NativeModules } from "react-native";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const { RNBottomActionSheet } = NativeModules;

class GridView {
  constructor() {
    this.items = new Array();
  }

  setTitle(title) {
    this.title = title;
  }

  addItem(title, icon) {
    this.items.push({ title: title, icon: resolveAssetSource(icon) });
  }

  show() {
    RNBottomActionSheet.GridView({
      title: this.title,
      items: this.items
    });
  }
}

export { GridView };
