async function fazPost(body){
    fetch('https://api-freedevs.herokuapp.com/lead', { 
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    
    return console.log(body)
    }

function cadastraUsuario(){
event.preventDefault()
const emailElemet = document.getElementById('email').value

body = {
    "email": emailElemet,
    }

    fazPost(body);
    
    return window.location.assign("https://maydoug.github.io/moviment/sucess.html") ;
}

