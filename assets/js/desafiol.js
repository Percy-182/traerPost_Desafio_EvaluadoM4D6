//se crearn los elementos HTMl por JS, segun documentacion encontrada.
const mostrarPosts = (posts) => {
  const listaPosts = document.createElement("ul"); //creamos lista desordenada con CreateElement(indicamos entre"" que tipo de elemento")
  posts.forEach((post) => {
    //se usa forEach para indicar que hacer por cada post recibido
    const elementoLista = document.createElement("li"); //se indica hacer una lista o elemento por cada post
    elementoLista.textContent = post.title; // creo que encontré el error, pero nosé como solucionarlo
    listaPosts.appendChild(elementoLista); //method para agregar el elemento creado al DOM
  });
  const contenedorPosts = document.getElementById("post-data");
  //contenedorPosts.innerHTML = ""; // Se limpia contenido anterior si lo hubiera por buena practica pero no es necesario.
  contenedorPosts.appendChild(listaPosts);
};

$(document).ready(function () {
  $("button#enviar").click(async function () {
    //se indica etiqueta button + # del button ya que hay un solo button
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts" //solicitud GET ya que estamos solicitando data a la API
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud: " + response.status);
      }

      const posts = await response.json();
      mostrarPosts(posts);
    } catch (error) {
      console.error("Error:", error.message);
    }
  });
});
