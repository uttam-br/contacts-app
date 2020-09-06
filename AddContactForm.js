import React from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';
import  PropTypes from 'prop-types';

const styles = StyleSheet.create({
    textInput : {
        borderWidth: 1,
        padding: 10,
        marginVertical: 10
    }
})

export default class AddContactForm extends React.Component {
    static propTypes = {
        addContact: PropTypes.func,
    }
    state = {
        name : '',
        phone : '',
    }

    handleNameChange = (name) => {
        this.setState({name})
    }
    
    handlePhoneChange = (phone) => {
        this.setState({phone})
    }

    render() {
        return (
            <View style={{margin:20, paddingTop:20}}>
                <TextInput 
                    style={styles.textInput}
                    value={this.state.name}
                    onChangeText={this.handleNameChange}
                    placeholder='Name'
                />
                <TextInput 
                    style={styles.textInput}
                    value={this.state.phone}
                    onChangeText={this.handlePhoneChange}
                    keyboardType='numeric'
                    placeholder='Phone'
                />
                <Button title='Add Contact'/>
                <Button title='Back' onPress={this.props.toggleForm} />
            </View>
        )
    }
}