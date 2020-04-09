let users = [];

let userID;

let currentUser;

axios.get('https://fe-assessment-2-be.herokuapp.com/users')
    .then(response => {
        users = response.data;
        axios.get('https://fe-assessment-2-be.herokuapp.com/userID')
            .then(response => {
                userID = response.data;
                currentUser = users.filter(data => { return data.id == userID })[0]

                document.querySelector(".name").innerHTML = currentUser.name
                document.querySelector(".numberVisitors").innerHTML = currentUser.visitedBy.length
                document.querySelector(".numberLikes").innerHTML = currentUser.likedBy.length

                const visitorsUl = document.querySelector('.visitorsUl')

                const promises = [];
                currentUser.visitedBy.forEach(visitorID => {
                    promises.push(users.filter(data => { return data.id == visitorID }))
                });
                promises.forEach(visitor => {
                    let li = document.createElement('LI');
                    for (let i = 0; visitor.length > i; i++) {
                        li.innerHTML = visitor[i].name;
                        visitorsUl.appendChild(li)
                    }
                });

            })
    })

