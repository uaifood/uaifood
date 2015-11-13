describe('estimatedTime', () => {
  'use strict';
  
  let currentTime = new Date('11/12/2015 12:00');

  it('should return the correct hours in a friendly way', () => {
    expect(estimatedTime(new Date('11/12/2015 13:00'), currentTime)).toBe('13h');
    expect(estimatedTime(new Date('11/12/2015 14:00'), currentTime)).toBe('14h');
  }),

  it('should return the correct hours and minutes in a friendly way', () => {
    expect(estimatedTime(new Date('11/12/2015 13:30'), currentTime)).toBe('13h 30m');
    expect(estimatedTime(new Date('11/13/2015 13:42:27'), currentTime)).toBe('13h 42m (13/11)');
  }),

  it('should return only the correct minutes in a friendly way', () => {
    expect(estimatedTime(new Date('11/12/2015 12:42:27'), currentTime)).toBe('12h 42m');
  }),

  it('should return the time and date for a past time', () => {
    expect(estimatedTime(new Date('11/05/2015 13:42:27'), currentTime)).toBe('13h 42m (5/11)');
  })

});
