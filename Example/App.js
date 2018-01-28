/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from "react-native";

import RNBottomActionSheet from 'react-native-bottom-action-sheet'
let facebook = require('./assets/facebook.png')
let instagram = require('./assets/instagram.png')
let skype = require("./assets/skype.png");
let twitter = require("./assets/twitter.png");
let whatsapp = require("./assets/whatsapp.png");
let youtube = require("./assets/youtube.png");
let linkedin = require("./assets/linkedin.png");
let google = require("./assets/google.png");

export default class App extends Component<{}> {
  _showAlertView = () => {
    let AlertView = RNBottomActionSheet.AlertView()
    AlertView.setTitle("Awesome!");
    AlertView.setMessage("What can we improve? Your feedback is always welcome.");
    AlertView.setPositiveText("OK");
    AlertView.setPositiveBackgroundColor("#eeffee");
    AlertView.setPositiveTextColor("#006500");
    AlertView.setNegativeText("Exit");
    AlertView.setNegativeBackgroundColor("#ffebeb");
    AlertView.setNegativeTextColor("#760000");
    AlertView.onPositive()
    AlertView.onNegative()
    
    AlertView.show()
  }

  _showSheetView = () => {
    let SheetView = RNBottomActionSheet.SheetView()
    SheetView.setTitle("Awesome!")
    SheetView.addItem('Item 1', 'Item 1 Description')
    SheetView.addItem('Item 2', 'Item 2 Description')
    SheetView.addItem('Item 3', 'Item 3 Description')
    SheetView.addItem('Item 4', 'Item 4 Description')

    SheetView.show()
  }

  _showGridView = () => {
    let icon = <Image source={facebook}></Image>

    let GridView = RNBottomActionSheet.GridView();
    GridView.setTitle("Awesome!");
    GridView.addItem("Facebook", facebook);
    GridView.addItem("Instagram", instagram);
    GridView.addItem("Skype", skype);
    GridView.addItem("Twitter", twitter);
    GridView.addItem("WhatsApp", whatsapp);
    GridView.addItem("YouTube", youtube);
    GridView.addItem("Google", google);
    GridView.addItem("LinkedIn", linkedin);

    GridView.show();
  }

  render() {
    return <View style={styles.container}>
        <TouchableHighlight onPress={() => {
            this._showAlertView();
          }}>
          <Text>{"Alert View"}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
            this._showSheetView();
          }}>
          <Text>{"Sheet View"}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {
            this._showGridView();
          }}>
          <Text>{"Grid View"}</Text>
        </TouchableHighlight>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
