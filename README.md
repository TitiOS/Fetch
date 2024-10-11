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
A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como os pedidos e respostas. Ela também fornece o método global fetch() que fornece uma maneira fácil e lógica para buscar recursos de forma **assíncrona** através da rede.

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

![image](https://github.com/user-attachments/assets/40c98b87-e090-4ac1-ace3-5e4b2607be55)

