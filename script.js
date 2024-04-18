let button = document.getElementById('handleSubmit');

button.onclick = async function(e) {
    e.preventDefault();
    //cancela o comportamento padrão de um formulario, tem que colocar o "e" no parametro
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let data = {name, email, password}

    const response = await fetch('http://localhost:3010/api/store/task', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();
    console.log(content);
    if (content.sucess) {
        alert ("Sucesso!!");
        window.location.reload();
        //recarrega a página
    } else {
        console.error()
        alert("Não deu!!");
    };
};