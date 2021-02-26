'use strict';

class MeetingRoom {
  constructor(){
    this.availability = true;
  }

  getCurrentAvailability(){
    return this.availability;
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