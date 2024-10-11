# Fetch

## Funcionamento básico da API

Para o consumo de dados da API é necessário construir uma url com base na documentação da api. Neste caso, usou-se o seguinte endpoint:

```https://api.adviceslip.com/advice```

A resposta dessa requisição contém um objeto json na seguinte formatação:

``` json
  {
    "slip": {
      "slip_id": "2",
       "advice": "Smile and the world smiles with you. Frown and you're on your own."
    }
  }
```
### Fetch

Foi criada uma função que busca um conselho aleatório ```getRandomAdvice```, como apresentada a seguir:

``` javascript
async function getRandomAdvice() {
    try {
        const url = 'https://api.adviceslip.com/advice';
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.slip;
    } catch (error) {
        console.error('An error occurred:', error);
        return null;
    }
}
```
No javascript, o ```fetch```é o método utilizado para buscar dados de uma página ou arquivo de forma assíncrona. Ele recebe a url desejada (como a do exemplo acima) e faz uma requisição. A resposta dessa requisição segue o protocolo HTTP e pode ser interpretada pelo código principal.

É importante ressaltar que o fetch é um método **assíncrono**, o que significa que ele busca a requisição em paralelo à execução do restante do código principal. Portanto é necessário tratar o seu retorno, sabendo que a requisição pode ou não ser bem sucedida.

A sintaxe do ```fetch``` é bastante simples:

``` javascript
let url = `https://bible-api.com/?random=verse&translation=${translation}`
let response = await fetch(url)
data = await response.json()
```

Veja que construímos a URL de acordo com a documentação da API e a passamos como parâmetro para o método ```fetch```. Caso necessário, é possível ainda passar um segundo parâmetro que é um objeto com as propriedades adicionais. Por padrão, o método é o GET e não há nenhuma outra propriedade adicional.

Note a necessidade da palavra reservada ```await``` para indicar que é necessário esperar a solução do método para continuar a execução do código.

Por fim, conformamos o corpo desta resposta ao padrão JSON usando o método ```json()```que também é assíncrono e, por isso deve ser precedido da palavra ```await```também.

## Resultado visual
O código presente neste repositório, quando executado em um navegador apresenta o versículo no centro da página, como mostra a imagem a seguir:

![Exemplo de apresentação do versículo](exemplo.png)
