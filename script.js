(function (){
    document.querySelector("#eviar").addEventListener("click", evento => {
        const nome = document.querySelector("#nome").value
        const placa = document.querySelector("#placa").value
        const hora = new Date()
        const carro = [nome, placa, hora]
    })
})();