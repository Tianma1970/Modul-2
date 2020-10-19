const addToForm = document.querySelector("#addTodoForm")
const addItem = document.querySelector("#addTodoInputField")
const showItem = document.querySelector("#todoList")

//add eventListener for submitting form
addToForm.focus()
addToForm.addEventListener("submit", e => {
  e.preventDefault()
  //console.log(addItem.value)
  createItem(addItem.value)
})

function createItem(x) {
  let ourHtml = `<li>${x}<button onClick="deleteItem(this)">Delete</button></li>`
  showItem.insertAdjacentHTML("beforeend", ourHtml)
  addItem.value = ""
}

function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove()
}
