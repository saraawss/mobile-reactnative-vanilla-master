import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import styles from './styles';

class Header extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.text}>Add a New User</Text>
          </View>
        );
    }
}

export default Header;