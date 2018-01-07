import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import {getStartTime, getEndTime, getEventDate, getEventScheduledOnDate, getEventScheduledOnTime} from '../timeUtil';

class EventItem extends React.Component{
  static PropTypes = {
    eventItem: PropTypes.object.isRequired,
  };
  state = {
    isModalVisible: false,
  };

  getEventStatus = (eventItem) =>{
    const dateNow = moment();
    if (moment(eventItem.end.dateTime).isBefore(dateNow)){
      return 'PAST';
    }
    if (moment(eventItem.start.dateTime).isAfter(dateNow)){
      return 'FUTURE';
    }
    return 'CURRENT';
  };

  toggleModal(visible) {
    this.setState({ isModalVisible: visible });
  }

  render(){
    const {eventItem} = this.props;
    const eventStartTime = getStartTime(eventItem);
    const eventEndTime = getEndTime(eventItem);
    const eventStatus = this.getEventStatus(eventItem);
    return(
      <View>
        <View style={[styles.eventInfo, styles[`INFO_${eventStatus}`]]}>
          <TouchableOpacity  onPress = {()=>{this.toggleModal(true);}}>
            <Text style={[styles.eventName, styles[`STATUS_${eventStatus}`]]}>{eventItem.summary}</Text>
            <Text style={[styles.eventTime, styles[`STATUS_${eventStatus}`]]}>{eventStartTime}-{eventEndTime}</Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible= {this.state.isModalVisible}
          transparent
          maskClosable={false}
          supportedOrientations={['portrait', 'landscape']}
          onRequestClose={ () => { this.toggleModal(!this.state.isModalVisible);}}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <View style={styles.ImageAndEventContainer}>
                <Image style={{width: 50, height: 50}}
                source={require('../images/event_icon_color.png')}/>
                <View style={[styles.eventInfo, styles.eventInfoDetail, styles[`INFO_${eventStatus}`]]}>
                  <Text style={styles.eventName}>{eventItem.summary}</Text>
                  <Text style={styles.eventTime}>{eventStartTime}-{eventEndTime} on {getEventDate(eventItem)}</Text>
              </View>

              </View>
                <Text style={styles.eventDetail}>Added by: {eventItem.creator.email}</Text>
                <Text style={styles.eventDetail}>Scheduled at: {getEventScheduledOnTime(eventItem)} on {getEventScheduledOnDate(eventItem)}</Text>
                <Text style={styles.eventDetail}>From: {eventItem.organizer.displayName}</Text>
                <TouchableHighlight onPress = {() =>{
                           this.toggleModal(!this.state.isModalVisible)}}>
                           <Text style = {styles.okBtn}>OK</Text>
                </TouchableHighlight>
            </View>

          </View>
        </Modal>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  eventInfo: {
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
    paddingTop: 5,
    backgroundColor: 'white',
  },
  eventInfoDetail: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    paddingHorizontal: 10,
  },
  eventName: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  eventTime: {
    fontSize: 16,
    marginBottom: 5,
  },
  eventDetail: {
    fontSize: 16,
  },

  STATUS_PAST: {
    color: '#555',
  },
  STATUS_CURRENT: {
    color: '#cc0000',
  },
  STATUS_FUTURE: {
    color: '#000',
  },
  INFO_PAST: {
    borderColor: '#888',
  },
  INFO_CURRENT: {
    borderColor: '#ff6666',
  },
  INFO_FUTURE: {
    borderColor: '#99b3ff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginHorizontal: 20,
  },
  okBtn: {
    fontSize: 22,
    textAlign: 'center',
    backgroundColor: '#46a0ae',
    color: 'white',
    paddingVertical: 7,
    marginTop: 10,
  },
  ImageAndEventContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: 240,
    paddingHorizontal: 5,
  },

});

export default EventItem;
