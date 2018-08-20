import React, { PureComponent } from "react";
import { ViewPropTypes, NativeModules } from "react-native";
import PropTypes from "prop-types";

import RNVectorHelper from './RNVectorHelper'

const { RNBottomActionSheet } = NativeModules;

class GridView extends PureComponent {
  static propTypes = {
    ...ViewPropTypes,

    title: PropTypes.string,
    theme: PropTypes.string,
    itemTextColor: PropTypes.string,
    itemTintColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    onSelection: PropTypes.func,
    visible: PropTypes.bool
  };

  static defaultProps = {
    title: "",
    theme: "light",
    itemTextColor: "",
    itemTintColor: "",
    backgroundColor: "",
    visible: false
  };

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

    props.items = props.items.map(element => {
      if (element.icon && element.icon.props) {
        element.icon = element.icon.props;

        let vectorIcon = RNVectorHelper.Resolve(
          element.icon.family,
          element.icon.name
        );
        element.icon = Object.assign({}, element.icon, vectorIcon);
      } else if (element.icon !== undefined) {
        element.icon = {
          name: element.icon,
          family: "",
          glyph: "",
          color: "",
          size: 0
        };
      } else {
        element.icon = {};
      }

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
        backgroundColor: props.backgroundColor
      },
      selectedIndex => {
        const selectedValue = props.items[selectedIndex].value;
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
      let props = this.props;
      let items = [];

      React.Children.map(this.props.children, (item, index) => {
        items.push({
          title: item.props.title,
          icon: item.props.icon,
          divider: false
        });
      });

      GridView.Show(Object.assign({}, props, { items: items }));
    }
  }

  render() {
    return null;
  }
}


class Item extends PureComponent { }

Item.propTypes = {
  title: PropTypes.string,
  divider: PropTypes.bool,

  icon: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ])
};

Item.defaultProps = {
  title: "",
  divider: false
};

GridView.Item = Item;

export { GridView };
