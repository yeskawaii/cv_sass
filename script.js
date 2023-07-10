const data = {
  Español: {
    value1: "Español",
    value2: "Acerca de mi",
    value3: "Mis projectos",
    value4: "Mensaje",
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
    value2: "私について",
    value3: "プロジェクト",
    value4: "メール",
    value5: "お名前　は：",
    value6: "フリオ・ジェスカス",
    value7: "コンピューター・システム・エンジニア",
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
  var home = document.getElementById("nav-inicio");
  var aboutMe = document.getElementById("nav-acerca");
  var skills = document.getElementById("nav-skills");
  var contact = document.getElementById("nav-contact");
  var presentacionNombre = document.getElementById("presentacion-nombre");

  home.classList.add("oculto");
  aboutMe.classList.add("oculto");
  skills.classList.add("oculto");
  contact.classList.add("oculto");

  setTimeout(function () {
    if (selectedData) {
      home.innerHTML = selectedData.value1;
      home.classList.remove("oculto");
      aboutMe.innerHTML = selectedData.value2;
      aboutMe.classList.remove("oculto");
      skills.innerHTML = selectedData.value3;
      skills.classList.remove("oculto");
      contact.innerHTML = selectedData.value4;
      contact.classList.remove("oculto");
      presentacionNombre.innerHTML = selectedData.value5;
      document.getElementById("name").innerHTML = selectedData.value6;
      document.getElementById("carrera").innerHTML = selectedData.value7;
      //document.getElementById("").innerHTML = selectedData.value1;
      // document.getElementById("nav-inicio").innerHTML = selectedData.value1;
      // document.getElementById("nav-inicio").innerHTML = selectedData.value1;
      // document.getElementById("nav-inicio").innerHTML = selectedData.value1;
      //console.log(value1 + " " + value2);
    }
  }, 300);
});

//** Codigo para cambio de color de 100vh */

var miNav = document.getElementById("nav");
window.addEventListener("scroll", function () {
  var alturaVentana = window.innerHeight;
  var scrollActual = window.scrollY;

  if (scrollActual > alturaVentana - 1) {
    miNav.classList.add("scroll-activo");
  } else {
    miNav.classList.remove("scroll-activo");
  }
});
