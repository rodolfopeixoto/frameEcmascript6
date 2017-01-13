class Negociacao {
  constructor(data, quantidade, valor) {
       this.data = new Date();
       this.quantidade = quantidade;
       this.valor = valor;
      }

  obtemVolume(){
    return this.quantidade * this.valor;
  }
}