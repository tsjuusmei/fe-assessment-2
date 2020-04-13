const userSelect = document.getElementById('user');

let users = [];

let currentUser;

axios.get('https://fe-assessment-2-be.herokuapp.com/users')
  .then(response => {
    users = response.data;
    userDropdown()
  })

function userDropdown() {
  users.forEach(user => {
    const option = document.createElement('OPTION');
    option.setAttribute('value', user.id);
    option.textContent = user.name;
    userSelect.appendChild(option);
  })
}
