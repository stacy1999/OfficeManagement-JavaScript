'use strict';
class Office {
  constructor(){
    this._rooms = [];
  }

  getRooms() {
    return this._rooms;
  };

  createMeetingRoom(meetingRoomName){
    let newRoom = new MeetingRoom(meetingRoomName);
    this._rooms.push({ availability: newRoom.availability, roomName: newRoom.roomName});
  };
}