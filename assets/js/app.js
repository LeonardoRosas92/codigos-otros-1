const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

//Agregamos async
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //Agregamos la creacion de la variable data 
  const data = await response.json();
  console.log(data);
  // Cambiamos string literal
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //Agregamos correcamente la variable
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);