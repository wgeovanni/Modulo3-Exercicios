const transformNumbersToTime = (number) => {
    const second = number % 60
    const minute = parseInt(number / 60) % 60
    const hour = parseInt(number / 3600) % 60

    const stringSeconds = second ? `${second}s` : ""
    const stringMinutes = minute ? `${minute}m ` : ""
    const stringHours = hour ? `${hour}h ` : ""

    return stringHours + stringMinutes + stringSeconds
}

module.exports = transformNumbersToTime