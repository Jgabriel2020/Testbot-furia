const TelegramBot = require("node-telegram-bot-api");

// Substitua pelo seu token do BotFather
const token = "7695174805:AAF_7JhjjZ73RSDQzjoIzrERReuHKCZhUKA";

// Cria o bot em modo polling
const bot = new TelegramBot(token, { polling: true });

// Comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const mensagem = `
💛💛 *Bem-vindo ao Bot da FÚRIA!* 💛💛

Explore os comandos abaixo para conhecer tudo sobre o time:

🦁 /sobre – História da FURIA  
👥 /elenco – Elenco atual  
📌 /curiosidades – Fatos interessantes  
🎥 /momentos – Momentos marcantes  
🧠 /quiz – Mostre que você é fã de verdade!  
📱 /contato – Redes sociais da FURIA
`;

  bot.sendMessage(chatId, mensagem, { parse_mode: "Markdown" });
});

// /sobre
bot.onText(/\/sobre/, (msg) => {
  const chatId = msg.chat.id;
  const texto = `
🦁 *FURIA Esports* é uma organização brasileira de esportes eletrônicos fundada em 2017.

Com sede no Brasil e nos EUA, a FURIA ficou famosa pelo estilo agressivo no CS:GO e hoje também atua em Valorant, League of Legends, Dota 2 e outras modalidades.

🏆 Conquistas:
- Presença em Majors de CS:GO
- Participações em grandes torneios internacionais
- Fã-base apaixonada no Brasil
`;

  bot.sendMessage(chatId, texto, { parse_mode: "Markdown" });
});

// /elenco
bot.onText(/\/elenco/, (msg) => {
  const chatId = msg.chat.id;
  const elenco = `
👥 *Elenco principal CS:GO (2024)*

🔫 *yuurih* – Rifler  
🎯 *KSCERATO* – Rifler  
🧠 *fallen* – In-game Leader  
🚀 *yekindar* – Entry Fragger  
🛡 *molodoy* – AWPer

`;

  bot.sendMessage(chatId, elenco, { parse_mode: "Markdown" });
});

// /curiosidades
bot.onText(/\/curiosidades/, (msg) => {
  const chatId = msg.chat.id;
  const curiosidades = `
📌 *Curiosidades da FURIA*:

1️⃣ O nome "FURIA" representa o estilo agressivo da equipe.  
2️⃣ A torcida é conhecida como *#FuriaNation*.  
3️⃣ Eles já fizeram bootcamp nos EUA por mais de um ano seguido.  
4️⃣ Têm uma parceria forte com a Red Bull e Adidas.
`;

  bot.sendMessage(chatId, curiosidades, { parse_mode: "Markdown" });
});

// /momentos
bot.onText(/\/momentos/, (msg) => {
  const chatId = msg.chat.id;
  const momentos = `
🎥 Momentos marcantes da FURIA:

📺 FURIA vs. NaVi - Map 3 [Mirage] - IEM Rio Major 2022
👉 https://youtu.be/VzImCLbkzL8?si=1J_GCWARHIeIHRu1
`;

  bot.sendMessage(chatId, momentos);
});

// /contato
bot.onText(/\/contato/, (msg) => {
  const chatId = msg.chat.id;
  const redes = `
📱 *Siga a FURIA nas redes:*

🐦 X: https://x.com/FURIA  
📸 Instagram: https://www.instagram.com/furiagg/  
🌐 Site oficial: https://www.furia.gg/  
`;

  bot.sendMessage(chatId, redes, { parse_mode: "Markdown" });
});

// /quiz
bot.onText(/\/quiz/, (msg) => {
  const chatId = msg.chat.id;

  const pergunta1 = `
🎮 *Quiz FURIA!* Responda com A, B, C ou D.

📍 *Pergunta 1:*  
Qual desses jogadores é conhecido pelo alto impacto em clutchs pela FURIA?

A) saffee  
B) KSCERATO  
C) FalleN  
D) arT
`;

  bot.sendMessage(chatId, pergunta1, { parse_mode: "Markdown" });

  bot.once("message", (resposta) => {
    const opcao = resposta.text.trim().toUpperCase();

    switch (opcao) {
      case "B":
        bot.sendMessage(chatId, "✅ *Correto!* KSCERATO é famoso pelos clutchs decisivos na FURIA.", { parse_mode: "Markdown" });
        break;
      case "A":
      case "C":
      case "D":
        bot.sendMessage(chatId, "❌ *Errado!* A resposta correta é *B) KSCERATO*.", { parse_mode: "Markdown" });
        break;
      default:
        bot.sendMessage(chatId, "❗ Por favor, responda com A, B, C ou D.", { parse_mode: "Markdown" });
        break;
    }

    const pergunta2 = `
🔥 *Quiz FURIA Avançado!* Responda com A, B, C ou D.

📍 *Pergunta 2:*  
Em qual Major a FURIA alcançou sua melhor colocação até hoje?

A) PGL Major Antwerp 2022  
B) IEM Rio Major 2022  
C) PGL Major Stockholm 2021  
D) StarLadder Berlin Major 2019
`;

    bot.sendMessage(chatId, pergunta2, { parse_mode: "Markdown" });

    bot.once("message", (resposta2) => {
      const opcao2 = resposta2.text.trim().toUpperCase();

      switch (opcao2) {
        case "B":
          bot.sendMessage(chatId, "✅ *Correto!* A FURIA chegou às semifinais no IEM Rio Major 2022, sua melhor campanha em Majors.", { parse_mode: "Markdown" });
          break;
        case "A":
        case "C":
        case "D":
          bot.sendMessage(chatId, "❌ *Errado!* A resposta correta é *B) IEM Rio Major 2022*.", { parse_mode: "Markdown" });
          break;
        default:
          bot.sendMessage(chatId, "❗ Por favor, responda com A, B, C ou D.", { parse_mode: "Markdown" });
          break;
      }

      const pergunta3 = `
🔥 *Quiz FURIA Avançado!* Responda com A, B, C ou D.

📍 *Pergunta 3:*  
Qual desses mapas historicamente foi o mais forte da FURIA em seu auge entre 2020-2021?

A) Inferno  
B) Nuke  
C) Mirage  
D) Vertigo
`;

      bot.sendMessage(chatId, pergunta3, { parse_mode: "Markdown" });

      bot.once("message", (resposta3) => {
        const opcao3 = resposta3.text.trim().toUpperCase();

        switch (opcao3) {
          case "D":
            bot.sendMessage(chatId, "✅ *Correto!* Vertigo era o mapa mais dominante da FURIA, onde impunham seu estilo agressivo com maestria.", { parse_mode: "Markdown" });
            break;
          case "A":
          case "B":
          case "C":
            bot.sendMessage(chatId, "❌ *Errado!* A resposta correta é *D) Vertigo*.", { parse_mode: "Markdown" });
            break;
          default:
            bot.sendMessage(chatId, "❗ Por favor, responda com A, B, C ou D.", { parse_mode: "Markdown" });
            break;
        }
      });
    });
  });
});
