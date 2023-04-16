const app = document.getElementById('app')
const myForm =document.getElementById('my-form')
const mySearch = document.querySelector('#my-button')
const myButton = document.getElementById('my-button')


const active =document.getElementById('active')
const news =document.getElementById('new')
const recovered =document.getElementById('recovered')
const total =document.getElementById('total')
const deaths =document.getElementById('deaths')
const tests =document.getElementById('tests')


main()

function main () {
  renderButton()
}

function renderButton () {
    mySearch.setAttribute('id', '#my-button')
    myButton.setAttribute('id', 'my-button')

    myForm.append(myButton)  

    mySearch.addEventListener('click', fetchCovidData)
    myButton.addEventListener('click', fetchCovidData)
}


function fetchCovidData () {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '...',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };
  
  fetch('https://covid-193.p.rapidapi.com/statistics?country=indonesia' , options)
    .then(response => response.json())
    .then(response => {
      renderCovidData(response)
    })
    .catch(err => console.error(err));
}

function renderCovidData (data) {
  const currentActiveCases =  data.response[0].cases.active
  const currentNewsCases = data.response[0].cases.new
  const currentRecoveredCases = data.response[0].cases.recovered
  const currentTotalCases = data.response[0].cases.total
  const currentDeaths = data.response[0].deaths.total
  const currentTests = data.response[0].tests.total


  const divCurrentActive = document.getElementById('active')
  divCurrentActive.innerHTML = `${currentActiveCases}`
  divCurrentActive.classList.add('white-text')

  box1.append(divCurrentActive)

  const divCurrentNews = document.getElementById('new')
  divCurrentNews.innerHTML = `${currentNewsCases}`
  divCurrentNews.classList.add('black-text')

  box2.append(divCurrentNews)

  const divCurrentRecovered = document.getElementById('recovered')
  divCurrentRecovered.innerHTML = `${currentRecoveredCases}`
  divCurrentRecovered.classList.add('black-text')
  
  box3.append(divCurrentRecovered)

  const divCurrentTotal = document.getElementById('total')
  divCurrentTotal.innerHTML = `${currentTotalCases}`
  divCurrentTotal.classList.add('black-text')
  
  box4.append(divCurrentTotal)

  const divCurrentDeaths = document.getElementById('deaths')
  divCurrentDeaths.innerHTML = `${currentDeaths}`
  divCurrentDeaths.classList.add('black-text')

  box5.append(divCurrentDeaths)
  
  const divCurrentTests = document.getElementById('tests')
  divCurrentTests.innerHTML = `${currentTests}`
  divCurrentTests.classList.add('black-text')
  
  box6.append(divCurrentTests)

}
