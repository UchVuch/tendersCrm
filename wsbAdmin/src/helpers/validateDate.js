export default function (date) {
  if (date) {
    const arr = date.split('.')
    let dateString = `${arr[0]}/${arr[1]}/${arr[2]}`
    // First check for the pattern
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
      // console.log(false)
      return 'Введите корректную дату'
    } else {
      // console.log(true)
    }

    // Parse the date parts to integers
    var parts = dateString.split('/')
    var day = parseInt(parts[0], 10)
    var month = parseInt(parts[1], 10)
    var year = parseInt(parts[2], 10)

    // console.log(parts, day, month, year)

    // Check the ranges of month and year
    if (year < 1970) {
      return 'Введите корректный год больше 1969'
    }
    if (year > 3000) {
      return 'Введите корректный год меньше 3000'
    }
    if (month == 0 || month > 12) {
      return 'Введите корректный месяц мм, например 05'
    }

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
      monthLength[1] = 29
    // Check the range of the day
    if (day > 0 && day <= monthLength[month - 1]) {
      // console.log(true)
      return day > 0 && day <= monthLength[month - 1]
    } else {
      return 'Введите корректный день дд, , например 01'
    }
  } else {
    return 'Введите дату'
  }
}
