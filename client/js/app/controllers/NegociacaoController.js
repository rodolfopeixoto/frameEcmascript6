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
         .map(function(item,indice){
            if(indice == 1){
                return item - 1;
            }
            return item;
         })

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