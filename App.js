import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import contacts, {compareNames} from './contacts.js';
import Constants from 'expo-constants';
import ContactsList from './ContactsList';
import AddContactForm from './AddContactForm.js';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop : Constants.statusBarHeight,
  },
});

export default class App extends React.Component {
  state = {
    showContacts : false,
    contacts : contacts,
    showForm : false,
  }

  addContact = newContact => {
    this.setState(prevState => ({
      showForm : false,
      contacts : [...prevState.contacts, newContact],
    }))
  }

  toggleForm = () => {
    this.setState(prevState => ({showForm : !prevState.showForm}))
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts : !prevState.showContacts}))
  }

  sort = () => {
    this.setState( prevState => ({
      contacts : [...prevState.contacts].sort(compareNames)
    }));
  }

  render() {
    if(this.state.showForm) 
      return (<AddContactForm onSubmit={this.addContact} toggleForm={this.toggleForm}/>)
    return (
      <View style={styles.container}>
        <Button title='Toggle Contacts' onPress={this.toggleContacts} />
        <Button title='Add Contact' onPress={this.toggleForm} />
        { this.state.showContacts && <ContactsList contacts={this.state.contacts} /> }
      </View>
    );
  }

}