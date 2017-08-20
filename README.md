# rogpe [ BOLSA rogpe ]

Desenvolvimento de um mini lib igual ao React ou AngularJS para SPAs com Javascript.

Exemplo da aplicação: https://rogpebolsa.herokuapp.com/

[www.about.me/rodolfopeixoto](http://www.about.me/rodolfopeixoto) 

Versão do Projeto 0.0.1
================

Sobre esta versão
---------------------
Site desenvolvido:
Utilizei: 
 - HTML 5
 - CSS 3
 - Javascript

Acompanhe as atualizações do projeto
---------------------



ATENÇÃO
---------------------



Configuração inicial
---------------------


Documentação
----------------------

```
xhr.onreadystatechange = () => {
    if(xhr.readyState == 4) { //status 4
        if(xhr.status == 200) {
            console.log(xhr.responseText);
        } else {
            console.log(xhr.responseText);
            this._mensagem.texto = 'Não foi possível obter as negociações';
        }
    }
}

```
Cada status é representado através de um inteiro. Os estados possíveis são:

* 0: requisição ainda não iniciada.
* 1: conexão com o servidor estabelecida.
* 2: requisição recebida.
* 3: processando requisição.
* 4: requisição concluída e a resposta esta pronta.
Mais informações sobre o objeto XMLHttpRequest no da Mozilla Developer Network.


### Design Patterns

##### Proxy

##### Factory


##### Promise

```


    obterNegociacoesDaSemanaAnterior(){


              return new Promise( (resolve, reject) => {
                let xhr  = new XMLHttpRequest();
                
                      xhr.open('GET', 'http://localhost:3000/negociacoes/anterior');
                
                      /* 
                       0: requisição não iniciada
                       1: conexão com o servidor estabelecida
                       2: requisição recebida
                       3: processando requisição
                       4: requisição concluída e a resposta esta pronta
                      
                      */
                    
                      xhr.onreadystatechange = () => {
                          if(xhr.readyState === 4){ 
                
                            if(xhr.status === 200){
                                console.log('Obtendo as negociações do servidor'); 
                
                                resolve(JSON.parse(xhr.responseText)
                                .map( objeto  => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))); 
                
                                console.log(JSON.parse(xhr.responseText));
                            }else {
                                console.log(xhr.responseText);
                                reject('Não foi possível obter as negociações.');
                            }
                          }
                        
                      };
                
                      xhr.send();
                
              });
        
            }

```

Chamar em ordem as funções assincronas, basta utilizar o Promise.all, assim você poderá chamar a função A, B e C.

Refatoração

```

        service.obterNegociacoesDaSemana((error, negociacoes) => {
              if(error){
                  this._mensagem.texto = error;
                  return;
              }

              negociacoes.forEach( negociacao => this._listaNegociacoes.adiciona(negociacao));
              this._mensagem.texto  =  'Negociações importada com sucesso.';
        });

        service.obterNegociacoesDaSemanaAnterior((error, negociacoes) => {
              if(error){
                  this._mensagem.texto = error;
                  return;
              }

              negociacoes.forEach( negociacao => this._listaNegociacoes.adiciona(negociacao));
              this._mensagem.texto  =  'Negociações importada com sucesso.';
        });

        service.obterNegociacoesDaSemanaRetrasada((error, negociacoes) => {
              if(error){
                  this._mensagem.texto = error;
                  return;
              }

              negociacoes.forEach( negociacao => this._listaNegociacoes.adiciona(negociacao));
              this._mensagem.texto  =  'Negociações importada com sucesso.';
        });

```
O código acima foi reduzido para o debaixo usando o design pattern Promise.

```
 service.obterNegociacoesDaSemana()
          .then( negociacoes => negociacoes.forEach( (negociacao) => { 
              this._listaNegociacoes.adiciona(negociacao);
              this._mensagem.texto = 'Negociações da semana obtida com sucesso';
            }
         ))
          .catch(error => this._mensagem.texto = error);

         service.obterNegociacoesDaSemanaRetrasada()
          .then( negociacoes => negociacoes.forEach( (negociacao) => { 
              this._listaNegociacoes.adiciona(negociacao);
              this._mensagem.texto = 'Negociações da semana obtida com sucesso';
            }
         ))
          .catch(error => this._mensagem.texto = error);

         service.obterNegociacoesDaSemanaAnterior()
          .then( negociacoes => negociacoes.forEach( (negociacao) => { 
              this._listaNegociacoes.adiciona(negociacao);
              this._mensagem.texto = 'Negociações da semana obtida com sucesso';
            }
         ))
          .catch(error => this._mensagem.texto = error);
```

Agora podemos utilizar o Promise.all para fazer um trabalho assicrono e em ordem.

```
 importaNegociacoes(){
        let service = new NegociacaoService(); 

                Promise.all([
                    service.obterNegociacoesDaSemana(),
                    service.obterNegociacoesDaSemanaAnterior(),
                    service.obterNegociacoesDaSemanaRetrasada()]
                ).then(negociacoes => {
                    negociacoes
                      .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                      .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                    this._mensagem.texto = 'Negociações importadas com sucesso';
                })
                .catch(erro => this._mensagem.texto = erro);
    
```

### Links diretos:


Desenvolvimento
---------------------
-   [Rodolfo Peixoto](http://www.rogpe.me)