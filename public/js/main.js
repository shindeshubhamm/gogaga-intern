const addForm = document.getElementById("addForm")
const name = document.getElementById("name")
const email = document.getElementById("email")
const alertInPage = document.getElementById("alertMsg")

addForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const res = await fetch("/api/add", {
    method: "POST",
    body: JSON.stringify({
      name: name.value,
      email: email.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  const response = await res.json()
  if (response.error) {
    alertInPage.innerHTML = `<div class=\"alert alert-danger\" role=\"alert\">${response.error}</div>`
  } else {
    alertInPage.innerHTML = `<div class=\"alert alert-success\" role=\"alert\">${response.msg}</div>`
  }
  name.value = ''
  email.value = ''
})