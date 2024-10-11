// Função para buscar um conselho aleatório
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

// Função para exibir o conselho na página
function displayAdvice(advice) {
    const adviceElement = document.getElementById('conselho');
    const idElement = document.getElementById('conselhoId');
    
    if (advice) {
        adviceElement.textContent = advice.advice;
        idElement.textContent = `Advice #${advice.id}`;
    } else {
        adviceElement.textContent = 'Error in seeking advice.';
        idElement.textContent = '';
    }
}

// Função para buscar e exibir um novo conselho
async function start() {
    const advice = await getRandomAdvice();
    displayAdvice(advice);
}

// Adiciona evento de clique ao botão
document.getElementById('botao').addEventListener('click', start);

// Busca um conselho inicial ao carregar a página
start();