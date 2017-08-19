class NegociacaoService {
    obterNegociacoesDaSemana(callback){

      let xhr  = new XMLHttpRequest();
      
            xhr.open('GET', 'http://localhost:3000/negociacoes/semana');
      
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
      
                      callback(null, JSON.parse(xhr.responseText)
                      .map( objeto  => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))); 
      
                      console.log(JSON.parse(xhr.responseText));
                  }else {
                      console.log(xhr.responseText);
                      callback('Não foi possível obter as negociações.', null);
                  }
                }
              
            };
      
            xhr.send();
    }


    obterNegociacoesDaSemanaAnterior(callback){
        
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
              
                              callback(null, JSON.parse(xhr.responseText)
                              .map( objeto  => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))); 
              
                              console.log(JSON.parse(xhr.responseText));
                          }else {
                              console.log(xhr.responseText);
                              callback('Não foi possível obter as negociações.', null);
                          }
                        }
                      
                    };
              
                    xhr.send();
            }
            
            
                obterNegociacoesDaSemanaRetrasada(callback){
                    
                          let xhr  = new XMLHttpRequest();
                          
                                xhr.open('GET', 'http://localhost:3000/negociacoes/retrasada');
                          
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
                          
                                          callback(null, JSON.parse(xhr.responseText)
                                          .map( objeto  => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor))); 
                          
                                          console.log(JSON.parse(xhr.responseText));
                                      }else {
                                          console.log(xhr.responseText);
                                          callback('Não foi possível obter as negociações.', null);
                                      }
                                    }
                                  
                                };
                          
                                xhr.send();
                        }
}