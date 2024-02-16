const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";

const getButton = document.querySelector("#getPost");
const createButton = document.querySelector("#create");
const putButton = document.querySelector("#put");
const patchButton = document.querySelector("#patch");
const deleteButton = document.querySelector("#delete");

// get post

const getPosts = async () => {
  //   fetch(apiEndPoint).then((response) => {
  //     response.json().then((posts) => console.log(posts));
  //   });

  const response = await fetch(apiEndPoint);
  const posts = await response.json();
  return posts;
};

const createPost = async (newpost) => {
  try {
    const response = await fetch(apiEndPoint, {
      method: "POST",
      body: JSON.stringify(newpost),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });

    if (response.status != 201) {
      throw new error(`something went wrong, Status code: ${response.status}`);
    }
    const post = await response.json();
    return post;
  } catch (error) {
    console.log(error);
  }
};

getButton.addEventListener("click", async () => {
  const posts = await getPosts();
  const table = `
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
        </tr>
      </thead>
      <tbody>
      ${posts
        .map(
          (post) => ` <tr>
          <th scope="row">${post.id}</th>
          <td>${post.title}</td>
        </tr>`
        )
        .join("\n")}
       
      </tbody>
    </table>
    `;

  document.querySelector(".table").innerHTML = table;
});

// crete button
createButton.addEventListener("click", async () => {
  const newPost = {
    title: "new post title",
    body: "new post body",
    userId: 1,
  };
  const createdPost = await createPost(newPost);
  console.log(createdPost);
});
