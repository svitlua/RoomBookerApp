import moment from 'moment';

export const getStartTime = (eventItem) => {
  if(eventItem.start.date){
    return moment(eventItem.start.date).format("HH:mm"); //??? What to do when no time set for all-day event
  }
  return moment(eventItem.start.dateTime).format("HH:mm");
};

export const getEndTime = (eventItem) => {
  if(eventItem.end.date){
    return moment(eventItem.end.date).format("HH:mm"); //??? What to do when no time set for all-day event
  }
  return moment(eventItem.end.dateTime).format("HH:mm");
};

export const getEventDate = (eventItem) => {
  if(eventItem.end.date){
    return moment(eventItem.start.date).format("MMM, D"); //??? What to do when no time set for all-day event
  }
  return moment(eventItem.start.dateTime).format("MMM, D");
};

export const getEventScheduledOnDate = (eventItem) => {
  return moment(eventItem.created).format("MMM, D");
};

export const getEventScheduledOnTime = (eventItem) => {
  return moment(eventItem.created).format("HH:mm");
};
