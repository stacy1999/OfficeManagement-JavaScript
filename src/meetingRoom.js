'use strict';

class MeetingRoom {
  constructor(meetingRoomName){
    this.availability = true;
    this.roomName = meetingRoomName;
  }

  getCurrentAvailability(){
    return this.availability;
  }

  getMeetingRoomName(){
    return this.roomName;
  }

  enter(){
    if(this.getCurrentAvailability() === false){
      throw new Error('cannot enter, room is unavailable')
    }
    this.availability = false;
  }

  leave(){
    this.availability = true;
  }
}