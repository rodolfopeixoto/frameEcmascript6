class HTTPService{
  get(url){
      return new Promise( (resolve, reject) => {
        let xhr  = new XMLHttpRequest();
        xhr.open('GET', url);
        
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
        
                        resolve(JSON.parse(xhr.responseText)); 
        
                        console.log(JSON.parse(xhr.responseText));
                    }else { 
                        reject(xhr.responseText);
                    }
                  }
                
              };
        
              xhr.send();
      });
  }    
}