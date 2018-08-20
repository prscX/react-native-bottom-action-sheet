import React, { PureComponent } from "react";
import { ViewPropTypes, NativeModules } from "react-native";
import PropTypes from "prop-types";

import RNVectorHelper from "./RNVectorHelper";

const { RNBottomActionSheet } = NativeModules;

class SheetView extends PureComponent {

  static propTypes = {
    ...ViewPropTypes,

    title: PropTypes.string,
    theme: PropTypes.string,

    selection: PropTypes.number,
    titleTextColor: PropTypes.string,
    itemTextColor: PropTypes.string,
    itemTintColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    delayDismissOnItemClick: PropTypes.bool,
    visible: PropTypes.bool
  };

  static defaultProps = {
    title: '',
    theme: 'light',

    selection: -1,
    titleTextColor: '',
    itemTextColor: '',
    itemTintColor: '',
    backgroundColor: '',
    delayDismissOnItemClick: false,
    visible: false
  };

  static Show(props) {
    if (props.title === undefined) props.title = SheetView.defaultProps.title;
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
      if (element.divider === undefined) element.divider = false;

      if (element.icon && element.icon.props) {
        element.icon = element.icon.props;

        let vectorIcon = RNVectorHelper.Resolve(element.icon.family, element.icon.name);
        element.icon = Object.assign({}, element.icon, vectorIcon);
      } else if (element.icon !== undefined) {
        element.icon = { name: element.icon, family: "", glyph: "", color: "", size: 0 };
      } else {
        element.icon = {}
      }

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
      selectedIndex => {
        const selectedValue = props.items[selectedIndex].value
        props.onSelection && props.onSelection(selectedIndex, selectedValue);
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
      let props = this.props
      let items = []

      React.Children.map(
        this.props.children,
        (item, index) => {
          items.push({
            title: item.props.title,
            subTitle: item.props.subTitle,
            icon: item.props.icon,
            divider: item.props.divider === undefined ? '' : item.props.divider
          })
        }
      )

      SheetView.Show(Object.assign({}, props, { items: items }));
    }
  }

  render() {
    return null;
  }
}

class Item extends PureComponent { }

Item.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  divider: PropTypes.bool,

  icon: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ])
}

Item.defaultProps = {
  title: '',
  subTitle: '',
  divider: false
}

SheetView.Item = Item

export { SheetView };
