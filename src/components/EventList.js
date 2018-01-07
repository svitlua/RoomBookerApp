import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import EventItem from './EventItem';
import moment from 'moment';
import sortBy from 'lodash/sortBy'

class EventList extends React.Component{
  static PropTypes = {
    events: PropTypes.array.isRequired,
  };

  state = {
    date: moment(),
  };

  getEventsForSpecificDateSorted = (events, date) => {
    let eventsArray = events.filter((eventItem) => {
      return moment(date).isSame(eventItem.start.dateTime, 'day');
     });
     return sortBy(eventsArray, 'start.dateTime');
  };

  handleBeforePress = () =>{
    const afterDate = moment(this.state.date).subtract(1, 'day');
    this.setState({
      date: afterDate,
    });
  };

  handleAfterPress = () =>{
    const afterDate = moment(this.state.date).add(1, 'day');
    this.setState({
      date: afterDate,
    });
  };

  render(){
    const date = moment(this.state.date).format("ll");
    const eventsForSpecificDate = this.getEventsForSpecificDateSorted(this.props.events, this.state.date);
    const leftSign='<<';
    const rightSign='>>';

    return(
      <View style={styles.container}>
        <View style={styles.changeDateContainer}>
          <TouchableOpacity onPress={this.handleBeforePress}>
          <Text style={styles.beforeAfterDateBtn}>{leftSign}</Text>
          </TouchableOpacity>
          <Text style={styles.eventOnDateText}>Events on {date}</Text>
          <TouchableOpacity onPress={this.handleAfterPress}>
          <Text style={styles.beforeAfterDateBtn}>{rightSign}</Text>
          </TouchableOpacity>
        </View>
        { eventsForSpecificDate.length > 0 &&
            <FlatList style={styles.eventList}
            data={eventsForSpecificDate}
            renderItem={({item}) => <EventItem eventItem={item} key={item.id}/>}
            keyExtractor={(item, index) => index}/>
        }

         { eventsForSpecificDate.length === 0 &&
             <View style={styles.noEventsView}>
              <Text style={styles.noEventsText}>No events scheduled</Text>
             </View>
         }


      </View>
    );
  };
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  eventOnDateText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
  eventList: {
    flex: 4,
  },
  changeDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor:'white',
    width: '100%',
    alignItems: 'center',
  },
  beforeAfterDateBtn: {
    color: '#99b3ff',
    fontSize: 30,
    fontWeight: '600',
  },

  noEventsView: {
    borderWidth: 4,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'white',
    borderColor: '#888',
  },
  noEventsText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  }
})

export default EventList;
