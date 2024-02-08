const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let variableName = 10;",
        "const variableName = 10;",
        "var variableName = 10;",
        "int variableName = 10;",
      ],
      correta: 1
    },
    {
      pergunta: "O que significa o termo 'Hoisting' em JavaScript?",
      respostas: [
        "Levantar objetos pesados no código.",
        "Mover variáveis para o topo do escopo.",
        "Elevar funções para o início do arquivo.",
        "Ignorar erros durante a execução.",
      ],
      correta: 2
    },
    {
      pergunta: "Como você converte uma string para um número inteiro em JavaScript?",
      respostas: [
        "parseInt('10')",
        "convertToInt('10')",
        "stringToNumber('10')",
        "toInteger('10')",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
      respostas: [
        "Comparação estrita de valores e tipos.",
        "Comparação lógica de valores.",
        "Atribuição de valores.",
        "Comparação de valores apenas, sem considerar tipos.",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Documento Oficial do JavaScript.",
        "Domínio de execução do JavaScript.",
        "Modelo de Objetos Distribuídos.",
        "Modelo de Objeto do Documento.",
      ],
      correta: 3
    },
    {
      pergunta: "Qual é a finalidade do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adicionar elementos ao DOM.",
        "Adicionar ouvintes de eventos a elementos HTML.",
        "Adicionar estilos aos elementos.",
        "Adicionar métodos aos objetos.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'closure' em JavaScript?",
      respostas: [
        "Um erro durante a execução do código.",
        "Um tipo especial de função.",
        "Uma variável que não pode ser modificada.",
        "Um evento de fechamento de página.",
      ],
      correta: 1
    },
    {
      pergunta: "Como você chama uma função após um determinado período de tempo em JavaScript?",
      respostas: [
        "callFunctionAfterTimeout(myFunction, 1000);",
        "setTimeout(myFunction, 1000);",
        "runFunctionAfterDelay(myFunction, 1000);",
        "delayedFunctionCall(myFunction, 1000);",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "São sinônimos e podem ser usados indistintamente.",
        "Null é atribuído a variáveis não inicializadas, enquanto undefined é um valor atribuído pelo sistema.",
        "Undefined é usado para indicar valores vazios, enquanto null é usado para valores indefinidos.",
        "Null é um tipo de dado e undefined é um valor especial para variáveis não declaradas.",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o AJAX em JavaScript?",
      respostas: [
        "Uma biblioteca popular de JavaScript.",
        "Uma técnica que permite a comunicação assíncrona com o servidor.",
        "Um método para criar animações em páginas da web.",
        "Um padrão de design para estruturar código JavaScript.",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }  