
//LOGIN, datos guardados en un array de objetos
const plantilla = [
  {
    usuario: "pepito",
    contraseña: "manolo"
  },
  {
    usuario: "felipe",
    contraseña: "mafalda"
  }

]
//Recuperacion de datos en LS
const logueo = JSON.parse(localStorage.getItem("user"));
const logueo2 = JSON.parse(localStorage.getItem("contraseña"));
console.log(logueo);
console.log(logueo2);

const usuario = document.querySelector("#user");
const contraseña = document.querySelector("#password");
const boton = document.querySelector(".btn");

const login = {
  usuario: '',
  contraseña: ''
}

usuario.addEventListener("input", (e) => {
  console.log(e.target.value);
  login.usuario = e.target.value
});
contraseña.addEventListener("input", (e) => {
  console.log(e.target.value);
  login.contraseña = e.target.value
})
//Validacion de datos ingresados por el usuario
boton.addEventListener("click", (e) => {
  const user = plantilla.find((el) => {
    return login.usuario === el.usuario && login.contraseña === el.contraseña;
  })
  if (user) {
    const jSon = JSON.stringify({ usuario: user.usuario });
    localStorage.setItem("user", jSon);
    const jSon2 = JSON.stringify({ contraseña: user.contraseña });
    localStorage.setItem("contraseña", jSon2);
    console.log(localStorage.getItem("user"));
    console.log(localStorage.getItem("contraseña"));


    document.querySelector(".contenedor").innerHTML = "<h2>Ingreso Exitoso!!</h2>";
    return;
  }
  else {
    document.querySelector(".contenedor").innerHTML = "<h2>Usuario o contraseña incorrectos!</h2>";

  }
});









