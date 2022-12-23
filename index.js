const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const likesAdder = document.getElementsByClassName("likes");
const postClickLike = document.getElementsByClassName("post");
const heartClickLike = document.getElementsByClassName("heart-like");

//Page content

let contentPage = document.getElementById("wrapper");
contentPage.innerHTML = `<header>
        <div class="container">
          <div class="header-content">
            <img class="logo" src="images/logo.png" alt="Logo" />
            <img
              class="avatar"
              src="images/user-avatar.png"
              alt="User's avatar"
            />
          </div>
        </div>
      </header>`;

for (let i = 0; i < posts.length; i++) {
  contentPage.innerHTML += `
      <main class="user">
        <div class="container">
          <div class="user-header">
            <img
              class="avatar"
              src=${posts[i].avatar}
              alt="Avatar"
            />
            <div class="user-info">
              <h1 id="name">${posts[i].name}</h1>
              <h2 id="location">${posts[i].location}</h2>
            </div>
          </div>
          <div class="user-post">
            <img class="post" src=${posts[i].post} alt="user's post" />
          </div>
          <div class="icons">
            <img class="heart-like" src="images/icon-heart.png" alt="heart icon" />
            <img src="images/icon-comment.png" alt="comment icon" />
            <img src="images/icon-dm.png" alt="dm icon" />
            <p class="likes">${posts[i].likes} likes</p>
            <h3 class="username">
              ${posts[i].username}
              <span class="comment"> ${posts[i].comment} </span>
            </h3>
          </div>
        </div>
      </main>`;
}

//Events (likes)

for (let i = 0; i < posts.length; i++) {
  postClickLike[i].addEventListener("dblclick", function () {
    posts[i].likes += 1;
    likesAdder[i].innerHTML = `${posts[i].likes} likes`;
  });

  heartClickLike[i].addEventListener("click", function () {
    posts[i].likes += 1;
    likesAdder[i].innerHTML = `${posts[i].likes} likes`;
  });
}
