$(document).ready(function () {
  $("button#enviar").click(async function () {
    try {
      const posts = await obtenerPosts();
      mostrarPosts(posts);
    } catch (error) {
      console.error("Error:", error.message);
    }
  });
});

const obtenerPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET", //sin especificar el metodo sirve igual según lo qué probé
  });

  if (!response.ok) {
    throw new Error("Error en la solicitud: " + response.status);
  }

  return await response.json();
};

const mostrarPosts = (posts) => {
  const postList = $("#post-list");
  postList.empty(); // Limpiar lista anterior
  posts.forEach((post) => {
    const listItem = $("<li></li>");
    const title = $(`<h3>${post.title}</h3>`); //interpolacion recien estoy acostumbrando a implementarla y todo lo que se puede hacer y a mi juicio ahorra lineas de codigo cuando sea necesario
    const body = $(`<p>${post.body}</p>`);
    listItem.append(title, body);
    postList.append(listItem);
  });
};
