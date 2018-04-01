import React, { PureComponent } from "react";
import { ViewPropTypes, NativeModules } from "react-native";
import PropTypes from "prop-types";

const { RNBottomActionSheet } = NativeModules;

class AlertView extends PureComponent {

  static propTypes = {
    ...ViewPropTypes,

    title: PropTypes.string,
    message: PropTypes.string,
    positiveText: PropTypes.string,
    positiveBackgroundColor: PropTypes.string,
    positiveTextColor: PropTypes.string,
    negativeText: PropTypes.string,
    negativeBackgroundColor: PropTypes.string,
    negativeTextColor: PropTypes.string,
    theme: PropTypes.string,

    onPositive: PropTypes.func,
    onNegative: PropTypes.func,

    visible: PropTypes.bool
  };

  static defaultProps = {
    title: "",
    message: "",
    positiveText: "OK",
    positiveBackgroundColor: "#3f51b5",
    positiveTextColor: "@FFFFFF",
    negativeText: "",
    negativeBackgroundColor: "",
    negativeTextColor: "@3f51b5",
    theme: "light",
    visible: false
  };

  static Show(props) {
    if (props.title === undefined) props.title = AlertView.defaultProps.title;
    if (props.message === undefined)
      props.message = AlertView.defaultProps.message;
    if (props.positiveText === undefined)
      props.positiveText = AlertView.defaultProps.positiveText;
    if (props.positiveBackgroundColor === undefined)
      props.positiveBackgroundColor =
        AlertView.defaultProps.positiveBackgroundColor;
    if (props.positiveTextColor === undefined)
      props.positiveTextColor = AlertView.defaultProps.positiveTextColor;
    if (props.negativeText === undefined)
      props.negativeText = AlertView.defaultProps.negativeText;
    if (props.negativeBackgroundColor === undefined)
      props.negativeBackgroundColor =
        AlertView.defaultProps.negativeBackgroundColor;
    if (props.negativeTextColor === undefined)
      props.negativeTextColor = AlertView.defaultProps.negativeTextColor;

    RNBottomActionSheet.AlertView(
      {
        title: props.title,
        message: props.message,
        positiveText: props.positiveText,
        positiveBackgroundColor: props.positiveBackgroundColor,
        positiveTextColor: props.positiveTextColor,
        negativeText: props.negativeText,
        negativeBackgroundColor: props.negativeBackgroundColor,
        negativeTextColor: props.negativeTextColor,
        theme: props.theme
      },
      selection => {
        if (selection === 1) {
          props.onPositive && props.onPositive();
        } else if (selection === 0) {
          props.onNegative && props.onNegative();
        }
      }
    );
  }

  componentDidMount() {
    this._show();
  }

  componentDidUpdate() {
    this._show();
  }

  _show() {
    if (this.props.visible) {
      AlertView.Show(this.props)
    }
  }

  render() {
    return null;
  }
}


export { AlertView }
