const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle) // ----> THIS doesn't work with an arrow function 
    // Keep in mind in vanilla js we have to handle everything so for example in the console it keeps creating spans - problem gets solved with React

    setTimeout(() => circle.remove(), 500)                 //----------> we have to remove it from the DOM

  })
})