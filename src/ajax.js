const CalendarID='q15dd3522a6i3olq6u98vhkafo@group.calendar.google.com';

const API_KEY = 'AIzaSyAOOsuefaG7zNgmm87OZrB4kiEbsBr8_jA';


export default {
  //functions responsible for fetching events from Google Calendar
  async fetchEvents(){
    try {
      const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${CalendarID}/events?key=${API_KEY}`);
      const responseJson = await response.json();
      return responseJson.items;
    } catch (error) {
      console.error(error);
    }
  }
};
