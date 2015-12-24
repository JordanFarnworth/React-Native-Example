/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var MOCKED_LOGIN_DATA = [
  {username: 'jwow', password: 'password'},
  {username: 'test', password: 'test'},
];

var React = require('react-native');
var forumEx = require('forumEx');
var loginHelper = require('loginHelper');
var securityHelper = require('securityHelper');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var ForumMobile = React.createClass({
  render: function() {
    var firstlogin = MOCKED_LOGIN_DATA[0];
    var secondlogin = MOCKED_LOGIN_DATA[1];
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to The Forum!
        </Text>
        <Text>{firstlogin.username}</Text>
        <Text>{firstlogin.password}</Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ForumMobile', () => ForumMobile);
