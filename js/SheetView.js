import { NativeModules } from "react-native";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const { RNBottomActionSheet } = NativeModules;


class SheetView {
  constructor() {
    this.items = new Array();
    this.theme = "light";

    this.titleTextColor = ''
    this.itemTextColor = ''
    this.itemTintColor = ''
    this.backgroundColor = ''
    this.delayDismissOnItemClick = false
  }

  setTitle(title) {
    this.title = title;
  }

  setTitleTextColor (titleTextColor) {
    this.titleTextColor = titleTextColor
  }

  setItemTextColor (itemTextColor) {
    this.itemTextColor = itemTextColor;
  }

  setItemTintColor (itemTintColor) {
    this.itemTintColor = itemTintColor
  }

  setBackgroundColor (backgroundColor) {
    this.backgroundColor = backgroundColor
  }

  setDelayDismissOnItemClick (delayDismissOnItemClick) {
    this.delayDismissOnItemClick = delayDismissOnItemClick
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
    RNBottomActionSheet.SheetView(
      {
        title: this.title,
        items: this.items,
        theme: this.theme,
        selection: this.selection,
        titleTextColor: this.titleTextColor,
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

export { SheetView };
