const data = {
  Español: {
    value1: "Español",
    value2: "Acerca de mi",
    value3: "Mis projectos",
    value4: "Contactame",
    value5: "Mi nombre es:",
    value6: "Julio Yescas",
    value7: "Ingeniero en sistemas computacionales",
  },
  English: {
    value1: "English",
    value2: "About me",
    value3: "My projects",
    value4: "Contact me",
    value5: "My name is:",
    value6: "Julio Yescas",
    value7: "Computer systems engineer",
  },
  日本語: {
    value1: "日本語",
    value2: "わたしに",
    value3: "プロジェクト",
    value4: "メール",
    value5: "お名前　は：",
    value6: "フリオ　ジェスカス",
    value7: "コンピューターシステムエンジニア",
  },
};

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

//** codigo para cambio de idioma */

const lenguageOption = document.getElementById("lenguage");

lenguageOption.addEventListener("change", function () {
  const selectedValue = lenguageOption.value;
  const selectedData = data[selectedValue];

  if (selectedData) {
    // const value1 = selectedData.value1;
    // const value2 = selectedData.value2;
    //const navInicio = document.getElementById("nav-inicio");

    // Asigna los valores al campo de texto

    //document.getElementById("nav-")
    document.getElementById("nav-inicio").innerHTML = selectedData.value1;
    document.getElementById("nav-acerca").innerHTML = selectedData.value2;
    document.getElementById("nav-skills").innerHTML = selectedData.value3;
    document.getElementById("nav-contact").innerHTML = selectedData.value4;
    document.getElementById("presentacion-nombre").innerHTML =
      selectedData.value5;
    document.getElementById("name").innerHTML = selectedData.value6;
    document.getElementById("carrera").innerHTML = selectedData.value7;
    // document.getElementById("nav-inicio").innerHTML = selectedData.value1;
    // document.getElementById("nav-inicio").innerHTML = selectedData.value1;
    // document.getElementById("nav-inicio").innerHTML = selectedData.value1;
    // document.getElementById("nav-inicio").innerHTML = selectedData.value1;
    //console.log(value1 + " " + value2);
  }
});
