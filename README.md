# RoomBookerApp
React-Native application, which synchronizes info from Google Calendar


## Link to Google Calendar:
https://calendar.google.com/calendar/embed?src=q15dd3522a6i3olq6u98vhkafo%40group.calendar.google.com&ctz=Europe%2FAthens

## Aplication file structure:
 -- src/  
 ----components/  
 -------App.js  
 -------CurrentTimeAndEvents.js   
 -------EventInProgress.js  
 -------EventItem.js  
 -------EventItemInProgress.js  
 -------EventList.js  
 ----images/  
 -------event-icon-color.png  
 -------event.jpg  
 ----ajax.json  
 ----timeUtil.js  
 --index.js  


## Application Screenshots:
<b> Initializing App screen</b></br>
<kbd>
  <img src="/Screenshots/SimulatorScreen_01.png" width="300"/>  
</kbd></br></br></br>
<b> Event-in-progress screen</b></br>
<kbd>
  <img src="/Screenshots/SimulatorScreen_02.png" width="300"/>  
</kbd></br></br></br>
<b>Event details screen</b></br> 
<kbd>
  <img src="/Screenshots/SimulatorScreen_03.png" width="300"/>  
</kbd></br></br></br>
<b> Future events screen </b></br>
<kbd>
  <img src="/Screenshots/SimulatorScreen_04.png" width="300"/>  
</kbd></br></br></br>
<b> Past events screen</b></br>
<kbd>
  <img src="/Screenshots/SimulatorScreen_05.png" width="300"/>  
</kbd></br></br></br>
<b> No events scheduled screen</b></br>
<kbd>
  <img src="/Screenshots/SimulatorScreen_06.png" width="300"/>  
</kbd></br></br></br>


## Extra Info
* Tested on iOS Simulator (iPhone 6) only
* Possible issues on Android, and devices with screen sizes, which differ from iPhone 6
* Possible issues:
  * when events last whole day, or longer than 24hrs
  * landscape view on device might be different from vertical
