# Projects related to DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)

# Solution code

# Project 1

``` javaScript
console.log("ARUN VERMA")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(function(button){

  console.log(button)
  
  button.addEventListener('click',function(event){

  console.log(event)
  console.log(event.target)

  if(event.target.id === 'red')
  {
    body.style.backgroundColor = "#E4004B";
  }
  if(event.target.id === 'orange')
  {
    body.style.backgroundColor = "#ED775A";
  }
  if(event.target.id === 'yellow')
  {
    body.style.backgroundColor = "#FAD691"
  }
  if(event.target.id === 'grey')
  {
    body.style.backgroundColor = " #C9CDCF"
  }
  })
})

```
## Project 2

``` JavaScript
const form = document.querySelector('form');

form.addEventListener('submit',function(event)
{
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `*please give a valid height ${height}`;
  }

  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `*please give a valid weight ${weight}`;
  }

  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);

    results.innerHTML = `your bmi is ${bmi}`;

    if(bmi < 18.6){
        results.innerHTML+= `<br>you are under weight`
    }
    else if(bmi < 24.9){
      results.innerHTML+= `<br>you are in Normal Range`
    }
    else{
    results.innerHTML+= `<br>you are over weight`
    }
  }
  
})

```

## Project 3

``` JavaScript

// const clock = document.getElementById('clock')
const clock = document.querySelector('#clock')



setInterval(function(){

  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000)

```

## Project 4

``` JavaScript

random_number = parseInt(Math.random()*100 + 1);
// console.log(random_number)

const submit = document.querySelector('#subt');
const user_input  = document.querySelector('#guessField');
const guess_slot  = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const low_or_high = document.querySelector('.lowOrHi');
const start_over  = document.querySelector('.resultParas')

const p = document.createElement('p');

let prev_guess = []
let num_guesses = 1

let play_game = true;

if(play_game)
{
  submit.addEventListener('click',function(event){
    event.preventDefault();
    const guess = parseInt(user_input.value);
    console.log(guess);
    validate_guess(guess);
  })
}

function validate_guess(guess)
{ 
  if(isNaN(guess))
  {
    alert('please enter a valid number');
  }

  if(guess < 1)
  {
    alert('please enter a number greater then 1');
  }

  if(guess > 100)
  {
    alert('please enter a number less then 100');
  }
  
  else{
    prev_guess.push(guess);
    if(num_guesses === 11)
    { 
      display_guess(guess);
      display_message(`Game Over. Random Number was ${random_number}`);
      end_game();
    }
    else{
      display_guess(guess);
      check_guess(guess);
    }
  }
}

function check_guess(guess)
{
  if(guess === random_number)
  {
    display_message(`you guess it right ${random_number}`);
  }
  else if(guess < random_number)
  {
    display_message(`${guess} no is too low`);
  }
  else{
    display_message(`${guess} no is too high`);
  }
}

function display_guess(guess)
{
  user_input.value = ''
  guess_slot.innerHTML += ` ${guess} `
  num_guesses++;
  remaining.innerHTML = `${11 - num_guesses}`
}
function display_message(guess)
{
  low_or_high.innerHTML = `<h2>${guess}</h2>`
}

function end_game()
{
  user_input.value = '';
  user_input.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id="new_game"> start new game </h2>`;
  start_over.appendChild(p);
  play_game = false;
  new_game();
}

function new_game()
{
  const new_game_button = document.querySelector('#new_game');
  new_game_button.addEventListener('click',function(event){
    let random_number = parseInt(Math.random()*100 + 1);
    prev_guess = [];
    num_guesses = 1;
    guess_slot.innerHTML = '';
    remaining.innerHTML = `${11-num_guesses}`;
    user_input.removeAttribute('disabled','');
    start_over.removeChild(p);
    play_game = true;
  })
}

```