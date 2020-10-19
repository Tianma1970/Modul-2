const addToForm = document.querySelector("#addTodoForm")
const addItem = document.querySelector("#addTodoInputField")

//add eventListener for submitting form
addToForm.focus()
addToForm.addEventListener("submit", e => {
  e.preventDefault()
  console.log(addItem.value)
})
