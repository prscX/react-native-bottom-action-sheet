import { NativeModules } from "react-native";

const { RNBottomActionSheet } = NativeModules;


class SheetView {
  constructor() {
    this.items = new Array();
    this.theme = 'light'
  }

  setTitle(title) {
    this.title = title;
  }

  addItem(title, subTitle, icon) {
    this.items.push({
      title: title,
      subTitle: subTitle,
      icon: icon
    });
  }

  setTheme(theme) {
    this.theme = theme;
  }

  show() {
    RNBottomActionSheet.SheetView({
      title: this.title,
      items: this.items,
      theme: this.theme
    });
  }
}

export { SheetView };
