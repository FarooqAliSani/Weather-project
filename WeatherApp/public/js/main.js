// Get all elements by id
let submitbtn = document.getElementById('btn');
let city_name = document.getElementById('name');
let msg = document.getElementById('msg');
let p = document.getElementById('p');
let state = document.getElementById('state');


// When someone search 
submitbtn.addEventListener('click', func);

async function func(e) {
    e.preventDefault();
    
    let cityval = city_name.value;

    if (cityval == "") {
        msg.innerHTML = 'Plz write the name of the city before search';
        p.innerHTML = 'Error::';
    } else {

        try {

           

            msg.innerHTML = '';

            // Fetch data from the api
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=80bb893d919a6bab6ab7b76d373cb8be`;
            const data = await fetch(url);
            const data1 = await data.json();
            const arr = [data1];

            let status = document.getElementById('status');
            let weather = document.getElementById('weather');
            let current_status = arr[0].main.temp; //Current status in kelvin scale
            let status_centegrade = Math.floor(current_status - 273);
            status.innerHTML = `${status_centegrade}<sup>o</sup>C`;
            p.innerHTML = arr[0].name;
            state.innerHTML = arr[0].sys.country;
            weather.innerHTML = arr[0].weather[0].main;
            
        }catch (error) {
            console.log(error);
        }
        
    }
}

// Get day

const date = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const day = days[date.getDay()];
const day1 = document.getElementById('day');
console.log(day);
day1.innerHTML = day;


// Get time
const hours = zeroformat(date.getHours());
const min = zeroformat(date.getMinutes());
const new_time = `${hours}:${min}`;
const curr_time = document.getElementById('date');
curr_time.innerHTML = new_time;
console.log(new_time)


//Set zero befor number when number in between to 1-9
function zeroformat(number) {
    if(number<10){
        return '0'+number;
    }else{
        return number;
    }
  }