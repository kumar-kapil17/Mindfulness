import React from 'react';
import { Button,View,Text } from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';
 
export default class Email extends React.Component {
    state = {
        email: '',
    }
 
    handleChange = (email) => {
        this.setState({ email });
    }
 
    submit = () => {
        // your submit logic
    }
 
    handleSubmit = () => {
        this.refs.form.submit();
    }
 
    render() {
        const { email } = this.state;
        return (
            <Form
                ref="form"
                onSubmit={this.handleSubmit}>
                <View style={{height:45,marginLeft:16,paddingLeft:20,
                             borderBottomWidth:0.5,borderRadius:30}}>
                <TextValidator
                    name="email"
                    label="email"
                    validators={['required', 'isEmail']}
                    errorMessages={['This field is required', 'Email invalid']}
                    placeholder="Email"
                    type="text"
                    underlineColorAndroid="transparent"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={this.handleChange}
                />
                </View>
    
            </Form>
        );
    }
}