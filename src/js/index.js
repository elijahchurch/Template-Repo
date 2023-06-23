import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";
import Galaxycalc from './galactic';

function handleForm(event) {
    event.preventDefault();
    const userAge = document.getElementById("age");
    let newUser = new Galaxycalc(userAge.value);
    newUser.setGalacticAges();
    document.getElementById("earth-age").innerText = `You are ${newUser.earthAge} Earth years old!`;
    document.getElementById("mercury-age").innerText = `You are ${newUser.mercuryAge} Mercury years old!`;
    document.getElementById("venus-age").innerText = `You are ${newUser.venusAge} Venus years old!`;
    document.getElementById("mars-age").innerText = `You are ${newUser.marsAge} Mars years old!`;
    document.getElementById("jupiter-age").innerText = `You are ${newUser.jupiterAge} Jupiter years old!`;
    userAge.value = "";
}

const form = document.querySelector("form");
form.addEventListener("submit", handleForm);
