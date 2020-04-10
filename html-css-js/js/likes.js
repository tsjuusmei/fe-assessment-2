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

                const likesUl = document.querySelector('.likesUl')

                const promises = [];
                currentUser.likedBy.forEach(likerID => {
                    promises.push(users.filter(data => { return data.id == likerID }))
                });
                promises.forEach(like => {
                    let li = document.createElement('LI');
                    for (let i = 0; like.length > i; i++) {

                        function checkLike(like) {
                            if (like[i].likedBy.includes(currentUser.id)) {
                                return "./images/like.icon.invert.png"
                            } else {
                                return "./images/like.icon.png"
                            }
                        }
                        li.innerHTML = like[i].name + '<img data-id="' + like[i].id + '"src= " ' + checkLike(like) + ' " class="liked" > '
                        likesUl.appendChild(li)
                    }
                });

                const likeHeart = document.querySelectorAll('.liked')

                likeHeart.forEach((heart) => {
                    heart.addEventListener('click', (e) => {
                        const id = e.target.dataset.id;
                        return axios.post('https://fe-assessment-2-be.herokuapp.com/like', { id: id })
                            .then((res) => {
                                if (res.status == 200) {
                                    heart.src = "./images/like.icon.invert.png"
                                } else {
                                    heart.src = "./images/like.icon.png"
                                }
                            })
                    })
                })
            })
    })

