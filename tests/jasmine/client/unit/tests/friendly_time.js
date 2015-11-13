describe('friendlyTime', () => {
  'use strict';
  
  let currentTime = new Date('11/12/2015 12:00');

  it('should return the correct hours in a friendly way', () => {
    expect(friendlyTime(new Date('11/12/2015 13:00'), currentTime)).toBe('1h');
    expect(friendlyTime(new Date('11/12/2015 14:00'), currentTime)).toBe('2h');
  }),

  it('should return the correct hours and minutes in a friendly way', () => {
    expect(friendlyTime(new Date('11/12/2015 13:30'), currentTime)).toBe('1h 30m');
    expect(friendlyTime(new Date('11/12/2015 13:42:27'), currentTime)).toBe('1h 42m');
  }),

  it('should return only the correct minutes in a friendly way', () => {
    expect(friendlyTime(new Date('11/12/2015 12:42:27'), currentTime)).toBe('42m');
  }),

  it('should return the date if the time is in the past', () => {
    expect(friendlyTime(new Date('11/10/2015 12:42:27'), currentTime)).toBe('10/11');
  })

});
