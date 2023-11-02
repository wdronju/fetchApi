
function fetchApi(){
    fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => DisplayPosts(data));
}

function DisplayPosts(posts){
// console.log(posts);
posts.forEach(post => {
    console.log(post);

    document.getElementById("posts").innerHTML +=
    `
    <div class="post">
    <h3>ID: ${post.id}</h3>
    <h2>${post.title}</h2>
    <p>${post.body}</p>
</div>
    `;
});
}

fetchApi();