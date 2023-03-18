let apiKey = 'e4f9793434167593573d43dd420f2b41',
	searchBar = document.querySelector('.searchBar'),
	searchIcon = document.querySelector('.searchIcon'),
	temp = document.querySelector('.temp span'),
	city = document.querySelector('.city'),
	description = document.querySelector('.main .text'),
	icon = document.querySelector('.icon'),
	timezone = document.querySelector('.time span'),
	humidity = document.querySelector('.humidity h2'),
	windSpd = document.querySelector('.windSpd h2'),
	feels = document.querySelector('.feels h2'),
	pressure = document.querySelector('.pressure h2'),
	windDir = document.querySelector('.wind-dir h2'),
	cloud = document.querySelector('.cloud h2'),
	lon = document.querySelector('.lon h2'),
	lat = document.querySelector('.lat h2')


function fetchWeather(query) {
	fetch(
		'https://api.openweathermap.org/data/2.5/weather?q='
		+ query +
		'&appid=' +
		apiKey +
		'&units=metric')
		.then(res => {
			return res.json()
		}).then(data => {
			let coord = data.coord
			let weather = data.weather
			let main = data.main
			let wind = data.wind
			let clouds = data.clouds
			let conditionText = weather[0].description
			
			temp.textContent = main.temp
			timezone.textContent = data.timezone
			description.textContent = conditionText
			feels.textContent = main.feels_like + '°C'
			city.textContent = data.name
			humidity.textContent = main.humidity + '%'
			pressure.textContent = main.pressure + 'hPa'
			windSpd.textContent = wind.speed + 'm/s'
			lat.textContent = coord.lat
			lon.textContent = coord.lon
			clouds.textContent = clouds.all
			windDir.textContent = wind.deg + 'deg'

			if (conditionText.includes('Wind')) {
				icon.setAttribute('src', 'Images/windy.png')
			}
			if (conditionText.includes('Night')) {
				icon.setAttribute('src', 'Images/night.png')
			}
			if (conditionText.includes('Cloudy') || conditionText.includes('Overcast')) {
				icon.setAttribute('src', 'Images/cloudy.png')
			}
			if (conditionText.includes('Clear')) {
				icon.setAttribute('src', 'Images/clear-cloudy.png')
			}
			if (conditionText.includes('Sun')) {
				icon.setAttribute('src', 'Images/sunny.png')
			}
			if (conditionText.includes('Mostly cloudy')) {
				icon.setAttribute('src', 'Images/mostly-cloudy.png')
			}
			if (conditionText.includes('Mostly cloudy night')) {
				icon.setAttribute('src', 'Images/mostly-cloudy-night.png')
			}
			if (conditionText.includes('Partly cloudy')) {
				icon.setAttribute('src', 'Images/partly-cloudy.png')
			}
			if (conditionText.includes('Fog')) {
				icon.setAttribute('src', 'Images/fog.png')
			}
			if (conditionText.includes('Hail')) {
				icon.setAttribute('src', 'Images/hail.png')
			}
			if (conditionText.includes('Drizzle')) {
				icon.setAttribute('src', 'Images/drizzle.png')
			}
			if (conditionText.includes('Drizzle Night')) {
				icon.setAttribute('src', 'Images/drizzle-night.png')
			}
			if (conditionText.includes('Drizzle Sunny')) {
				icon.setAttribute('src', 'Images/drizzle-sunny.png')
			}
			if (conditionText.includes('Thunder') || conditionText.includes('Thunderstorm') || conditionText.includes('thunder')) {
				icon.setAttribute('src', 'Images/thunderstorms-2.png')
			}
			if (conditionText.includes('Thunder Sunny') || conditionText.includes('Thunderstorm Sunny')) {
				icon.setAttribute('src', 'Images/thunderstorms-sunny.png')
			}
			if (conditionText.includes('Thunder Night') || conditionText.includes('Thunderstorm Night')) {
				icon.setAttribute('src', 'Images/thunderstorms-night.png')
			}
			if (conditionText.includes('Tornado')) {
				icon.setAttribute('src', 'Images/tornado.png')
			}
			if (conditionText.includes('Sleet')) {
				icon.setAttribute('src', 'Images/sleet.png')
			}
			if (conditionText.includes('Snow')) {
				icon.setAttribute('src', 'Images/snow.png')
			}
			if (conditionText.includes('Snow Flurries')) {
				icon.setAttribute('src', 'Images/snow-flurries.png')
			}
		})
		.catch(error => {
			console.log(error)
		})
}

document.addEventListener('DOMContentLoaded', fetchWeather('Los Angeles'))

searchBar.addEventListener('keypress', function (e) {
	let query = searchBar.value
	if (e.key == 'Enter') {
		fetchWeather(query)
	}
})

searchIcon.addEventListener('click', function () {
	let query = searchBar.value
	if (query !== '') {
		fetchWeather(query)
	}
})
