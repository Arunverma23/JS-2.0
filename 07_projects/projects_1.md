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