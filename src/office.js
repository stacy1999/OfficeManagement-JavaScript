'use strict';

class MeetingRoom {
  constructor(){
    this.availability = true;
  }

  getCurrentAvailability(){
    return this.availability;
  }

  enter(){
    this.availability = false;
  }

  leave(){
    this.availability = true;
  }
}