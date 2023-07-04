//** codigo para el menu inicial para computadora */

const myList = document.getElementById("nav-menu-list");
const listItems = myList.getElementsByTagName("a");

Array.from(listItems).forEach((listItem) => {
  listItem.addEventListener("mouseover", function () {
    // Remueve la clase "active" de todos los elementos
    Array.from(listItems).forEach((item) => {
      item.classList.remove("active");
    });

    // Agrega la clase "active" al elemento actual
    listItem.classList.add("active");
  });
});
