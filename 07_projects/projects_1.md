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