const myList = document.getElementById("nav-menu-list");
const listItems = myList.getElementsByTagName("a");

for (let i = 0; i < listItems.length; i++) {
  const listItem = listItems[i];

  // Agrega el evento de mouseover al elemento
  listItem.addEventListener("mouseover", function () {
    // Remueve la clase "myClass" de todos los elementos
    for (let j = 0; j < listItems.length; j++) {
      listItems[j].classList.remove("active");
    }

    // Agrega la clase "myClass" al elemento actual
    listItem.classList.add("active");
  });
}
