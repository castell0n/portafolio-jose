// <!-- Script -->
const loader = document.querySelector('.spinner');
const cuerpo = document.querySelector('body');
window.onload = function(){
  setTimeout(function(){
    loader.style.display = 'none';
    cuerpo.style.overflow = 'auto';
  }, 4000); // Puedes cambiar el tiempo cada mil es 1 segundo.
}


function animationLineScroll() {
  const {scrollTop, scrollHeight} = document.documentElement;
  const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`
  document.querySelector(".lineAvance").style.width = scrollPercent;
}
document.addEventListener("scroll", animationLineScroll);


const btnSwith = document.querySelector(".contendarck");

btnSwith.addEventListener("click", ()=> {
    document.body.classList.toggle("darck")
    btnSwith.classList.toggle("active")

    if (document.body.classList.contains("darck")) {
        localStorage.setItem("darck-mode", "true")
    } else {
        localStorage.setItem("darck-mode", "false")
    }
});


// obteniendo el modo actual
const darck = document.getElementById("famoon");
const lingh = document.getElementById("fasun");
// obteniendo el modo actual
if (localStorage.getItem("darck-mode") === "true") {
    document.body.classList.add("darck");
    darck.classList.remove("active");
    lingh.classList.add("active");
} else {
    document.body.classList.remove("darck");
    darck.classList.add("active");
    lingh.classList.remove("active");
}


var btnContainer = document.querySelector(".nav_lis");
var btn = btnContainer.getElementsByClassName("nav_btn");
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("activeBtn");
    current[0].className = current[0].className.replace(" activeBtn", "");
    this.className += " activeBtn";
  });
}



const openMenu = document.querySelector(".nav_open_menu");
const closeMenu = document.querySelector(".nav_close_menu");
const body = document.querySelector("#inicio");
const Menu = document.querySelector(".conten_nav");

openMenu.addEventListener("click", ()=> {
    Menu.style.left = "1rem";
    openMenu.style.transform = "translateX(2rem)";
    btnSwith.style.transform = "translateX(2rem)";
    body.style.overflow = "hidden";
});
closeMenu.addEventListener("click", ()=> {
    Menu.style.left = "-100%"
    openMenu.style.transform = "translateX(0)";
    btnSwith.style.transform = "translateX(0)";
    body.style.overflow = "auto";
});

function cerrarModal() {
  Menu.style.left = "-100%"
  openMenu.style.transform = "translateX(0)";
  btnSwith.style.transform = "translateX(0)";
  body.style.overflow = "auto";
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".nav_btn").forEach(naviten => 
    naviten.addEventListener('click',function (e) {
    cerrarModal();
  }))
});


// mandar email ;
const enviaremail = document.getElementById('enviaremail');
const alertEnviado = document.getElementById("alertEnviado");

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   enviaremail.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_eeb4m3m';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      enviaremail.value = 'Send Email';
      alertEnviado.style.transform = "translateY(0)";
      setTimeout(() => {
        alertEnviado.style.transform = "translateY(-8rem)";
      }, 2200);
    }, (err) => {
      enviaremail.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});








// se obtiene la posición de los elementos
function getOffset( el ) {
  var posicionX = 0;
  var posicionY = 0;
  while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        posicionX += el.offsetLeft - el.scrollLeft;
        posicionY += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
  }
  return { top: posicionY, left: posicionX };
  }

const widthBody = document.querySelector('body');
const width = widthBody.getBoundingClientRect();
const coords = width.width;
var masTop = 0;


if (coords <= 850 ) {
  masTop = 15;
}

if (coords >= 850) {
  masTop = 74;
}


// ir a la seccion de inicio
document.getElementById("btninicio").addEventListener("click", ()=> {
  document.documentElement.scrollTop = 0;
});

// ir a la seccion de habilidades
const tophabilidades = getOffset( document.querySelector('.conten_skill') ).top;
document.getElementById("btnhabilidades").addEventListener("click", ()=> {
  document.documentElement.scrollTop = tophabilidades - masTop;
});

// ir a la seccion de hobbis
const tophobbis = getOffset( document.querySelector('.conten_hobbis') ).top;
document.getElementById("btnhobbis").addEventListener("click", ()=> {
  document.documentElement.scrollTop = tophobbis - masTop;
});

// ir a la seccion de proyectos
const topproyectos = getOffset( document.querySelector('.content_proyectos') ).top;
document.getElementById("btnproyectos").addEventListener("click", ()=> {
  document.documentElement.scrollTop = topproyectos - masTop;
});

// ir a la seccion de servicios
const topservicios = getOffset( document.querySelector('.conten_servicios') ).top;
document.getElementById("btnservicios").addEventListener("click", ()=> {
  document.documentElement.scrollTop = topservicios - masTop;
});