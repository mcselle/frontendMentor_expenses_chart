const currentDay = new Date().toLocaleString('en-us', {  weekday: 'short'});

const currentDayBar = document.getElementById(currentDay.toLowerCase());
console.log(currentDayBar);
currentDayBar.classList.add('current'); // Highlight current day


fetch('data.json') // Load Json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    setBarCharts(data);
  })

function setBarCharts(data){ // Adjust height of bars
  const maxValue = getMax(data, 'amount');
  console.log(maxValue);

  data.forEach(element => {
    const bar = document.getElementById(element['day']);
    const value = (100.0 / maxValue) * element['amount'] +'%';
    bar.style.height = value;
  });
}

function getMax(array, attr) { // Get max value of array
  let max;
  array.forEach(element => {
    if (max == null || element[attr] > max) {
      max = element[attr]
    }
  });
  return max;
}