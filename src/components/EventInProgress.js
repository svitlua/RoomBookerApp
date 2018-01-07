import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import EventItemInProgress from './EventItemInProgress';

class EventInProgress extends React.Component{

  static PropTypes = {
    currentDateTime: PropTypes.string.isRequired,
    events: PropTypes.string.isRequired,
  };

  getEventInProgress = (currentDateTime, events) => {
    let eventInProgressArr = events.filter((eventItem) => {
      return (!moment(eventItem.end.dateTime).isBefore(currentDateTime) & !moment(eventItem.start.dateTime).isAfter(currentDateTime));
     });

     return eventInProgressArr;
  }

  render(){
    let eventInProgressArr = this.getEventInProgress(this.props.currentDateTime, this.props.events)
    return(
      <View>
      {eventInProgressArr.length >0 &&
        <FlatList
        data={eventInProgressArr}
        renderItem={({item}) => <EventItemInProgress eventItem={item} key={item.id}/>}
        keyExtractor={(item, index) => index}/>
      }
      </View>


    );
  }
}

export default EventInProgress;
