class NegociacaoController {

    constructor() {

     let $ = document.querySelector.bind(document);
     this._inputData = $('#data');
     this._inputQuantidade = $('#quantidade');
     this._inputValor = $('#valor');

    }

   adiciona(event){
     event.preventDefault();

     console.log(typeof(this._inputData.value));

     let data = new Date(...
         this._inputData.value
         .split('-')
         .map((item,indice) => item - indice % 2)

     );

     console.log(data);

    // let negociacao = new Negociacao(
    //   this._inputData.value,
    //   this._inputQuantidade.value,
    //   this._inputValor.value
    // );

      // console.log(negocicao);
      //Adicionar a negocicaco em uma lista

   }

}