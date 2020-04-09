const userSelect = document.getElementById('user');

let users = [];

function userDropdown() {

for (let i=0; dataParsed.length > i; i++) {
  users.push(dataParsed[i])
  }
  users.forEach(user => {
  const option = document.createElement('OPTION');
  option.setAttribute('value', user.id);
  option.textContent = user.name;
  userSelect.appendChild(option);
  })
}

userDropdown();