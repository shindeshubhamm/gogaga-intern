const list = document.getElementById("list")

const fetchList = async () => {
  list.innerHTML = `<img src="./images/spinner.gif" alt="Inserting..." width=100px height=auto />`
  const res = await fetch("/api/list")
  const response = await res.json()
  // const friends = response.map((friend) => {
  //   return friendIndv = {
  //     name: friend.name,
  //     email: friend.email
  //   }
  // })
  list.innerHTML = ''
  if (response.length === 0) {
    return list.innerHTML = `<div class="card my-2 mx-auto" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Currently no friends in your list.</h5>
      <h6 class="card-subtitle mb-2 text-muted"><a href="/gogaga/add.html">Click here to add first friend.</a></h6>
    </div>
  </div>`
  }
  response.forEach((friend) => {
    list.innerHTML += `<div class="card my-2 mx-auto" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${friend.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${friend.email}</h6>
    </div>
  </div>`
  })
}

fetchList()