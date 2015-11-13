friendlyTime = (time, currentTime = new Date()) => {
  diff = (time.getTime() - currentTime.getTime()) / 3600000;

  if (diff < 0) return date = time.getUTCDate() + '/' + (time.getMonth() + 1);

  [hours, minutes] = diff.toString().split('.');

  if (hours != 0) hours += 'h';
  else hours = '';

  if (minutes) minutes = ((minutes / 10) * 60).toString().slice(0, 2) + 'm';
  else minutes = '';

  return (hours + ' ' + minutes).trim();
}
