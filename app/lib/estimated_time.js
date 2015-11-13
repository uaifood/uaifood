estimatedTime = (time, currentTime = new Date()) => {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let date = '';

  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;

  if (time.getUTCDate() != currentTime.getUTCDate()) {
    date = '(' + time.getUTCDate() + '/' + (time.getMonth() + 1) + ')';
  }

  return (hours + 'h ' + minutes + 'm ' + date).replace(/00[m|h]/, '').trim();
}
