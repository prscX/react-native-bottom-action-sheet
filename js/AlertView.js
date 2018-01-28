
import { NativeModules } from "react-native";

const { RNBottomActionSheet } = NativeModules;

class AlertView {
  constructor() {
      this.theme = 'light'
      this.positiveText = 'OK'
      this.positiveBackgroundColor = "#3f51b5"
      this.positiveTextColor = '#FFFFFF'
      this.negativeTextColor = "#3f51b5"
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

  onPositive = (onPositive) => {
      this.onPositive = onPositive
  };

  onNegative = (onNegative) => {
      this.onNegative = onNegative
  };

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
    }, (selection) => {
        if (selection === 1) {
            this.onPositive && this.onPositive()
        } else if (selection === 0) {
            this.onNegative && this.onNegative();
        }
    });
  }
}

export { AlertView }