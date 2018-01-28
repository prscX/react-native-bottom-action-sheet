import { NativeModules } from "react-native";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const { RNBottomActionSheet } = NativeModules;

class GridView {
  constructor() {
    this.items = new Array();

    this.theme = "light";

    this.itemTextColor = "";
    this.itemTintColor = "";
    this.backgroundColor = "";
    this.delayDismissOnItemClick = false;
  }

  setTitle(title) {
    this.title = title;
  }

  setItemTextColor(itemTextColor) {
    this.itemTextColor = itemTextColor;
  }

  setItemTintColor(itemTintColor) {
    this.itemTintColor = itemTintColor;
  }

  setBackgroundColor(backgroundColor) {
    this.backgroundColor = backgroundColor;
  }

  setDelayDismissOnItemClick(delayDismissOnItemClick) {
    this.delayDismissOnItemClick = delayDismissOnItemClick;
  }

  addItem(title, icon) {
    this.items.push({
      title: title,
      icon: icon && resolveAssetSource(icon),
      divider: false
    });
  }

  setTheme(theme) {
    this.theme = theme;
  }

  onSelection = onSelection => {
    this._onSelection = onSelection;
  };

  show() {
    RNBottomActionSheet.GridView(
      {
        title: this.title,
        items: this.items,
        theme: this.theme,
        itemTextColor: this.itemTextColor,
        itemTintColor: this.itemTintColor,
        backgroundColor: this.backgroundColor,
        delayDismissOnItemClick: this.delayDismissOnItemClick
      },
      selection => {
        this._onSelection && this._onSelection(selection);
      }
    );
  }
}

export { GridView };
