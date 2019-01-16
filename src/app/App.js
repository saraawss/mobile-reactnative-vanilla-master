/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './components/header/Header';
import ContactForm from './components/form/ContactForm';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View>
            <Header />
            <ContactForm />
        </View>
    );
  }
}

