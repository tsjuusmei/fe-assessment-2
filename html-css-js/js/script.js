let users = [];

let userID;

let currentUser = users.filter(data => { return data.id == userID })[0];

console.log(currentUser)

axios.get('https://fe-assessment-2-be.herokuapp.com/users')
.then(response => {
  users = response.data;
})

axios.get('https://fe-assessment-2-be.herokuapp.com/userID')
.then(response => {
    userID = response.data;
})

