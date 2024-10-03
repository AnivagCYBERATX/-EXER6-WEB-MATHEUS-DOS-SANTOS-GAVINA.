
document.getElementById('botao').addEventListener('click', exibirMensagem);

function exibirMensagem() {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem');

    if (nome === "") {
        mensagem.textContent = "Por Favor, insira seu nome.";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Olá, " + nome + "!";
        mensagem.style.color = "green";
    }
}

