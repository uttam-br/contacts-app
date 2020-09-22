import React from 'react';
import {KeyboardAvoidingView, Button, TextInput, StyleSheet} from 'react-native';
import  PropTypes from 'prop-types';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container : {
        flex : 1,
        margin: 20,
        paddingTop : Constants.statusBarHeight,
        justifyContent: 'center',
    },
    textInput : {
        borderWidth : 1,
        padding : 10,
        marginVertical : 10
    }
})

export default class AddContactForm extends React.Component {
    
    static propTypes = {
        addContact : PropTypes.func,
    }

    state = {
        name : '',
        phone : '',
        isFormValid : false,
    }

    getHandler = key => val => {
        this.setState({[key] : val})
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.name != this.state.name || prevState.phone != this.state.phone)
            this.validateForm();
    }

    handleSubmit = () => {
        if(+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3)
            this.props.onSubmit(this.state)
    }

    validateForm = () => {
        const names = this.state.name.split(' ');
        if(+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3 && names[0] && names[1]) {
            this.setState({isFormValid : true})
        }
        else {
            this.setState({isFormValid: false})
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput 
                    style={styles.textInput}
                    value={this.state.name}
                    onChangeText={this.getHandler('name')}
                    placeholder='Name'
                />
                <TextInput 
                    style={styles.textInput}
                    value={this.state.phone}
                    onChangeText={this.getHandler('phone')}
                    keyboardType='numeric'
                    placeholder='Phone'
                />
                <Button title='Add Contact' disabled={!this.state.isFormValid} onPress={this.handleSubmit}/>
                <Button title='Back' onPress={this.props.toggleForm} />
            </KeyboardAvoidingView>
        )

    } // render method

}