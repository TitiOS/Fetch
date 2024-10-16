# POC4

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

A sintaxe do ```fetch```:

``` javascript
const url = 'https://api.adviceslip.com/advice';
const response = await fetch(url);
const data = await response.json();
```

Criamos a URL seguindo as orientações da documentação da API e a utilizamos como parâmetro no método fetch. Caso necessário, podemos incluir um segundo parâmetro, contendo propriedades adicionais. Utilizando o método GET por ser o padrão.

await indica que o código precisa aguardar a resolução do método antes de seguir em frente.

Por último, convertemos o corpo da resposta para o formato JSON utilizando o método json(), que também é assíncrono, necessitando do uso do await.

## Resultado visual

![image](https://github.com/user-attachments/assets/40c98b87-e090-4ac1-ace3-5e4b2607be55)

