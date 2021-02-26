'use strict';
describe('MeetingRoom', function(){
  var meetingRoom;

  beforeEach(function(){
    meetingRoom = new MeetingRoom();
  });

  it('has an availability', function(){
    expect(meetingRoom.getCurrentAvailability()).toBe(true);
  });
  
})