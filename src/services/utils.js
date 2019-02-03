export function dayDictionary (day) {
  let days = [{id: 'Mon', value: 'Monday'}, {id: 'Tue', value: 'Tuesday'}, {id: 'Wed', value: 'Wednesday'}, {id: 'Thu', value: 'Thursday'}, {id: 'Fri', value: 'Friday'}, {id: 'Sat', value: 'Saturday'}, {id: 'Sun', value: 'Sunday'}];
  return days.map((x) => { return x.id === day ? x.value : false; }).filter(x => x !== false)[0];
}
export function hourFormatter (hour) {
  if (parseInt(hour.split(':')[0], 10) > 12) {
    return (String(hour.split(':')[0] - 12) + ':00');
  } else {
    return hour;
  }
}
