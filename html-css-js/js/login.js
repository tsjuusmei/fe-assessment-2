const userSelect = document.getElementById('user');

let users = [];

axios.get('https://fe-assessment-2-be.herokuapp.com/users')
.then(response => {
  users = JSON.parse(response.data);
  userDropdown()
})

function userDropdown() {

for (let i=0; users.length > i; i++) {
  users.push(users[i])
  }
  users.forEach(user => {
  const option = document.createElement('OPTION');
  option.setAttribute('value', user.id);
  option.textContent = user.name;
  userSelect.appendChild(option);
  })
}
