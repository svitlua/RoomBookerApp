import React from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';
import ajax from '../ajax';
import CurrentTimeAndEvents from './CurrentTimeAndEvents';
import EventList from './EventList';
import moment from 'moment';


export default class App extends React.Component {
  state = {
    events: [],
    isLoading: true,
    currentDateTime: moment(),
  }


  async componentDidMount(){
    const events = await ajax.fetchEvents();
    this.setState({events});
    this.setState({
      isLoading: false
    });
    setInterval(()=> {
          this.setState({
            currentDateTime: moment(),
          });
        }, 60*1000);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
      {
        this.state.isLoading ?
          <View><Text style={styles.title}>RoomBooker App</Text>
          <ActivityIndicator size="large" color="#99b3ff" /></View>
          :
          <View style={styles.container}>
            <View style={styles.dateContainer}>
                <CurrentTimeAndEvents currentDateTime={this.state.currentDateTime} events={this.state.events} />
            </View>
            <View style={styles.eventsContainer}>
                <EventList events={this.state.events} />
            </View>
          </View>
        }
        </View>
      );
  }
}

//TODO:change stylesheet for horizontal layout
const styles = StyleSheet.create({
  mainContainer :{
    justifyContent: 'center',
    flex:1,
  },
  title:{
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    marginBottom: 10
  },
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
  },
  eventsContainer: {
    backgroundColor: '#fff2e6',
    flex: 3,
    width: '100%',
  },
});
