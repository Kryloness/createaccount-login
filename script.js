document.addEventListener("DOMContentLoaded", function () {
  var elemento = document.getElementById("cad");

  if (elemento) {
    elemento.addEventListener("submit", function (event) {
      event.preventDefault();

      var nomeUser = document.getElementById("name").value;
      var emailUser = document.getElementById("email").value;
      var senhaUser = document.getElementById("password").value;

      let usuarios = new Array();

      // recupera os dados armazenados no localstorage
      if (localStorage.hasOwnProperty("usuarios")) {
        // converte a string para objeto
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
      }

      // adciona um novo objeto no array criado
      usuarios.push({ nomeUser, emailUser, senhaUser });

      // salva os dados digitados no input dentro da localstorage
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      // redireciona para a pagina animation.html
      setTimeout(function () {
        window.location.href = "animation.html";
      }, 2000);

    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var elemento = document.getElementById("loginform");

  if (elemento) {
    elemento.addEventListener("submit", function (event) {
      event.preventDefault();

      var emailUser = document.getElementById("emailLogin").value;
      var senhaUser = document.getElementById("passwordLogin").value;

      let usuarios = new Array();

      // Recupera os dados armazenados no localStorage
      if (localStorage.hasOwnProperty("usuarios")) {
        // Converte a string para objeto
        usuarios = JSON.parse(localStorage.getItem("usuarios"));

        // Realiza a validação dos dados
        var usuarioEncontrado = false;
        for (var i = 0; i < usuarios.length; i++) {
          if (usuarios[i].emailUser === emailUser && usuarios[i].senhaUser === senhaUser) {
            usuarioEncontrado = true;
            break;
          }
        }

        if (usuarioEncontrado) {
          // Redireciona para a página "dashboard.html"
          setTimeout(function () {
            window.location.href = "Dvoid.html";
          }, 2000);
        } else {
          alert("Credenciais inválidas. Por favor, verifique seu nome de usuário e senha.");
        }
      } else {
        alert("Nenhum usuário cadastrado. Por favor, registre-se primeiro.");
      }
    });
  }
});

function redirecionarL() {
  //redireciona para a pagina login.html
  setTimeout(function () {
    window.location.href = "login.html";
  }, 2000);
}
