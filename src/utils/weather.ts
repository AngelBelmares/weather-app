export function dateToDay (dateString: string): string {
  const date = new Date(dateString)
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayName = days[date.getDay()]
  const day = date.getDate()
  return `${dayName} ${day}`
}
