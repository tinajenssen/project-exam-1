// Number of people in space:

const numberOfPeople = document.querySelector(".number-of-people");

    async function getNumber(){
        const response = await fetch("http://api.open-notify.org/astros.json");
        const json = await response.json();

        numberOfPeople.innerHTML += `<p>There are currently ${json.number} people in space.</p>`;
        
    console.log(json);
}

getNumber();


// Names of the people in space:

async function fetchNames(){
    const url = "http://api.open-notify.org/astros.json"
    const peopleInSpace = document.querySelector(".people-in-space");

    const response = await fetch(url);
    const json = await response.json();

    const names = json.people;


    names.forEach(name => {
        peopleInSpace.innerHTML += `<div class="people"><h2>${name.name}</h2></div>`
    })

    console.log(json);
}

fetchNames();