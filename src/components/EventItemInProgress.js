import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import {getStartTime, getEndTime} from '../timeUtil';


class EventItemInProgress extends React.Component{
  static PropTypes = {
    eventItem: PropTypes.object.isRequired,
  };

  render(){
    const {eventItem} = this.props;
    const eventStartTime = getStartTime(eventItem);
    const eventEndTime = getEndTime(eventItem);
    return(
      <View style={styles.eventFrame}>
          <Text style={styles.eventName}>{eventItem.summary}</Text>
          <Text style={styles.eventTime}>{eventStartTime}-{eventEndTime}</Text>
      </View>
    );
  };
}


const styles = StyleSheet.create({
  eventFrame: {
    borderColor: 'white',
    borderLeftWidth: 4,
    borderBottomWidth: .5,
    borderTopWidth: .5,
    borderRightWidth: .5,
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 3,
    width: 230,
  },
  eventName: {
    textAlign: 'left',
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  eventTime: {
    textAlign: 'left',
    fontSize: 16,
    color: 'white',
  }
});

export default EventItemInProgress;
