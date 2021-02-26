'use strict';

describe('Office', function(){
  var office;
  var meetingRoom;
  beforeEach(function(){
    office = new Office();
    meetingRoom = new MeetingRoom('room for jello')
  });
  
  it('has no rooms by default', function(){
    expect(office.getRooms()).toEqual([]);
  });

  it('creates a meeting room', function(){
    office.createMeetingRoom('room for jello');
    expect(office.getRooms()).toEqual([meetingRoom]);
  });
})
