'use strict';
describe('MeetingRoom', function(){
  var meetingRoom;

  beforeEach(function(){
    meetingRoom = new MeetingRoom();
  });

  it('has an availability', function(){
    expect(meetingRoom.getCurrentAvailability()).toBe(true);
  });
  
  it('lets you enter a room and makes it unavailable', function(){
    meetingRoom.enter();
    expect(meetingRoom.getCurrentAvailability()).toBe(false);
  });
})