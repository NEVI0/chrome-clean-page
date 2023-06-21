const MONTHS_NAME_BY_NUMBER = {
    1: 'janeiro',
    2: 'fevereiro',
    3: 'março',
    4: 'abril',
    5: 'maio',
    6: 'junho',
    7: 'julho',
    8: 'augosto',
    9: 'setembro',
    10: 'outubro',
    11: 'novembro',
    12: 'dezembro',
}

function startTime() {

    const timeHourElement = document.getElementById('timeHour');
    const timeMinutesElement = document.getElementById('timeMinutes');
    const dateElement = document.getElementById('date');

    const today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();

    hours = formatNumber(hours);
    minutes = formatNumber(minutes);

    timeHourElement.innerText = hours.toString();
    timeMinutesElement.innerText = minutes.toString();

    const currentDate = formatNumber(today.getDate()) + ' de ' + MONTHS_NAME_BY_NUMBER[today.getMonth() + 1] + ' de ' + today.getFullYear();
    dateElement.innerText = currentDate;

    setTimeout(startTime, 1000);

}
  
function formatNumber(number) {
    if (number < 10) number = '0' + number;
    return number;
}