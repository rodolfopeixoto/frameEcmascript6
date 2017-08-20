class NegociacaoService {

  constructor(){
    this._http = new HTTPService();
  }

  obterNegociacoesDaSemana(){
    
    return new Promise((resolve, reject) => { 
      this._http
        .get('http://localhost:3000/negociacoes/semana')
        .then(negociacoes => { 
        resolve(negociacoes
          .map(objeto  => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        })
        .catch((error) => {
          console.log(error);
          reject('Não foi possível obter as negóciações da semana.')
        }); 
      });
    } 

    obterNegociacoesDaSemanaAnterior(){
        
      return new Promise((resolve, reject) => { 
        
        this._http
        .get('http://localhost:3000/negociacoes/anterior')
        .then(negociacoes => { 
          resolve(negociacoes
          .map(objeto  => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        })
      .catch( (error) => {
         console.log(error);
         reject('Não foi possível obter as negóciações da semana anterior.')
       });             
    });     
  }
            
            
    obterNegociacoesDaSemanaRetrasada(){
                    
      return new Promise((resolve, reject) => { 
        this._http
        .get('http://localhost:3000/negociacoes/retrasada')
        .then(negociacoes => { 
          resolve(negociacoes
          .map(objeto  => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        })
       .catch( (error) => {
         console.log(error);
         reject('Não foi possível obter as negóciações da semana retrasada.')
      });                       
    });
 
  }
 


  obterNegociacoes() {
    
            return Promise.all([
                this.obterNegociacoesDaSemana(),
                this.obterNegociacoesDaSemanaAnterior(),
                this.obterNegociacoesDaSemanaRetrasada()
            ]).then(periodos => {
    
                let negociacoes = periodos
                    .reduce((dados, periodo) => dados.concat(periodo), []);
    
                return negociacoes;
    
            }).catch(erro => {
                throw new Error(erro);
            }); 
}
}