console.log("HOLA MUNDO");

//ASINCRONISMO | TAREAS ASINCRÓNICAS

// SETTIMEOUT
// setTimeout( () => {
//     alert("FUNCION EJECUTADA");
// }, 5000);

const pruebaSetTimeout = () => {
    //1 EJECUTABLE
    console.warn("LA FUNCIÓN SE EJECUTÓ, ESPERANDO SETTIMEOUT");
    //2 EJECUTABLE
    setTimeout(() => {
        console.log("SET TIME OUT TERMINADO");
        alert("SET TIME OUT TERMINADO")
    }, 10000);
    //3 EJECUTABLE
    console.error("3ER EJECUTABLE LISTO");
};

//FETCH - APIs

//PROMESA: pending/pendiente | fullfilled/ya están los datos | rejected/rechazado por error

//ASYNC-AWAIT

//declarar asíncrona la función para poder usar await
const jsonplaceholderData = async () => {
    //declaro URL de API
    const url = "https://jsonplaceholder.typicode.com/posts";
    // hago FETCH con funcionalidad nativa de JS de esa URL
    // declarar AWAIT para esperar la ejecución de ese método antes de seguir
    const respuesta = await fetch(url);
    const json = await respuesta.json()
    console.log(json);
    const user2 = json.filter(function (post) {
        return post.userId === 2
    })
    console.log(user2)
}

const emailUser = document.getElementById("email");

const comprobarEmail = async (event) => {
    event.preventDefault();

    if (!emailUser) return;

    const emailIngresado = emailUser.value.trim().toLowerCase();
    const url = "https://jsonplaceholder.typicode.com/users";
    const respuesta = await fetch(url);
    const usersJson = await respuesta.json();
    console.log(usersJson);

    const emailsLogueados = usersJson.map((user) => {
        return user.email;
    });

    console.log(emailsLogueados)

    if (emailsLogueados.includes(emailIngresado)) {
        alert("INTENTE CON OTRO MAIL");
        console.error("Email ya en uso");
    } else {
        // window.location.href = "bienvenido.html"
        console.log("Email disponible");
    }
};
