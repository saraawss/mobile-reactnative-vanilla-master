import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
const _ = require('lodash');
import styles from './styles';

import t from 'tcomb-form-native'; // 0.6.9
const DataService = require('../../services/data-service');

const Form = t.form.Form;

const stylesheet = _.cloneDeep(Form.stylesheet);
stylesheet.textbox.normal.backgroundColor = '#fff';
stylesheet.controlLabel.normal.fontWeight = 'normal';
stylesheet.textbox.normal.marginBottom = 60;

const User = t.struct({
  firstname: t.String,
  lastname: t.String
});


const options = {
  fields: {
    firstname: {
      placeholder: 'Please enter a Firstname',
      error: 'Firstname must not be blank',
      stylesheet: stylesheet
    },
    lastname: {
          placeholder: 'Please enter a Lastname',
          error: 'Lastname must not be blank',
          stylesheet: stylesheet
    },

  }
};

const message_ = { response: "" };

class ContactForm extends React.Component {

    constructor(props) {
	    super(props);
	    this.state = {
	    		message: ''
	    };

	}


  handleSubmit = () => {

      let value = this.refs.form.getValue();

      if (value) {
        DataService
         .submitData(value)
         .then(msg => {
            message_ = msg;
            this.setState({message: message_.message});
            return;
         })
          .catch(error => {
            this.setState({message: "Error"});
            return;
          });
      }
   }

  render() {
    return (
      <View style={styles.container}>
        <Form ref="form" type={User} options={options} />
        <Text style={styles.results}>  { this.state.message } </Text>
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}



export default ContactForm;