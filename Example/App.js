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

import Icon from "react-native-vector-icons/FontAwesome";

export default class App extends Component<{}> {
  constructor (props) {
    super(props)

    this.state = {
      alterView: false,
      sheetView: false,
      gridView: false
    }
  }

  _showAlertView = () => {
    let AlertView = RNBottomActionSheet.AlertView
    AlertView.Show({
      title: "Awesome!",
      message: "What can we improve? Your feedback is always welcome.",
      positiveText: "OK",
      positiveBackgroundColor: "#eeffee",
      positiveTextColor: "#006500",
      negativeText: "Exit",
      negativeBackgroundColor: "#ffebeb",
      negativeTextColor: "#760000",
      theme: 'light',
      onPositive: () => {
        console.log('positive clicked')
      },
      onNegative: () => {
        console.log('negative clicked')
      }
    })
  }

  _showSheetView = () => {
    let facebook = <Icon name={"facebook"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let instagram = <Icon name={"instagram"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let skype = <Icon name={"skype"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let twitter = <Icon name={"twitter"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let whatsapp = <Icon name={"whatsapp"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let youtube = <Icon name={"youtube"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let google = <Icon name={"google"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let linkedin = <Icon name={"linkedin"} color={"#000000"} size={40} family={"FontAwesome"} />;

    let SheetView = RNBottomActionSheet.SheetView
    SheetView.Show({
      title: "Awesome!",
      items: [
        { title: "Facebook", subTitle: "Facebook Description", icon: 'facebook.png' },
        { title: "Instagram", subTitle: "Instagram Description" },
        { title: "Skype", subTitle: "Skype Description", icon: skype },
        { title: "Twitter", subTitle: "Twitter Description", icon: twitter, divider: true },
        { title: "WhatsApp", subTitle: "WhatsApp Description", icon: whatsapp },
        { title: "YouTube", subTitle: "YouTube Description", icon: youtube },
        { title: "Google", subTitle: "Google Description", icon: google },
        { title: "LinkedIn", subTitle: "LinkedIn Description", icon: linkedin }
      ],
      theme: "light",
      selection: 3,
      onSelection: selection => {
        console.log("selection: " + selection);
      }
    });
  }

  _showGridView = () => {
    let facebook = <Icon name={'facebook'} color={'#000000'} size={40} family={'FontAwesome'} />
    let instagram = <Icon name={"instagram"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let skype = <Icon name={"skype"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let twitter = <Icon name={"twitter"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let whatsapp = <Icon name={"whatsapp"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let youtube = <Icon name={"youtube"} color={"#000000"} size={40} family={"FontAwesome"} />;
    let google = <Icon name={'google'} color={'#000000'} size={40} family={'FontAwesome'} />
    let linkedin = <Icon name={"linkedin"} color={"#000000"} size={40} family={"FontAwesome"} />;


    let GridView = RNBottomActionSheet.GridView
    GridView.Show({
      title: "Awesome!",
      items: [
        { title: "Facebook", icon: 'facebook.png' },
        { title: "Instagram" },
        { title: "Skype", icon: skype },
        { title: "Twitter", icon: twitter },
        { title: "WhatsApp", icon: whatsapp },
        { title: "YouTube", icon: youtube },
        { title: "Google", icon: google },
        { title: "LinkedIn", icon: linkedin }
      ],
      theme: 'light',
      onSelection: (selection) => {
        console.log('selection: ' + selection)
      }
    });
  }

  render() {
    let facebook = <Icon name={"facebook"} size={40} color={"#000000"} family={"FontAwesome"} />;
    let instagram = <Icon name={"instagram"} size={40} color={"#000000"} family={"FontAwesome"} />;
    let skype = <Icon name={"skype"} size={40} color={"#000000"} family={"FontAwesome"} />;
    let twitter = <Icon name={"twitter"} size={40} color={"#000000"} family={"FontAwesome"} />;
    let whatsapp = <Icon name={"whatsapp"} size={40} color={"#000000"} family={"FontAwesome"} />;
    let youtube = <Icon name={"youtube"} size={40} color={"#000000"} family={"FontAwesome"} />;
    let google = <Icon name={"google"} size={40} color={"#000000"} family={"FontAwesome"} />;
    let linkedin = <Icon name={"linkedin"} size={40} color={"#000000"} family={"FontAwesome"} />;


    return <View style={styles.container}>
        <TouchableHighlight onPress={() => {
            this._showAlertView();
            // this.setState({
            //   alterView: true,
            //   sheetView: false,
            //   gridView: false
            // });
          }}>
          <Text>{"Alert View"}</Text>
        </TouchableHighlight>
        <RNBottomActionSheet.AlertView visible={this.state.alterView} title={"Awesome!"} message={"What can we improve? Your feedback is always welcome."} positiveText={"OK"} positiveBackgroundColor={"#eeffee"} positiveTextColor={"#006500"} negativeText={"Exit"} negativeBackgroundColor={"#ffebeb"} negativeTextColor={"#760000"} theme={"light"} onPositive={() => {
            console.log("positive clicked");
          }} onNegative={() => {
            console.log("negative clicked");
          }} />
        <TouchableHighlight onPress={() => {
            this._showSheetView();
            // this.setState({
            //   alterView: false,
            //   sheetView: true,
            //   gridView: false
            // });
          }}>
          <Text>{"Sheet View"}</Text>
        </TouchableHighlight>
        <RNBottomActionSheet.SheetView visible={this.state.sheetView} title={"Awesome!"} theme={"light"} onSelection={selection => {
            console.log("selection: " + selection);
          }}>
          <RNBottomActionSheet.SheetView.Item title={"Facebook"} subTitle={"Facebook Description"} icon={facebook} />
          <RNBottomActionSheet.SheetView.Item title={"Instagram"} subTitle={"Instagram Description"} icon={instagram} />
          <RNBottomActionSheet.SheetView.Item title={"Skype"} subTitle={"Skype Description"} icon={skype} />
          <RNBottomActionSheet.SheetView.Item title={"Twitter"} subTitle={"Twitter Description"} icon={twitter} divider={true} />
          <RNBottomActionSheet.SheetView.Item title={"WhatsApp"} subTitle={"WhatsApp Description"} icon={whatsapp} />
          <RNBottomActionSheet.SheetView.Item title={"YouTube"} subTitle={"YouTube Description"} icon={youtube} />
          <RNBottomActionSheet.SheetView.Item title={"Google"} subTitle={"Google Description"} icon={google} />
          <RNBottomActionSheet.SheetView.Item title={"LinkedIn"} subTitle={"LinkedIn Description"} icon={linkedin} />
        </RNBottomActionSheet.SheetView>
        <TouchableHighlight onPress={() => {
            this._showGridView();
            // this.setState({
            //   alterView: false,
            //   sheetView: false,
            //   gridView: true
            // });
          }}>
          <Text>{"Grid View"}</Text>
        </TouchableHighlight>
        <RNBottomActionSheet.GridView visible={this.state.gridView} title={"Awesome!"} theme={"light"} selection={3} onSelection={selection => {
            console.log("selection: " + selection);
          }}>
          <RNBottomActionSheet.GridView.Item title={"Facebook"} icon={facebook} />
          <RNBottomActionSheet.GridView.Item title={"Instagram"} icon={instagram} />
          <RNBottomActionSheet.GridView.Item title={"Skype"} icon={skype} />
          <RNBottomActionSheet.GridView.Item title={"Twitter"} icon={twitter} />
          <RNBottomActionSheet.GridView.Item title={"WhatsApp"} icon={whatsapp} />
          <RNBottomActionSheet.GridView.Item title={"YouTube"} icon={youtube} />
          <RNBottomActionSheet.GridView.Item title={"Google"} icon={google} />
          <RNBottomActionSheet.GridView.Item title={"LinkedIn"} icon={linkedin} />
        </RNBottomActionSheet.GridView>
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
