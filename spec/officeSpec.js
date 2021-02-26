'use strict';
describe('MeetingRoom', function(){
  var meetingRoom;

  beforeEach(function(){
    meetingRoom = new MeetingRoom('Room for Jello');
  });

  it('has an availability', function(){
    expect(meetingRoom.getCurrentAvailability()).toBe(true);
  });

  it('has a name', function(){
    expect(meetingRoom.getMeetingRoomName()).toBe('Room for Jello');
  });
  
  it('lets you enter a room and makes it unavailable', function(){
    meetingRoom.enter();
    expect(meetingRoom.getCurrentAvailability()).toBe(false);
  });

  it('lets you leave a room and make it available again', function(){
    meetingRoom.enter();
    meetingRoom.leave();
    expect(meetingRoom.getCurrentAvailability()).toBe(true);
  });
  
  it('throws an error if you try to use a room that is unavailable', function(){
    meetingRoom.enter();
    expect(function(){ meetingRoom.enter(); }).toThrowError('cannot enter, room is unavailable');
  });
})