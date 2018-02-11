import React, { Component } from "react";
import { ViewPropTypes, NativeModules } from "react-native";
import PropTypes from "prop-types";
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";

const { RNBottomActionSheet } = NativeModules;

class SheetView extends Component {
  static Show(props) {
    if (props.title === undefined) props.title = SheetView.defaultProps.theme;
    if (props.items === undefined) props.items = SheetView.defaultProps.items;
    if (props.theme === undefined) props.theme = SheetView.defaultProps.theme;
    if (props.selection === undefined)
      props.selection = SheetView.defaultProps.selection;
    if (props.titleTextColor === undefined)
      props.titleTextColor = SheetView.defaultProps.titleTextColor;
    if (props.itemTextColor === undefined)
      props.itemTextColor = SheetView.defaultProps.itemTextColor;
    if (props.itemTintColor === undefined)
      props.itemTintColor = SheetView.defaultProps.itemTintColor;
    if (props.backgroundColor === undefined)
      props.backgroundColor = SheetView.defaultProps.backgroundColor;
    if (props.delayDismissOnItemClick === undefined)
      props.delayDismissOnItemClick =
        SheetView.defaultProps.delayDismissOnItemClick;

    props.items = props.items.map(element => {
      if (element.title === undefined) element.title = "";
      if (element.subTitle === undefined) element.subTitle = "";
      if (element.icon) element.icon = resolveAssetSource(element.icon);
      if (element.divider === undefined) element.divider = false;

      return element;
    });

    RNBottomActionSheet.SheetView(
      {
        title: props.title,
        items: props.items,
        theme: props.theme,
        selection: props.selection,
        titleTextColor: props.titleTextColor,
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


SheetView.propTypes = {
  ...ViewPropTypes,

  title: PropTypes.string,
  items: PropTypes.array,
  theme: PropTypes.string,

  selection: PropTypes.number,
  titleTextColor: PropTypes.string,
  itemTextColor: PropTypes.string,
  itemTintColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  delayDismissOnItemClick: PropTypes.bool,
  visible: PropTypes.bool
};

SheetView.defaultProps = {
  title: '',
  items: new Array(),
  theme: 'light',

  selection: 0,
  titleTextColor: '',
  itemTextColor: '',
  itemTintColor: '',
  backgroundColor: '',
  delayDismissOnItemClick: false,
  visible: false
};


export { SheetView };
