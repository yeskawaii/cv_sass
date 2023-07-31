const data = {
  Español: {
    value1: "Inicio",
    value2: "Acerca de mi",
    value3: "Mis projectos",
    value4: "Mensaje",
    value5: "Mi nombre es:",
    value6: "Julio Yescas",
    value7: "Ingeniero en sistemas computacionales",
    value8: "Acerca de mi",
    value9: "Experiencia",
    value10:
      "Participacion en la pagina web del Instituto Tecnologico de Morelia.",
    value11: "Auxiliar de sistemas en empresa arquimo.",
    value12: "Estudios",
    value13: "Ingenieria en sistemas computacionales",
    value14: "Español nativo",
    value15: "Ingles en UMSNH morelia nivel: C1",
    value16: "Japones en UMSNH morelia nivel: N4",
    value17: "Conocimientos",
    value18: "Proyectos",
    value19: "Portafolio",
    value20: "Contáctame",
    value21: "Correo:",
    value22: "Mensaje:",
    value23: "Enviar",
  },
  English: {
    value1: "Home",
    value2: "About me",
    value3: "My projects",
    value4: "Contact me",
    value5: "My name is:",
    value6: "Julio Yescas",
    value7: "Computer systems engineer",
    value8: "About me",
    value9: "Experience",
    value10:
      "Participation in the website of the Technological Institute of Morelia.",
    value11: "Systems assistant at Arquimo company.",
    value12: "Schooling",
    value13: "Computer Systems engineer",
    value14: "Native Spanish",
    value15: "English on UMSNH morelia level: C1",
    value16: "Japanese on UMSNH morelia level: N4",
    value17: "knowledge",
    value18: "Projects",
    value19: "Portfolio",
    value20: "Contact Me",
    value21: "Email:",
    value22: "Menssage:",
    value23: "Send",
  },
  日本語: {
    value1: "ホーム",
    value2: "私について",
    value3: "プロジェクト",
    value4: "メール",
    value5: "お名前　は：",
    value6: "フリオ・ジェスカス",
    value7: "コンピューター・システム・エンジニア",
    value8: "私について",
    value9: "体験",
    value10: "モレリア工科大学 の　ウエブサイト　を　参加しました。",
    value11: "アルキモ社　の　システムアシスタント。",
    value12: "研究",
    value13: "コンピューター・システム・エンジニア",
    value14: "ネイティブスペイン語",
    value15: "UMSNH、モレリア大学　の　英語　レベル：　C1",
    value16: "UMSNH、モレリア大学　の　日本語　レベル：　N4",
    value17: "知識",
    value18: "プロジェクト",
    value19: "ポートフォリオ",
    value20: "メールをします",
    value21: "メールアドレス：",
    value22: "メッセージ本文:",
    value23: "送信する",
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
  var skills = document.getElementById("nav-projects");
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
      document.getElementById("acerca-de-mi").innerHTML = selectedData.value8;
      document.getElementById("experiencia").innerHTML = selectedData.value9;
      document.getElementById("part-1").innerHTML = selectedData.value10;
      document.getElementById("part-2").innerHTML = selectedData.value11;
      document.getElementById("estudios").innerHTML = selectedData.value12;
      document.getElementById("est-1").innerHTML = selectedData.value13;
      document.getElementById("est-2").innerHTML = selectedData.value14;
      document.getElementById("est-3").innerHTML = selectedData.value15;
      document.getElementById("est-4").innerHTML = selectedData.value16;
      document.getElementById("conocimiento").innerHTML = selectedData.value17;
      document.getElementById("proyectos-titulo").innerHTML =
        selectedData.value18;
      document.getElementById("portafolio-proyecto").innerHTML =
        selectedData.value19;
      document.getElementById("contactame-titulo").innerHTML =
        selectedData.value20;
      document.getElementById("email").innerHTML = selectedData.value21;
      document.getElementById("message").innerHTML = selectedData.value22;
      document.getElementById("my-form-button").innerHTML =
        selectedData.value23;

      //console.log(value1 + " " + value2);
    }
  }, 300);
});

//** Codigo para cambio de color de 100vh */

var miNav = document.getElementById("nav");
window.addEventListener("scroll", function () {
  var alturaVentana = window.innerHeight;
  var scrollActual = window.scrollY;

  if (scrollActual > alturaVentana - 101) {
    miNav.classList.add("scroll-activo");
  } else {
    miNav.classList.remove("scroll-activo");
  }
});

//* codigo para los que los iconos se desplazen */

function animarOla() {
  var elementos = document.getElementsByClassName("element");
  var index = 0;
  function animarElemento() {
    elementos[index].classList.toggle("animate");
    index = (index + 1) % elementos.length;
  }
  setInterval(animarElemento, 150);
}

animarOla();

//* Codigo para sistema de correo*/

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

//* Codigo para la fecha actual*/

var currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;

//* Codigo para navbar mobile */

document.getElementById("nav-mobile").addEventListener("click", function () {
  var navMenu = document.getElementById("nav-menu-list-mobile");
  navMenu.classList.toggle("show-mobile");
});

//* swipper */

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
