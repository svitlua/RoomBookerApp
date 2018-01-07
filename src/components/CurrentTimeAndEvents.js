import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import EventItemInProgress from './EventItemInProgress';

class CurrentTimeAndEvents extends React.Component{

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
  getRoomStatus=(eventArr)=>{
    if(eventArr.length > 0){
      return "BOOKED";
    }
    return "AVAILABLE";
  }
  render(){
    let time = moment(this.currentDateTime).format("HH:mm");
    let day = moment(this.currentDateTime).format("dd");
    let date = moment(this.currentDateTime).format("MMM, D");
    let eventInProgressArr = this.getEventInProgress(this.props.currentDateTime, this.props.events)
    let roomStatus = this.getRoomStatus(eventInProgressArr);


    return(
      <View style={[styles.timeAndEventDisplay, styles[`ROOM_${roomStatus}`]]}>

        {eventInProgressArr.length >0 &&
          <View>
          <Text style={styles.roomStatusText}>Room is Booked</Text>
            <FlatList style={styles.currentEventsList}
            data={eventInProgressArr}
            renderItem={({item}) => <EventItemInProgress eventItem={item} key={item.id}/>}
            keyExtractor={(item, index) => index}/>
          </View>
        }

        {eventInProgressArr.length === 0 &&
          <Text style={styles.roomStatusText}>Room is Available</Text>
        }

        <View>
  				<Text style={styles.timeText}>{day}, {date}</Text>
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  timeAndEventDisplay: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },

  timeText: {
		color: 'white',
		fontSize: 16,
    textAlign: 'right',
  },

  roomStatusText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    marginBottom: 5,
  },
  ROOM_BOOKED: {
    backgroundColor: '#ff6666',
	},
  ROOM_AVAILABLE: {
    backgroundColor: '#00994d',
  },

  eventInProgress: {
    backgroundColor: '#00b359',
  }
});

export default CurrentTimeAndEvents;
