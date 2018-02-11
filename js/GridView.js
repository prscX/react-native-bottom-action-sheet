import React, { Component } from "react";
import { ViewPropTypes, NativeModules } from "react-native";
import PropTypes from "prop-types";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const { RNBottomActionSheet } = NativeModules;

class GridView extends Component {
  static Show(props) {
    if (props.title === undefined) props.title = GridView.defaultProps.title;
    if (props.items === undefined) props.items = GridView.defaultProps.items;
    if (props.theme === undefined) props.theme = GridView.defaultProps.theme;
    if (props.itemTextColor === undefined)
      props.itemTextColor = GridView.defaultProps.itemTextColor;
    if (props.itemTintColor === undefined)
      props.itemTintColor = GridView.defaultProps.itemTintColor;
    if (props.backgroundColor === undefined)
      props.backgroundColor = GridView.defaultProps.backgroundColor;
    if (props.delayDismissOnItemClick === undefined)
      props.delayDismissOnItemClick =
        GridView.defaultProps.delayDismissOnItemClick;

    props.items = props.items.map(element => {
      if (element.icon) element.icon = resolveAssetSource(element.icon);
      element.divider = false;

      return element;
    });

    RNBottomActionSheet.GridView(
      {
        title: props.title,
        items: props.items,
        theme: props.theme,
        itemTextColor: props.itemTextColor,
        itemTintColor: props.itemTintColor,
        backgroundColor: props.backgroundColor,
        delayDismissOnItemClick: props.delayDismissOnItemClick
      },
      selection => {
        props._onSelection && props._onSelection(selection);
      }
    );
  }
}


GridView.propTypes = {
  ...ViewPropTypes,

  title: PropTypes.string,
  items: PropTypes.array,
  theme: PropTypes.string,
  itemTextColor: PropTypes.string,
  itemTintColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  delayDismissOnItemClick: PropTypes.func,
  onSelection: PropTypes.func,
  visible: PropTypes.bool
};

GridView.defaultProps = {
  title: '',
  items: new Array(),
  theme: "light",
  itemTextColor: "",
  itemTintColor: "",
  backgroundColor: "",
  delayDismissOnItemClick: false,
  visible: false
};

export { GridView };
