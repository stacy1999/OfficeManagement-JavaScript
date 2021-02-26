'use strict';
class Office {
  constructor(){
    this._rooms = [];
    this._availableRooms = [];
  }

  getRooms() {
   return this._rooms;
  };

  createMeetingRoom(meetingRoomName){
    var room = new MeetingRoom(meetingRoomName);
    this._rooms.push(room);
  };
  
  meetingRoomAvailable(){
    for (let i = 0; i < this._rooms.length; i++){
      if (this._rooms[i].availability === true) {
        this._availableRooms.push(this._rooms[i]);
      }
    }
    return this._availableRooms;
  }
  
}