function mostrarOla() {
    return new Promise((resolve,reject )=> {
        const teste = true;
        if(teste){
            setTimeout(()=>{resolve("Ola, mundo!")},5000);
        }
        else{
            reject("Erro total");
        }

        
    });
}
async function mostrarTudo() {
    try{
    const mensagem = await mostrarOla(); // Espera a Promise ser resolvida
    console.log("Guilherme");
    console.log("Kethilin");
    console.log(mensagem); // Mostra a mensagem retornada pela Promise
    }
    catch(erro){
        console.log(`ERRO: ${erro}`);
    }
}
mostrarTudo();