//Pista para el usuario

Swal.fire("Te doy una pistaaa, usuario: rick- contraseña: morty!");

//LOGIN, datos guardados en un array de objetos
const plantilla = [
  {
    usuario: "rick",
    contraseña: "morty"
  },


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
//Se agrega un evento a los input  para capturar datos de usuario y contraseña
usuario.addEventListener("input", (e) => {
  console.log(e.target.value);
  login.usuario = e.target.value
});
contraseña.addEventListener("input", (e) => {
  console.log(e.target.value);
  login.contraseña = e.target.value
})
//Validacion de datos ingresados por el usuario- Evento al boton 



boton.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log(login);

try{
  const loginUsuario = login.usuario.trim().toLowerCase();
  const loginContraseña = login.contraseña.trim();
  const user = plantilla.find((el) => {
    return loginUsuario === el.usuario.trim().toLowerCase() && loginContraseña === el.contraseña.trim();
    
  });
  if (user) {
    console.log("Usuario válido");
    //Almacenarlo en Local Storage
    localStorage.setItem("user", JSON.stringify(loginUsuario));
    localStorage.setItem("contraseña", JSON.stringify(loginContraseña));
    // Redireccion a la sguiente pagina en caso de ingreso exitoso.
    window.location.href = "pagina2.html";
  } else {
    
    console.log("Usuario o contraseña incorrectos");
    
      // Mostrar SweetAlert2 personalizado
      await Swal.fire({
        title: 'Error',
        text: 'Usuario o contraseña incorrectos. ¿Desea volver a intentarlo?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirigir al usuario a la página de login
          window.location.href = "index.html";
        } else {
          // Caso contrario
          console.log("El usuario ha optado por no volver a intentarlo.");
        }
      });
    }

} catch(error){
    console.log("Ha ocurrido un error", error);
  }
});
 










































