const questions = [
    {
        text: "Qual minha altura? (segundo eu)",
        image: "img/primeira.jpeg", 
        options: [
            { value: "opcao1", text: "1,68" },
            { value: "opcao2", text: "1,69" },
            { value: "correta", text: "1,70" },
            { value: "opcao3", text: "1,71" }
        ]
    },
    {
        text: "Qual foi o dia do nosso primeiro beijo?",
        image: "img/segunda.jpeg", 
        options: [
            { value: "correta", text: "8/6" },
            { value: "opcao1", text: "9/6" },
            { value: "opcao2", text: "10/6" },
            { value: "opcao3", text: "11/6" }
        ]
    },
    {
        text: "Quantas vezes já fomos ao cinema até agora?",
        image: "img/terceira.jpeg", // Insira a imagem da pergunta 3
        options: [
            { value: "correta", text: "1" },
            { value: "opcao1", text: "2" },
            { value: "opcao2", text: "3" },
            { value: "opcao3", text: "4" }
        ]
    },
    {
        text: "Qual foi o primeiro restaurante que fomos?",
        image: "img/quarta.jpeg", // Insira a imagem da pergunta 4
        options: [
            { value: "opcao1", text: "El chancho" },
            { value: "correta", text: "Incantori" },
            { value: "opcao2", text: "Turatti" },
            { value: "opcao3", text: "Mammo" }
        ]
    },
    {
        text: "Quantos Kinder Joy compramos na Taíba?",
        image: "img/quinta.png", 
        options: [
            { value: "correta", text: "4" },
            { value: "opcao1", text: "3" },
            { value: "opcao2", text: "2" },
            { value: "opcao3", text: "1" }
        ]
    },
    {
        text: "Quem da minha família tu conheceu primeiro pessoalmente",
        image: "img/sexta.jpeg", // Insira a imagem da pergunta 6
        options: [
            { value: "correta", text: "Andréa" },
            { value: "opcao1", text: "Mãe" },
            { value: "opcao2", text: "Vó" },
            { value: "opcao3", text: "Igor" }
        ]
    },
    {
        text: "Qual a minha receita favorita que meu amor faz?",
        image: "img/setima.jpeg", // Insira a imagem da pergunta 7
        options: [
            { value: "opcao1", text: "Pizza de pão" },
            { value: "correta", text: "Carbonara" },
            { value: "opcao2", text: "Bolo" },
            { value: "opcao3", text: "Macarronada" }
        ]
    },
    {
        text: "Quantas X já te busquei na GoCase de Moto?",
        image: "img/oitava.jpeg", // Insira a imagem da pergunta 8
        options: [
            { value: "correta", text: "1" },
            { value: "opcao1", text: "2" },
            { value: "opcao2", text: "3" },
            { value: "opcao3", text: "4" }
        ]
    },
    {
        text: "Quantas X já fomos para o Iguatemi esse ano?",
        image: "img/nona.jpeg", // Insira a imagem da pergunta 9
        options: [
            { value: "opcao1", text: "4" },
            { value: "opcao2", text: "3" },
            { value: "correta", text: "2" },
            { value: "opcao3", text: "1" }
        ]
    },
    {
        text: "Qual a primeira coisas que assistimos no meu quarto?",
        image: "img/decima,jpeg", // Insira a imagem da pergunta 10
        options: [
            { value: "correta", text: "Premonição" },
            { value: "opcao1", text: "Supernatural" },
            { value: "opcao2", text: "Scooby doo" },
            { value: "opcao3", text: "Shrek" }
        ]
    },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const imageElement = document.getElementById('question-image');
    const questionTextElement = document.getElementById('question-text');
    const select = document.getElementById('answer-select');
    const nextButton = document.getElementById('next-button');

    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        imageElement.src = question.image;
        questionTextElement.textContent = question.text;
        
        // Limpa as opções anteriores
        select.innerHTML = '<option value="">-- Selecione --</option>';
        
        // Adiciona novas opções
        question.options.forEach(option => {
            const newOption = document.createElement('option');
            newOption.value = option.value;
            newOption.textContent = option.text;
            select.appendChild(newOption);
        });

        nextButton.classList.add('hidden'); // Esconde o botão "Próxima Pergunta"
        select.disabled = false; // Habilita o seletor
    } else {
        showScore();
    }
}

function disableSelect() {
    const select = document.getElementById('answer-select');
    select.disabled = true; // Desabilita o seletor após a escolha
}

function submitAnswer() {
    const select = document.getElementById('answer-select');
    const selectedValue = select.value;
    const nextButton = document.getElementById('next-button');

    if (selectedValue === "") {
        alert("Por favor, selecione uma opção!");
        return;
    }

    const question = questions[currentQuestion];

    if (selectedValue === "correta") { // Mude "correta" para o valor correto da opção
        score++;
    }

    nextButton.classList.remove('hidden'); // Mostra o botão "Próxima Pergunta"
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function showScore() {
    const responseDiv = document.getElementById('response');
    const nextButton = document.getElementById('next-button');
    const restartButton = document.getElementById('restart-button');

    let message = '';
    if (score === 10) {
        message = "Eita meu amor!!!!! 10!!! Eu te amo muito!!!!";
    } else if (score >= 8) {
        message = "Urra momo quase fechou, mas isso mostra que você me ama muito muito muito.";
    } else if (score === 7) {
        message = "Eita momo, errou algumas ne? Te amo.";
    } else if (score >= 5) {
        message = "Ihhhhhh momo.";
    } else if (score === 4) {
        message = "Meeeehh.";
    } else if (score === 3) {
        message = "Diabeisso me ama não?";
    } else if (score === 2) {
        message = "Meu Deus!!!! Sei nem o que falar.";
    } else if (score === 1) {
        message = "Quer terminar é?";
    }

    responseDiv.textContent = `Você acertou ${score} de ${questions.length} perguntas! 🎉 ${message}`;
    nextButton.classList.add('hidden'); // Esconde o botão "Próxima Pergunta"
    restartButton.classList.remove('hidden'); // Mostra o botão "Reiniciar Quiz"
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    document.getElementById('response').textContent = '';
    document.getElementById('restart-button').classList.add('hidden');
}

window.onload = loadQuestion;
