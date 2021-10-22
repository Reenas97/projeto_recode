function exibirCategoria(categoria){
    let produtos = document.getElementsByClassName("box_produto");
    for(var i=0; i<produtos.length; i++){
        console.log(produtos[i].id);
        if(categoria == produtos[i].id){
            produtos[i].style = "display:block";
        } else {
            produtos[i].style = "display:none"
        }
    }
}

let exibirTodas = () => {
    let produtos = document.getElementsByClassName("box_produto");
    for(var i=0; i<produtos.length; i++){
            produtos[i].style = "display:block";
    }
}

let destacaImagem = (imagem) => {
    console.log(imagem);
    if(imagem.width == 160){
        imagem.width = 120;
    }else {
        imagem.width = 160;
    }
}
