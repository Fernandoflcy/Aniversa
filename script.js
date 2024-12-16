document.addEventListener("DOMContentLoaded", function() {
  const startBtn = document.getElementById("start-btn");
  const welcomeScreen = document.getElementById("welcome-screen");
  const surpriseContent = document.getElementById("surprise-content");
  const countdownTimer = document.getElementById("countdown-timer");
  const secretMessage = document.getElementById("secret-message");
  const typedMessage = document.getElementById("typed-message");
  const photoGallery = document.getElementById("photo-gallery");
  const downloadBtn = document.getElementById("download-btn");
  const responseForm = document.getElementById("response-form");
  const responseMessage = document.getElementById("response-message");
  const sendResponse = document.getElementById("send-response");
  const backgroundMusic = document.getElementById("background-music");
  const toggleTheme = document.getElementById("toggle-theme");
  const feedbackMessage = document.getElementById("feedback-message");

  // Modo Noturno
  toggleTheme.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });

  // Iniciar contagem regressiva e música
  startBtn.addEventListener("click", function() {
    welcomeScreen.style.display = "none";
    surpriseContent.style.display = "block";

    backgroundMusic.play().catch(function(error) {
      console.error("Erro ao iniciar a música:", error.message);
    });

    let count = 1; // Inicia a contagem em 1
    const maxCount = 19; // Definindo o valor máximo da contagem

    const timer = setInterval(function() {
      countdownTimer.textContent = `É ${count}!`;

      if (count === maxCount) {
        clearInterval(timer);
        countdownTimer.style.display = "none";
        revealMessage();
      }

      count++;
    }, 1000);
  });

  // Função para revelar a mensagem secreta com efeito de digitação realista
  function revealMessage() {
    secretMessage.style.display = "block";
    typedMessage.textContent = "";

    const message = `

🎉 Feliz Aniversário, Lidiana Simão!🎉

Hoje, dia 17 de Dezembro, celebramos não apenas os seus 19 anos, mas também a pessoa incrível que você se tornou. 🌟 Desde que você entrou na minha vida em 12 de Maio de 2021, cada momento ao seu lado tem sido uma verdadeira aventura! Você é meu sol em dias nublados, minha Princesa, a Filha do Boss, e meu Amor.❤️

Neste dia especial, quero que saiba o quão profundamente você é amada. Você trouxe tanta alegria para a minha vida e me ensinou a ver o mundo de uma forma mais linda. 🌈 Sua risada é minha canção favorita, e seu sorriso é o meu melhor presente. 💖

Ao completar 19 anos, desejo que cada sonho seu se transforme em realidade, que cada meta que você estabelecer seja alcançada e que sua vida seja repleta de felicidade, amor e muitas conquistas. Que você continue a brilhar intensamente, iluminando a vida de todos ao seu redor! ✨

Vamos fazer deste dia uma celebração inesquecível, cheia de risadas, abraços calorosos e momentos que ficarão gravados na memória. Estou tão animado para viver mais um ano ao seu lado, criando novas histórias e superando desafios juntos. 📖💪

Você merece todas as coisas boas do mundo, e estarei sempre aqui para te apoiar em cada passo da sua jornada. Te amo muito! Hoje é seu dia, então aproveite cada segundo! 🎂🎈

Com todo meu carinho e amor,  
Agux Lemos😍`;

    let index = 0;

    const typingEffect = setInterval(function() {
      // Adiciona cada caractere gradualmente ao texto exibido
      typedMessage.innerHTML += message[index] === '\n' ? '<br>' : message[index];
      index++;

      if (index === message.length) {
        clearInterval(typingEffect);

        // Mostrar galeria e botão de download após a digitação
        setTimeout(function() {
          photoGallery.style.display = "block";
          downloadBtn.style.display = "block";
          responseForm.style.display = "block";
          launchConfetti();
        }, 2000);
      }
    }, 50); // Intervalo de 50ms entre cada caractere
  }

  // Função para lançar confetes
  function launchConfetti() {
    const confettiSettings = { 
      target: "celebration-canvas",
      max: 150, // Aumenta o número máximo de confetes
      size: 1,  // Aumenta o tamanho dos confetes
      animate: true,
      props: ["circle", "square", "triangle", "line"],
      colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
      clock: 35 // Ajusta a velocidade do relógio para confetes
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    setTimeout(function() {
      confetti.clear();
    }, 10000); // Limpa os confetes após 10 segundos
  }

  // Enviar mensagem de resposta
  sendResponse.addEventListener("click", function() {
    if (responseMessage.value.trim() !== "") {
      alert(`Sua mensagem foi enviada: "${responseMessage.value}"`);
      responseMessage.value = ""; // Limpar campo de texto
      feedbackMessage.style.display = "block";
    } else {
      alert("Por favor, escreva uma mensagem antes de enviar.");
    }
  });

  // Funcionalidade de download do presente (opcional)
  downloadBtn.addEventListener("click", function() {
    const link = document.createElement('a');
    link.href = 'path/to/your/photo1.jpg'; // Caminho do arquivo
    link.download = 'presente.jpg'; // Nome do arquivo a ser baixado
    link.click();
  });
});
