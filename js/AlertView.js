
import { NativeModules } from "react-native";

const { RNBottomActionSheet } = NativeModules;

class AlertView {
  constructor() {
      this.theme = 'light'
  }

  setTitle(title) {
    this.title = title;
  }

  setMessage(message) {
    this.message = message;
  }

  setPositiveText(positiveText) {
    this.positiveText = positiveText;
  }

  setPositiveBackgroundColor(positiveBackgroundColor) {
    this.positiveBackgroundColor = positiveBackgroundColor;
  }

  setPositiveTextColor(positiveTextColor) {
    this.positiveTextColor = positiveTextColor;
  }

  setNegativeText(negativeText) {
    this.negativeText = negativeText;
  }

  setNegativeBackgroundColor(negativeBackgroundColor) {
    this.negativeBackgroundColor = negativeBackgroundColor;
  }

  setNegativeTextColor(negativeTextColor) {
    this.negativeTextColor = negativeTextColor;
  }

  setTheme(theme) {
    this.theme = theme;
  }

  onPositive = () => {};

  onNegative = () => {};

  show() {
    RNBottomActionSheet.AlertView({
      title: this.title,
      message: this.message,
      positiveText: this.positiveText,
      positiveBackgroundColor: this.positiveBackgroundColor,
      positiveTextColor: this.positiveTextColor,
      negativeText: this.negativeText,
      negativeBackgroundColor: this.negativeBackgroundColor,
      negativeTextColor: this.negativeTextColor,
      theme: this.theme
    });
  }
}

export { AlertView }