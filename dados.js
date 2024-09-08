let dados = [
    {
        ID: "1",
        campeao: "Alistar",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Monte Targon",
        lore: "Alistar é um taurino imenso de Ionia, originalmente um guerreiro poderoso. Capturado e escravizado, foi forçado a lutar nas arenas de batalha, onde seu espírito e força foram brutalmente testados. Após sua liberdade, Alistar busca a redenção e a justiça, tentando proteger os oprimidos e lutar contra a injustiça, enquanto ainda carrega as cicatrizes emocionais de seu passado.",
        build: "https://lolalytics.com/lol/alistar/build/"
    },

    {
        ID: "2",
        campeao: "Annie",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Noxus",
        lore: "Annie é uma jovem prodígio mágica de 8 anos com um poder imenso, que se manifesta de forma incontrolável. Ela vive em um mundo de fantasia com sua adorada amiga imaginária, Tibbers, que é também um urso de fogo conjurado por ela. Annie busca um lar e uma família, enquanto seu imenso poder e natureza infantil frequentemente a colocam em situações perigosas e desafiadoras.",
        build: "https://lolalytics.com/lol/annie/build/"
    },

    {
        ID: "3",
        campeao: "Ashe",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Freljord",
        lore: "Ashe é a Rainha dos Freljordianos e líder da tribo Freljordiana, conhecida por sua habilidade excepcional com o arco e flecha. Determinada a unir as tribos divididas de Freljord, ela busca paz e estabilidade em um território devastado pela guerra. Sua visão é criar um reino unido sob seu comando, mas seus esforços frequentemente são desafiados por rivais e ameaças sobrenaturais.",
        build: "https://lolalytics.com/lol/ashe/build/"
    },

    {
        ID: "4",
        campeao: "Fiddlesticks",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Selva",
        rotaSecundaria: "Topo",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Runeterra (desconhecida)",
        lore: "Fiddlesticks é uma entidade sombria e antiga que encarna o terror e a desolação. Ele foi criado há milênios como uma entidade de medo, sua presença é marcada por uma aura de horror e apatia. Fiddlesticks vagueia pelas terras de Runeterra, alimentando-se do medo e desespero das suas vítimas, e seu objetivo é espalhar a terror e a desolação por onde passa.",
        build: "https://lolalytics.com/lol/fiddlesticks/build/"
    },

    {
        ID: "5",
        campeao: "Jax",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Selva",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Icathia",
        lore: "Jax é um guerreiro lendário conhecido como o Mestre das Armas, que vive para desafiar e superar adversários em combate. Ele foi testemunha da destruição de seu mundo natal e se tornou um lutador imortal com habilidades formidáveis. Jax busca constantemente o próximo desafio, usando suas habilidades para proteger o que resta de sua civilização e buscar vingança contra aqueles que causaram a destruição.",
        build: "https://lolalytics.com/lol/jax/build/"
    },

    {
        ID: "6",
        campeao: "Kayle",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Meio",
        classeJogo: "Mago",
        tipoDano: "Híbrido",
        regiaoOrigem: "Monte Targon",
        lore: "Kayle é uma campeã de Demacia e defensora da justiça, conhecida por sua determinação inabalável em erradicar a corrupção e a injustiça. Armadilha em sua armadura luminosa e empunhando uma lâmina sagrada, Kayle busca garantir que o código de honra e justiça prevaleça, lutando contra as forças do mal e a corrupção que ameaçam a integridade de seu reino.",
        build: "https://lolalytics.com/lol/kayle/build/"
    },

    {
        ID: "7",
        campeao: "Master Yi",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ionia",
        lore: "Master Yi é um guerreiro zen de Ionia e mestre das artes marciais. Após uma tragédia pessoal que devastou sua aldeia e levou à morte de seu mestre, ele busca equilíbrio e paz interior através do treinamento e da meditação. Master Yi usa suas habilidades de combate para proteger seu povo e buscar a iluminação, enquanto busca superar a dor de seu passado e encontrar a redenção.",
        build: "https://lolalytics.com/lol/masteryi/build/"
    },

    {
        ID: "8",
        campeao: "Morgana",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "Meio",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Monte Targon",
        lore: "Morgana é uma antiga guardiã de Ionia, filha de um grande líder de sua ordem. Após ser traída por seu próprio pai e ver a ordem à qual pertencia ser destruída, ela busca justiça e redenção, mas com um coração amargurado e uma sede de vingança. Suas habilidades de magia negra e seu desejo de corrigir as injustiças a tornam uma figura complexa e enigmática.",
        build: "https://lolalytics.com/lol/morgana/build/"
    },

    {
        ID: "9",
        campeao: "Nunu & Willump",
        ano: "2009",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Freljord",
        lore: "Nunu é um jovem explorador do Freljord, e Willump é seu amigo yeti gigante. Juntos, eles vivem aventuras emocionantes e enfrentam diversos desafios para proteger sua terra natal e seus habitantes. Nunu possui uma grande conexão com a magia e a natureza, e sua amizade com Willump é a chave para suas vitórias e descobertas em um mundo hostil e selvagem.",
        build: "https://lolalytics.com/lol/nunu/build/"
    },

    {
        ID: "10",
        campeao: "Ryze",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Meio",
        rotaSecundaria: "Topo",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Runeterra (desconhecida)",
        lore: "Ryze é um mago antigo que carrega a responsabilidade de proteger e coletar os fragmentos de um artefato mágico de imenso poder. Sua busca é motivada pelo desejo de evitar que esse poder caia em mãos erradas e cause um cataclismo. Sua jornada o leva por diversos lugares em Runeterra, enfrentando perigos e desafiando forças malignas enquanto busca preservar o equilíbrio mágico.",
        build: "https://lolalytics.com/lol/ryze/build/"
    },

    {
        ID: "11",
        campeao: "Sion",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Noxus",
        lore: "Sion é um antigo guerreiro de Noxus que foi reanimado por magia negra após sua morte. Transformado em uma máquina de destruição, ele luta com um desejo insaciável de vingança contra aqueles que o traíram e causaram sua morte. Sua busca por redenção e sua fúria descontrolada fazem dele um dos campeões mais temidos e destrutivos de Runeterra.",
        build: "https://lolalytics.com/lol/sion/build/"
    },

    {
        ID: "12",
        campeao: "Sivir",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Shurima",
        lore: "Sivir é uma mercenária famosa por sua destreza com o estandarte e sua habilidade em combate. Ela busca tesouros e desafios, navegando pelo mundo com uma mistura de astúcia e coragem. Sua habilidade em encontrar e recuperar artefatos valiosos a torna uma figura influente e poderosa, mas também a coloca em situações perigosas e desafiadoras em sua busca por riqueza e aventura.",
        build: "https://lolalytics.com/lol/sivir/build/"
    },

    {
        ID: "13",
        campeao: "Soraka",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Suporte",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Ionia",
        lore: "Soraka é uma curandeira celestial que foi enviada para ajudar e curar os feridos e os necessitados em Runeterra. Sua bondade e compaixão são evidentes em sua busca por aliviar o sofrimento e promover a paz. Com habilidades poderosas de cura e uma conexão profunda com o mundo espiritual, Soraka enfrenta desafios tanto físicos quanto emocionais enquanto busca trazer esperança e cura para aqueles ao seu redor.",
        build: "https://lolalytics.com/lol/soraka/build/"
    },

    {
        ID: "14",
        campeao: "Teemo",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Selva",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Bandle City",
        lore: "Teemo é um explorador yordle do Bando dos Sentinelas, conhecido por suas habilidades de furtividade e uso de armadilhas. Ele é um defensor leal de seu lar e luta contra ameaças em Runeterra, muitas vezes usando táticas engenhosas e estratégias furtivas para superar adversários. Seu espírito destemido e suas habilidades especiais o tornam um dos campeões mais ágeis e engenhosos.",
        build: "https://lolalytics.com/lol/teemo/build/"
    },

    {
        ID: "15",
        campeao: "Tristana",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Bandle City",
        lore: "Tristana é uma yordle engenheira de combate com uma personalidade forte e destemida. Como defensora de seu povo, ela usa suas habilidades de combate e suas engenhocas explosivas para enfrentar ameaças e proteger sua terra natal. Sua determinação e coragem a tornam uma campeã confiável e eficaz, sempre pronta para enfrentar qualquer desafio que surja em seu caminho.",
        build: "https://lolalytics.com/lol/tristana/build/"
    },

    {
        ID: "16",
        campeao: "Twisted Fate",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Meio",
        rotaSecundaria: "Topo",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Águas de Sentina",
        lore: "Twisted Fate é um mestre das cartas e do destino, um trapaceiro carismático que manipula a sorte e usa magia para alcançar seus objetivos. Sua habilidade de controlar o destino com suas cartas e sua astúcia fazem dele um personagem enigmático e imprevisível, que busca aproveitar as oportunidades que surgem e manipular eventos a seu favor.",
    build: "https://lolalytics.com/lol/twistedfate/build/"},

    {
        ID: "17",
        campeao: "Warwick",
        data: "21 de fevereiro",
        ano: "2009",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Zaun",
        lore: "Warwick é um caçador monstruoso de Zaun, transformado por magia negra e experimentos cruéis. Sua busca é por vingança contra aqueles que o transformaram e o atormentaram, agora utilizando suas habilidades de rastreamento e combate para caçar e eliminar seus inimigos. Sua fúria e desejo de justiça o tornam uma figura implacável e poderosa.",
        build: "https://lolalytics.com/lol/warwick/build/"
    },

    {
        ID: "18",
        campeao: "Singed",
        data: "18 de abril",
        ano: "2009",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Zaun",
        lore: "Singed é um cientista e alquimista de Zaun, obcecado por suas experimentações e pesquisas. Seus experimentos frequentemente resultam em destruição e caos, e sua busca por conhecimento o leva a criar armas e venenos devastadores. Singed é um exemplo de como a obsessão pelo poder e pela ciência pode levar a consequências perigosas e destrutivas.",
        build: "https://lolalytics.com/lol/singed/build/"
    },

    {
        ID: "19",
        campeao: "Zilean",
        data: "18 de abril",
        ano: "2009",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "Meio",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Icathia",
        lore: "Zilean é um mago que controla o tempo, buscando corrigir erros do passado e prevenir catástrofes futuras. Sua habilidade de manipular o fluxo temporal o torna um aliado valioso e um adversário formidável, mas também carrega o peso e as consequências de suas ações. Zilean luta para proteger Runeterra e restaurar o equilíbrio, enquanto enfrenta os desafios e as responsabilidades de seu poder temporal.",
        build: "https://lolalytics.com/lol/zilean/build/"
    },

    {
        ID: "20",
        campeao: "Evelynn",
        data: "1º de maio",
        ano: "2009",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Runeterra (desconhecida)",
        lore: "Evelynn é uma entidade demoníaca que se alimenta do sofrimento e da emoção humana. Conhecida por sua natureza sedutora e cruel, ela busca incessantemente causar dor e destruição, alimentando-se do terror que provoca em suas vítimas. Evelynn é uma força implacável e destrutiva, que vive para espalhar o caos e a desesperança.",
        build: "https://lolalytics.com/lol/evelynn/build/"
    },

    {
        ID: "21",
        campeao: "Tryndamere",
        data: "1º de maio",
        ano: "2009",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Freljord",
        lore: "Tryndamere é o Rei Barbaro do Freljord, um guerreiro imortal e feroz que busca vingança contra aqueles que destruíram seu lar e sua esposa. Sua força e habilidades de combate são imensas, e sua busca por justiça e poder o levam a enfrentar inimigos poderosos e desafiar qualquer um que ameace sua terra e seu povo.",
        build: "https://lolalytics.com/lol/tryndamere/build/"
    },

    {
        ID: "22",
        campeao: "Twitch",
        data: "1º de maio",
        ano: "2009",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Zaun",
        lore: "Twitch é um rato mutante de Zaun que se tornou um atirador furtivo especializado em ataques venenosos e emboscadas. Sua aparência grotesca e habilidades traiçoeiras fazem dele um adversário temido e perigoso, enquanto ele busca expandir seu domínio e causar caos em seu caminho.",
    build: "https://lolalytics.com/lol/twitch/build/"},

    {
        ID: "23",
        campeao: "Karthus",
        data: "12 de junho",
        ano: "2009",
        rotaPrimaria: "Meio",
        rotaSecundaria: "Selva",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Ilhas das Sombras",
        lore: "Karthus é um lich que busca expandir o poder da morte e trazer o apocalipse aos vivos. Como o Canto da Morte, ele usa sua habilidade de necromancia para manipular e controlar os mortos, buscando disseminar a morte e o desespero por onde passa.Sua presença é marcada por uma aura de fatalidade e desolação.",
    build: "https://lolalytics.com/lol/karthus/build/"},

    {
        ID: "24",
        campeao: "Amumu",
        data: "26 de junho",
        ano: "2009",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Shurima",
        lore: "Amumu é um yordle amaldiçoado que carrega uma tristeza eterna e uma solidão profunda. Sua maldição impede-o de encontrar a felicidade e a paz, e ele busca desesperadamente por companhia e uma cura para sua condição. Amumu é um personagem melancólico, cuja busca por redenção e amizade é marcada por seu comportamento solitário e sua aparência triste.",
        build: "https://lolalytics.com/lol/amumu/build/"
    },

    {
        ID: "25",
        campeao: "Cho'Gath",
        data: "26 de junho",
        ano: "2009",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Vazio",
        lore: "Cho'Gath é uma criatura monstruosa do Vazio que busca consumir e destruir tudo que encontra em seu caminho. Como um predador voraz, sua existência é marcada por um desejo insaciável de expansão e devoração, e ele utiliza suas habilidades para esmagar e devorar qualquer coisa que esteja em seu caminho.",
        build: "https://lolalytics.com/lol/chogath/build/"
    },

    {
        ID: "26",
        campeao: "Anivia",
        data: "10 de julho",
        ano: "2009",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Freljord",
        lore: "Anivia é uma deusa do gelo que protege Freljord e suas terras geladas. Com uma aparência majestosa e habilidades de controle do gelo, ela luta para defender seu reino e seus habitantes de ameaças sobrenaturais e invasões. Anivia é uma força primordial que busca preservar o equilíbrio e a harmonia em um ambiente hostil e inóspito.",
        build: "https://lolalytics.com/lol/anivia/build/"
    },

    {
        ID: "27",
        campeao: "Rammus",
        data: "10 de julho",
        ano: "2009",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Shurima",
        lore: "Rammus é um yordle com espinhos, conhecido por sua habilidade de rolar e se defender de ataques inimigos. Ele possui uma natureza protetora e é um guerreiro resistente, que luta para defender sua terra natal e enfrentar os desafios que surgem. Sua aparência robusta e suas habilidades de combate o tornam um defensor formidável e um aliado confiável.",
        build: "https://lolalytics.com/lol/rammus/build/"
    },

    {
        ID: "28",
        campeao: "Veigar",
        data: "24 de julho",
        ano: "2009",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Bandle City",
        lore: "Veigar é um mago maléfico que busca poder absoluto através da magia negra. Sua obsessão por dominância e seu desejo de poder o levam a buscar artefatos e habilidades que aumentem seu controle sobre o mundo. Veigar é uma figura astuta e perigosa, cuja ambição e crueldade fazem dele um adversário formidável e imprevisível.",
        build: "https://lolalytics.com/lol/veigar/build/"
    },

    {
        ID: "29",
        campeao: "Kassadin",
        data: "7 de agosto",
        ano: "2009",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Shurima",
        lore: "Kassadin é um guerreiro determinado que busca vingança contra o Vazio por ter levado sua filha. Ele se tornou um especialista em combate e anti-magia, usando suas habilidades para lutar contra as ameaças do Vazio e proteger o que resta de sua família e seu lar. Kassadin é um herói determinado, cuja missão é destruir o mal que destruiu sua vida.",
        build: "https://lolalytics.com/lol/kassadin/build/"
    },

    {
        ID: "30",
        campeao: "Gangplank",
        data: "19 de agosto",
        ano: "2009",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Águas de Sentina",
        lore: "Gangplank é um capitão pirata de Bilgewater que busca conquistar e governar o mundo dos piratas com sua crueldade e astúcia. Ele é um líder implacável e estrategista, cuja ambição é expandir seu poder e influência sobre os mares. Sua busca por dominação o leva a enfrentar diversos desafios e adversários, sempre com o objetivo de se tornar o pirata mais temido.",
        build: "https://lolalytics.com/lol/gangplank/build/"
    },

    {
        ID: "31",
        campeao: "Taric",
        data: "19 de agosto",
        ano: "2009",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Monte Targon",
        lore: "Taric é um protetor de Shurima que usa suas habilidades de magia e força para defender os inocentes e lutar contra o mal. Como um guardião da beleza e da justiça, ele busca proteger sua terra natal e seus habitantes de ameaças que buscam destruir o equilíbrio e a harmonia. Taric é conhecido por seu caráter nobre e sua determinação em manter a ordem e a justiça.",
        build: "https://lolalytics.com/lol/taric/build/"
    },

    {
        ID: "32",
        campeao: "Blitzcrank",
        data: "2 de setembro",
        ano: "2009",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Zaun",
        lore: "Blitzcrank é um golem de Zaun projetado para ajudar a comunidade e proteger os necessitados. Criado com a intenção de servir e auxiliar, ele usa suas habilidades mecânicas e força para combater o mal e enfrentar desafios. Blitzcrank é um personagem solidário e eficiente, que busca trazer justiça e segurança para aqueles ao seu redor.",
        build: "https://lolalytics.com/lol/blitzcrank/build/"
    },

    {
        ID: "33",
        campeao: "Dr. Mundo",
        data: "2 de setembro",
        ano: "2009",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Selva",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Zaun",
        lore: "Dr. Mundo é um cientista que se tornou um monstro devido a experimentos químicos. Ele busca desesperadamente uma cura para sua condição enquanto continua a causar caos e destruição. Sua aparência grotesca e sua resistência incomum tornam-no uma força temida, que vive para satisfazer seus desejos e instintos primários.",
        build: "https://lolalytics.com/lol/drmundo/build/"
    },

    {
        ID: "34",
        campeao: "Janna",
        data: "2 de setembro",
        ano: "2009",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Suporte",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Zaun",
        lore: "Janna é uma deusa do vento que protege e cuida dos necessitados com suas habilidades de controle climático e tempestades. Ela busca trazer calmaria e proteção para aqueles que estão em perigo, usando seus poderes para garantir a segurança e a estabilidade em tempos de crise.Janna é uma figura benevolente e protetora, sempre disposta a ajudar e a lutar pela paz.",
    build: "https://lolalytics.com/lol/janna/build/"},

    {
        ID: "35",
        campeao: "Malphite",
        data: "2 de setembro",
        ano: "2009",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ixtal",
        lore: "Malphite é uma entidade rochosa que representa o poder da natureza e o equilíbrio. Criado para restaurar a ordem e a estabilidade, ele busca combater as ameaças que perturbam o equilíbrio natural e proteger seu reino. Sua força colossal e habilidades de controle da terra fazem dele um defensor imbatível e um guardião da harmonia.",
    build: "https://lolalytics.com/lol/malphite/build/"},

    {
        ID: "36",
        campeao: "Corki",
        data: "19 de setembro",
        ano: "2009",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "Meio",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Bandle City",
        lore: "Corki é um yordle aviador conhecido por sua habilidade em combate aéreo e suas invenções tecnológicas. Como piloto de um avião altamente modificado, ele busca aventuras e desafios nos céus de Runeterra, enfrentando inimigos e protegendo seu lar com coragem e engenhosidade. Corki é um explorador destemido e um defensor fiel de sua terra natal.",
        build: "https://lolalytics.com/lol/corki/build/"
    },

    {
        ID: "37",
        campeao: "Katarina",
        data: "19 de setembro",
        ano: "2009",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Noxus",
        lore: "Katarina é uma assassina habilidosa de Noxus, conhecida por sua destreza com lâminas e sua determinação implacável. Ela busca vingança e glória para sua família e país, enfrentando adversários com precisão mortal e estratégias astutas. Sua habilidade em combate e seu desejo de poder a tornam uma figura temida e respeitada.",
        build: "https://lolalytics.com/lol/katarina/build/"
    },

    {
        ID: "38",
        campeao: "Nasus",
        data: "1 de outubro",
        ano: "2009",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Shurima",
        lore: "Nasus é um ser antigo e sábio de Shurima, um guardião do conhecimento e da sabedoria. Ele busca proteger sua civilização e preservar o legado de seu povo, enfrentando ameaças com sua força e sabedoria. Nasus é um líder respeitado e um defensor da ordem, sempre empenhado em garantir a segurança e a continuidade de sua cultura.",
        build: "https://lolalytics.com/lol/nasus/build/"
    },

    {
        ID: "39",
        campeao: "Heimerdinger",
        data: "10 de outubro",
        ano: "2009",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Meio",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Piltover",
        lore: "Heimerdinger é um yordle inventor brilhante de Piltover, conhecido por suas invenções e engenhocas. Como um cientista inovador, ele busca resolver problemas e melhorar a vida de seus concidadãos com suas criações tecnológicas. Sua curiosidade e criatividade fazem dele um personagem valioso e um defensor da ciência e da inovação.",
        build: "https://lolalytics.com/lol/heimerdinger/build/"
    },

    {
        ID: "40",
        campeao: "Shaco",
        data: "10 de outubro",
        ano: "2009",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Runeterra (desconhecida)",
        lore: "Shaco é um palhaço assassino e trapaceiro que se diverte em causar caos e destruição. Com suas habilidades de ilusão e truques, ele busca espalhar o medo e a confusão por onde passa, alimentando-se do sofrimento e da desordem. Shaco é uma figura enigmática e perturbadora, sempre em busca de causar o máximo impacto possível.",
        build: "https://lolalytics.com/lol/shaco/build/"
    },

    {
        ID: "41",
        campeao: "Udyr",
        data: "2 de dezembro",
        ano: "2009",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Freljord",
        lore: "Udyr é um monge guerreiro de Ionia que protege a natureza e busca equilibrar o mundo com suas habilidades de transformação. Ele se conecta com os espíritos animais para lutar contra ameaças e defender seu lar. Sua sabedoria e habilidades de combate fazem dele um protetor formidável e um guardião da ordem natural.",
        build: "https://lolalytics.com/lol/udyr/build/"
    },

    {
        ID: "42",
        campeao: "Nidalee",
        data: "17 de novembro",
        ano: "2009",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Híbrido",
        regiaoOrigem: "Ixtal",
        lore: "Nidalee é uma caçadora e guerreira de Ionia, conhecida por sua conexão com a natureza e suas habilidades de transformação. Ela protege as terras selvagens e seus habitantes, utilizando suas habilidades para enfrentar perigos e desafios. Nidalee é uma personagem destemida e feroz, sempre pronta para lutar em defesa de seu mundo natural.",
        build: "https://lolalytics.com/lol/nidalee/build/"
    },

    {
        ID: "43",
        campeao: "Poppy",
        data: "13 de janeiro",
        ano: "2010",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Selva",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Demacia",
        lore: "Poppy é uma yordle campeã e defensora do Freljord, conhecida por sua força e lealdade. Ela busca provar seu valor e encontrar o martelo de um lendário herói que acredita ser seu destino empunhar. Poppy enfrenta desafios e inimigos com coragem e determinação, sempre em busca de cumprir seu destino e proteger seu povo.",
        build: "https://lolalytics.com/lol/poppy/build/"
    },

    {
        ID: "44",
        campeao: "Gragas",
        data: "2 de fevereiro",
        ano: "2010",
        rotaPrimaria: "Selva",
        rotaSecundaria: "Topo",
        classeJogo: "Mago",
        tipoDano: "Híbrido",
        regiaoOrigem: "Freljord",
        lore: "Gragas é um druida de Ionia que se tornou um bebedor renomado em busca da fórmula perfeita para sua bebida. Embora sua aparência e comportamento sejam muitas vezes desleixados, ele é um protetor dedicado de sua terra natal, usando sua força e habilidades para enfrentar ameaças e manter a paz.",
        build: "https://lolalytics.com/lol/gragas/build/"
    },

    {
        ID: "45",
        campeao: "Pantheon",
        data: "2 de fevereiro",
        ano: "2010",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Selva",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Monte Targon",
        lore: "Pantheon é um guerreiro imortal de Targon, conhecido por sua habilidade em combate e sua conexão com as tradições de seu povo. Como um campeão lendário, ele busca honra e justiça, enfrentando desafios e inimigos com determinação e força. Pantheon é um defensor respeitado e um lutador incansável, sempre em busca de cumprir seu papel como guardião da ordem.",
        build: "https://lolalytics.com/lol/pantheon/build/"
    },

    {
        ID: "46",
        campeao: "Mordekaiser",
        data: "24 de fevereiro",
        ano: "2010",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Híbrido",
        regiaoOrigem: "Noxus",
        lore: "Mordekaiser é um imperador ressuscitado que busca dominar o mundo com seu poder sombrio e suas habilidades de necromancia. Após sua morte, ele foi trazido de volta à vida por magia negra e busca impor seu reino de terror e destruição sobre Runeterra. Mordekaiser é uma força formidável, com um desejo insaciável de poder e controle.",
        build: "https://lolalytics.com/lol/mordekaiser/build/"
    },

    {
        ID: "47",
        campeao: "Ezreal",
        data: "16 de março",
        ano: "2010",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "Meio",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Piltover",
        lore: "Ezreal é um explorador e arqueólogo de Piltover, conhecido por suas habilidades de combate e sua busca por artefatos antigos. Ele utiliza sua inteligência e habilidades mágicas para enfrentar perigos e desenterrar segredos esquecidos. Ezreal é um aventureiro destemido, sempre em busca de novas descobertas e desafios.",
        build: "https://lolalytics.com/lol/ezreal/build/"
    },

    {
        ID: "48",
        campeao: "Shen",
        data: "24 de março",
        ano: "2010",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ionia",
        lore: "Shen é um ninja de Ionia e líder da Ordem das Sombras, conhecido por sua habilidade em proteger seu povo e manter o equilíbrio. Com suas habilidades de sombra e sua conexão com o mundo espiritual, Shen busca enfrentar ameaças e defender sua terra natal de forças malignas.Seu papel como guardião e protetor é essencial para manter a paz e a ordem.",
    build: "https://lolalytics.com/lol/shen/build/"},

    {
        ID: "49",
        campeao: "Kennen",
        data: "8 de abril",
        ano: "2010",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Meio",
        classeJogo: "Assassino",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Ionia",
        lore: "Kennen é um yordle ninjas de Ionia, que utiliza suas habilidades de eletricidade e agilidade para enfrentar inimigos e proteger sua terra. Como um membro da Ordem das Sombras, ele busca trazer equilíbrio e justiça para seu povo, usando suas habilidades para lutar contra ameaças e preservar a paz. Kennen é um personagem ágil e determinado, sempre pronto para enfrentar desafios.",
        build: "https://lolalytics.com/lol/kennen/build/"
    },

    {
        ID: "50",
        campeao: "Garen",
        data: "27 de abril",
        ano: "2010",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Demacia",
        lore: "Garen é um guerreiro de Demacia, conhecido por sua força e lealdade ao reino. Ele luta para proteger seu país e garantir que a justiça prevaleça, enfrentando inimigos com coragem e habilidade em combate. Garen é um defensor destemido e um líder respeitado, sempre comprometido com a honra e a proteção de seu lar.",
        build: "https://lolalytics.com/lol/garen/build/"
    },

    {
        ID: "51",
        campeao: "Akali",
        data: "11 de maio",
        ano: "2010",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ionia",
        lore: "Akali é uma assassina ninja de Ionia, conhecida por sua habilidade em combate e seu desejo de justiça. Como membro da Ordem das Sombras, ela luta contra a corrupção e as forças malignas, usando suas habilidades de furtividade e agilidade para enfrentar adversários e proteger seu povo. Akali é uma lutadora implacável e determinada, sempre em busca de cumprir sua missão.",
        build: "https://lolalytics.com/lol/akali/build/"
    },

    {
        ID: "52",
        campeao: "Malzahar",
        data: "1º de junho",
        ano: "2010",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Shurima",
        lore: "Malzahar é um profeta do Vazio que busca expandir a influência e o poder do Vazio sobre Runeterra. Como um mestre da magia das trevas, ele utiliza suas habilidades para manipular e controlar as forças do mal, buscando criar um novo reino sob o domínio do Vazio.Malzahar é um personagem sombrio e ameaçador, sempre empenhado em cumprir seus objetivos malignos.",
    build: "https://lolalytics.com/lol/malzahar/build/"},

    {
        ID: "53",
        campeao: "Olaf",
        data: "9 de junho",
        ano: "2010",
        rotaPrimaria: "Selva",
        rotaSecundaria: "Topo",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Freljord",
        lore: "Olaf é um guerreiro bárbaro do Freljord, conhecido por sua força e resistência imensas. Ele busca desafios e aventuras, lutando contra inimigos e enfrentando perigos com coragem e determinação. Olaf é um combatente feroz e destemido, sempre em busca de novas batalhas e oportunidades para provar seu valor.",
        build: "https://lolalytics.com/lol/olaf/build/"
    },

    {
        ID: "54",
        campeao: "Kog'Maw",
        data: "24 de junho",
        ano: "2010",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Vazio",
        lore: "Kog'Maw é uma criatura do Vazio com um desejo insaciável de consumir e devorar tudo em seu caminho. Como um predador voraz, ele busca expandir seu domínio e causar destruição, utilizando suas habilidades de corrosão e devastação para enfrentar inimigos e ameaçar a estabilidade de Runeterra.Kog'Maw é uma força destrutiva e perigosa, sempre em busca de seu próximo alvo.",
    build: "https://lolalytics.com/lol/kogmaw/build/"},

    {
        ID: "55",
        campeao: "Xin Zhao",
        data: "13 de julho",
        ano: "2010",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Demacia",
        lore: "Xin Zhao é um guerreiro de Demacia, conhecido por suas habilidades de combate e sua lealdade ao reino. Ele busca proteger sua terra natal e lutar contra ameaças com sua lança e habilidades de combate. Xin Zhao é um defensor corajoso e determinado, sempre pronto para enfrentar desafios e garantir a segurança de seu povo.",
        build: "https://lolalytics.com/lol/xinzhao/build/"
    },

    {
        ID: "56",
        campeao: "Vladimir",
        data: "27 de julho",
        ano: "2010",
        rotaPrimaria: "Meio",
        rotaSecundaria: "Topo",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Noxus",
        lore: "Vladimir é um mago sanguinário que utiliza suas habilidades de manipulação do sangue para obter poder e controle. Ele busca expandir sua influência e dominar aqueles que o cercam, utilizando suas habilidades sombrias para causar caos e destruição. Vladimir é uma figura enigmática e ameaçadora, sempre em busca de atingir seus objetivos malignos.",
        build: "https://lolalytics.com/lol/vladimir/build/"
    },

    {
        ID: "57",
        campeao: "Galio",
        data: "10 de agosto",
        ano: "2010",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Meio",
        classeJogo: "Tanque",
        tipoDano: "Híbrido",
        regiaoOrigem: "Demacia",
        lore: "Galio é um colosso de pedra que protege Demacia de ameaças sobrenaturais. Com sua imensa força e habilidades de defesa, ele busca garantir a segurança e a estabilidade do reino, enfrentando inimigos e perigos com coragem e determinação. Galio é um defensor robusto e leal, sempre empenhado em proteger seu lar e seus habitantes.",
        build: "https://lolalytics.com/lol/galio/build/"
    },

    {
        ID: "58",
        campeao: "Urgot",
        data: "24 de agosto",
        ano: "2010",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Zaun",
        lore: "Urgot é um guerreiro brutal e implacável que busca vingar-se de seus inimigos e expandir seu poder. Transformado por experimentos cruéis, ele utiliza suas habilidades de combate e sua força imensa para causar destruição e obter controle sobre os outros. Urgot é um adversário temido e perigoso, sempre em busca de cumprir seus objetivos de vingança e dominação.",
        build: "https://lolalytics.com/lol/urgot/build/"
    },

    {
        ID: "59",
        campeao: "Miss Fortune",
        data: "8 de setembro",
        ano: "2010",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Águas de Sentina",
        lore: "Miss Fortune é uma atiradora de Bilgewater conhecida por sua habilidade com armas de fogo e sua busca por vingança. Após perder sua família para um ataque pirata, ela se tornou uma caçadora de recompensas destemida e uma defensora implacável da justiça. Miss Fortune usa suas habilidades de combate para enfrentar inimigos e buscar justiça para aqueles que perdeu.",
        build: "https://lolalytics.com/lol/missfortune/build/"
    },

    {
        ID: "60",
        campeao: "Sona",
        data: "21 de setembro",
        ano: "2010",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Suporte",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Demacia",
        lore: "Sona é uma virtuosa de Ionia que usa sua música mágica para curar e proteger. Com suas habilidades musicais e sua bondade, ela busca promover a paz e a harmonia em um mundo muitas vezes turbulento. Sona é uma figura benevolente e pacífica, sempre empenhada em usar seu talento para trazer alegria e cura aos outros.",
        build: "https://lolalytics.com/lol/sona/build/"
    },

    {
        ID: "61",
        campeao: "Swain",
        data: "5 de outubro",
        ano: "2010",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Meio",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Noxus",
        lore: "Swain é o estrategista chefe de Noxus, conhecido por sua habilidade em manipular e controlar as forças do seu reino. Com um passado marcado por traições e ambições, ele busca expandir o poder de Noxus e garantir sua posição como líder. Swain é um personagem astuto e formidável, sempre em busca de alcançar seus objetivos e consolidar seu poder.",
        build: "https://lolalytics.com/lol/swain/build/"
    },

    {
        ID: "62",
        campeao: "Lux",
        data: "19 de outubro",
        ano: "2010",
        rotaPrimaria: "Meio",
        rotaSecundaria: "Suporte",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Demacia",
        lore: "Lux é uma maga de Demacia conhecida por sua habilidade em manipular a luz e sua busca por justiça. Com sua bondade e coragem, ela luta para proteger seu reino e enfrentar ameaças com suas habilidades mágicas. Lux é uma campeã destemida e otimista, sempre empenhada em garantir a segurança e a paz em seu lar.",
        build: "https://lolalytics.com/lol/lux/build/"
    },

    {
        ID: "63",
        campeao: "LeBlanc",
        data: "2 de novembro",
        ano: "2010",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Noxus",
        lore: "LeBlanc é uma feiticeira misteriosa e manipuladora que busca expandir sua influência e poder. Conhecida por sua habilidade em ilusão e engano, ela utiliza suas habilidades para causar confusão e alcançar seus objetivos malignos. LeBlanc é uma figura enigmática e perigosa, sempre em busca de aumentar sua influência e controle.",
        build: "https://lolalytics.com/lol/leblanc/build/"
    },

    {
        ID: "64",
        campeao: "Irelia",
        data: "16 de novembro",
        ano: "2010",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ionia",
        lore: "Irelia é uma guerreira de Ionia que busca proteger sua terra natal e restaurar a ordem. Com sua habilidade em combate e seu vínculo com a magia, ela enfrenta inimigos e ameaças com coragem e determinação. Irelia é uma defensora feroz e habilidosa, sempre empenhada em lutar pela justiça e proteger seu povo.",
    build: "https://lolalytics.com/lol/irelia/build/"},

    {
        ID: "65",
        campeao: "Trundle",
        data: "1º de dezembro",
        ano: "2010",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Selva",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Freljord",
        lore: "Trundle é um troll do Freljord conhecido por sua força e habilidade em combate. Após ser exilado de sua terra natal, ele busca expandir seu território e dominar outras regiões com sua força imensa. Trundle é um personagem robusto e formidável, sempre em busca de conquistar e expandir seu domínio.",
        build: "https://lolalytics.com/lol/trundle/build/"
    },

    {
        ID: "66",
        campeao: "Cassiopeia",
        data: "14 de dezembro",
        ano: "2010",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Noxus",
        lore: "Cassiopeia é uma serpente de Noxus com habilidades de magia venenosa e sedutora. Ela busca expandir seu poder e influência, utilizando suas habilidades para manipular e controlar aqueles ao seu redor. Cassiopeia é uma figura astuta e perigosa, sempre em busca de aumentar seu controle e obter vantagens sobre seus inimigos.",
    build: "https://lolalytics.com/lol/cassiopeia/build/"},

    {
        ID: "67",
        campeao: "Caitlyn",
        data: "4 de janeiro",
        ano: "2011",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Piltover",
        lore: "Caitlyn é uma caçadora e detetive de Piltover conhecida por sua habilidade em rastrear e capturar criminosos. Com sua inteligência e destreza, ela busca manter a ordem e garantir a segurança em sua cidade. Caitlyn é uma defensora habilidosa e dedicada, sempre empenhada em proteger seu lar e enfrentar desafios com coragem.",
        build: "https://lolalytics.com/lol/caitlyn/build/"
    },

    {
        ID: "68",
        campeao: "Renekton",
        data: "18 de janeiro",
        ano: "2011",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Shurima",
        lore: "Renekton é um guerreiro primordial de Shurima, conhecido por sua força e habilidades de combate. Após ser corrompido e transformado em uma sombra do que era, ele busca vingança contra aqueles que o traíram e destruíram seu legado. Renekton é um combatente implacável e formidável, sempre em busca de justiça e redenção.",
        build: "https://lolalytics.com/lol/renekton/build/"
    },

    {
        ID: "69",
        campeao: "Karma",
        data: "1º de fevereiro",
        ano: "2011",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "Meio",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Ionia",
        lore: "Karma é uma sábia e poderosa líder espiritual de Ionia, conhecida por sua habilidade em manipular a energia espiritual e promover a paz. Com seu desejo de proteger seu povo e restaurar o equilíbrio, ela enfrenta ameaças com sabedoria e força. Karma é uma campeã benevolente e determinada, sempre empenhada em lutar pela harmonia e a justiça.",
        build: "https://lolalytics.com/lol/karma/build/"
    },

    {
        ID: "70",
        campeao: "Maokai",
        data: "16 de fevereiro",
        ano: "2011",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Selva",
        classeJogo: "Tanque",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Ilhas das Sombras",
        lore: "Maokai é um espírito da natureza que busca vingar-se daqueles que destruíram sua casa e sua terra natal. Com suas habilidades de controle das plantas e sua força colossal, ele luta para proteger o que resta de sua terra e enfrentar os inimigos que ameaçam sua existência. Maokai é um defensor determinado e formidável, sempre empenhado em restaurar a ordem e a paz.",
        build: "https://lolalytics.com/lol/maokai/build/"
    },

    {
        ID: "71",
        campeao: "Jarvan IV",
        data: "1º de março",
        ano: "2011",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Demacia",
        lore: "Jarvan IV é um príncipe de Demacia e líder militar conhecido por sua habilidade em combate e sua lealdade ao reino. Ele busca proteger seu país e garantir a segurança e a ordem, enfrentando adversários com coragem e determinação. Jarvan IV é um líder respeitado e um guerreiro formidável, sempre empenhado em manter a paz e a justiça.",
        build: "https://lolalytics.com/lol/jarvaniv/build/"
    },

    {
        ID: "72",
        campeao: "Nocturne",
        data: "15 de março",
        ano: "2011",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Runeterra (desconhecida)",
        lore: "Nocturne é uma entidade das trevas que representa os pesadelos e a ansiedade. Originário de uma dimensão de terror, ele busca espalhar medo e desespero, invadindo os sonhos de suas vítimas e transformando seus piores medos em realidade. Nocturne é um predador que se alimenta do terror alheio, sendo uma força obscura que ataca onde a vulnerabilidade é maior.",
        build: "https://lolalytics.com/lol/nocturne/build/"
    },

    {
        ID: "73",
        campeao: "Lee Sin",
        data: "1º de abril",
        ano: "2011",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ionia",
        lore: "Lee Sin é um monge cego e mestre das artes marciais de Ionia, que busca a iluminação espiritual enquanto protege seu templo e seu povo. Depois de um evento traumático que resultou em sua cegueira, ele se dedicou ao treinamento físico e mental para se tornar um guerreiro ainda mais forte. Lee Sin usa suas habilidades para lutar contra as ameaças e manter o equilíbrio em sua terra natal.",
        build: "https://lolalytics.com/lol/leesin/build/"
    },

    {
        ID: "74",
        campeao: "Brand",
        data: "12 de abril",
        ano: "2011",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "Meio",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Runeterra (desconhecida)",
        lore: "Brand é um mago de gelo que busca espalhar o fogo e a destruição por onde passa. Ele é um portador de uma antiga profecia que preconiza o renascimento do mundo através da destruição. Brand é uma força caótica e devastadora, utilizando suas habilidades pirotécnicas para incitar a destruição e a mudança violenta no mundo ao seu redor.",
        build: "https://lolalytics.com/lol/brand/build/"
    },

    {
        ID: "75",
        campeao: "Rumble",
        data: "26 de abril",
        ano: "2011",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Selva",
        classeJogo: "Mago",
        tipoDano: "Híbrido",
        regiaoOrigem: "Bandle City",
        lore: "Rumble é um yordle mecânico de Bandle City, conhecido por seu talento para construir e pilotar mechas de combate. Com uma atitude rebeldia e uma paixão por engenhocas, ele utiliza sua criatividade e engenhosidade para  enfrentar adversários e superar desafios.Rumble é um inovador, sempre em busca de novas formas de aplicar suas habilidades tecnológicas no campo de batalha.",
    build: "https://lolalytics.com/lol/rumble/build/"},

    {
        ID: "76",
        campeao: "Vayne",
        data: "10 de maio",
        ano: "2011",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Demacia",
        lore: "Vayne é uma caçadora implacável de Demacia, dedicada a erradicar as criaturas das trevas que ameaçam sua terra. Motivada pela perda de sua família para monstros, ela se tornou uma especialista em rastrear e exterminar essas criaturas.Vayne é conhecida por sua destreza e habilidade em combate, sempre empenhada em proteger o mundo de seres malignos e corruptos.",
    build: "https://lolalytics.com/lol/vayne/build/"},

    {
        ID: "77",
        campeao: "Orianna",
        data: "1º de junho",
        ano: "2011",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Piltover",
        lore: "Orianna é uma inventora de Piltover que utiliza uma esfera mecânica para realizar feitos mágicos e tecnológicos. Após um trágico acidente que a deixou com o corpo danificado, ela usa sua invenção para substituir partes de seu corpo e aprimorar suas habilidades. Orianna é uma figura inovadora, sempre em busca de aperfeiçoar suas criações e enfrentar os desafios com precisão e destreza.",
        build: "https://lolalytics.com/lol/orianna/build/"
    },

    {
        ID: "78",
        campeao: "Yorick",
        data: "22 de junho",
        ano: "2011",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ilhas das Sombras",
        lore: "Yorick é um cavaleiro das tumbas de Shurima, que busca libertar a alma de sua terra natal da influência do Vazio. Com a habilidade de invocar e controlar espectros, ele procura resgatar as almas perdidas e combater as forças sombrias que assolam sua terra.Yorick é um guardião das tumbas e um defensor dos vivos, sempre empenhado em restaurar a paz e o equilíbrio.",
    build: "https://lolalytics.com/lol/yorick/build/"},

    {
        ID: "79",
        campeao: "Leona",
        data: "13 de julho",
        ano: "2011",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Monte Targon",
        lore: "Leona é uma guerreira solar de Demacia, dedicada a proteger sua terra natal com a força da luz. Como uma defensora da justiça e da verdade, ela usa suas habilidades para combater as forças das trevas e garantir a segurança de seu povo. Leona é uma campeã de honra, sempre disposta a enfrentar o mal com coragem e determinação.",
        build: "https://lolalytics.com/lol/leona/build/"
    },

    {
        ID: "80",
        campeao: "Wukong",
        data: "26 de julho",
        ano: "2011",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ionia",
        lore: "Wukong é um macaco guerreiro de Ionia, conhecido por sua agilidade e habilidades de combate excepcionais. Ele é um defensor feroz da natureza e da tradição, buscando proteger seu lar e seu povo com bravura e habilidade. Wukong é um combatente ágil e astuto, sempre pronto para enfrentar adversários e desafios com destreza e inteligência.",
        build: "https://lolalytics.com/lol/wukong/build/"
    },

    {
        ID: "81",
        campeao: "Skarner",
        data: "9 de agosto",
        ano: "2011",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Shurima",
        lore: "Skarner é um escorpião cristalino de Shurima, cuja principal missão é proteger seu lar e sua espécie. Ele busca restaurar a harmonia e a ordem em seu território, lutando contra aqueles que ameaçam a estabilidade do ambiente natural. Skarner é um guardião robusto e determinado, sempre empenhado em proteger o que resta de sua terra natal e suas tradições.",
        build: "https://lolalytics.com/lol/skarner/build/"
    },

    {
        ID: "82",
        campeao: "Talon",
        data: "24 de agosto",
        ano: "2011",
        rotaPrimaria: "Meio",
        rotaSecundaria: "Selva",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Noxus",
        lore: "Talon é um assassino de Noxus, conhecido por sua habilidade em combate furtivo e sua determinação implacável. Ele é um mestre das lâminas e utiliza suas habilidades para eliminar alvos de forma rápida e eficiente. Talon é um combatente ágil e astuto, sempre em busca de alcançar seus objetivos com precisão e eficácia.",
        build: "https://lolalytics.com/lol/talon/build/"
    },

    {
        ID: "83",
        campeao: "Riven",
        data: "14 de setembro",
        ano: "2011",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Noxus",
        lore: "Riven é uma guerreira errante que busca redenção e justiça após ter sido exilada de seu país natal. Com suas habilidades de combate e seu desejo de expiar seus erros passados, ela enfrenta inimigos e desafios com determinação e coragem. Riven é uma personagem feroz e resiliente, sempre em busca de encontrar seu propósito e redenção.",
        build: "https://lolalytics.com/lol/riven/build/"
    },

    {
        ID: "84",
        campeao: "Xerath",
        data: "5 de outubro",
        ano: "2011",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Shurima",
        lore: "Xerath é um antigo mago de Shurima que busca retornar ao poder supremo, após ser aprisionado por séculos. Com habilidades mágicas de manipulação de energia e destruição, ele deseja dominar e transformar o mundo segundo sua visão. Xerath é um antagonista formidável e ambicioso, sempre em busca de expandir sua influência e controlar o destino de Runeterra.",
        build: "https://lolalytics.com/lol/xerath/build/"
    },

    {
        ID: "85",
        campeao: "Graves",
        data: "19 de outubro",
        ano: "2011",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Águas de Sentina",
        lore: "Graves é um caçador de recompensas durão e pragmático que se destaca por seu talento com armas de fogo. Originário de Bilgewater, ele é conhecido por sua força e habilidades de combate, sempre em busca de justiça e lucro. Graves é um personagem robusto e determinado, enfrentando desafios com coragem e eficiência.",
        build: "https://lolalytics.com/lol/graves/build/"
    },

    {
        ID: "86",
        campeao: "Shyvana",
        data: "1º de novembro",
        ano: "2011",
        rotaPrimaria: "Selva",
        rotaSecundaria: "Topo",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Demacia",
        lore: "Shyvana é uma guerreira dragão de Freljord que busca proteger sua terra natal e encontrar seu verdadeiro lugar no mundo. Com habilidades de transformação e poder dracônico, ela luta para manter a segurança e enfrentar ameaças.Shyvana é uma campeã poderosa e destemida, sempre empenhada em defender seu lar e seus aliados.",
    build: "https://lolalytics.com/lol/shyvana/build/"},

    {
        ID: "87",
        campeao: "Fizz",
        data: "15 de novembro",
        ano: "2011",
        rotaPrimaria: "Meio",
        rotaSecundaria: "Selva",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Águas de Sentina",
        lore: "Fizz é um espírito marinho brincalhão e ágil que protege o oceano e seus habitantes. Ele é conhecido por suas habilidades de combate e sua conexão com as criaturas do mar, sempre buscando defender seu território e enfrentar ameaças. Fizz é um personagem enérgico e destemido, sempre pronto para enfrentar desafios e proteger seu mundo aquático.",
        build: "https://lolalytics.com/lol/fizz/build/"
    },

    {
        ID: "88",
        campeao: "Volibear",
        data: "29 de novembro",
        ano: "2011",
        rotaPrimaria: "Selva",
        rotaSecundaria: "Topo",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Freljord",
        lore: "Volibear é um deus urso de Freljord, que busca restaurar a antiga glória de seu povo e proteger suas terras das ameaças que surgem. Com sua força colossal e habilidades de controle do trovão, ele enfrenta adversários com bravura e poder. Volibear é um guerreiro formidável e um líder respeitado, sempre empenhado em garantir a segurança e a estabilidade de seu lar.",
        build: "https://lolalytics.com/lol/volibear/build/"
    },

    {
        ID: "89",
        campeao: "Ahri",
        data: "14 de dezembro",
        ano: "2011",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Ionia",
        lore: "Ahri é uma raposa mágica de Ionia que busca entender sua própria natureza e encontrar seu lugar no mundo. Com habilidades de manipulação mágica e encantamento, ela utiliza sua astúcia e charme para enfrentar desafios e proteger aqueles que ama. Ahri é uma personagem encantadora e destemida, sempre em busca de autoconhecimento e harmonia.",
        build: "https://lolalytics.com/lol/ahri/build/"
    },

    {
        ID: "90",
        campeao: "Viktor",
        data: "29 de dezembro",
        ano: "2011",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Zaun",
        lore: "Viktor é um cientista de Piltover que busca aprimorar a humanidade através da tecnologia e da magia. Com um desejo de criar um mundo mais perfeito, ele utiliza suas invenções e habilidades tecnológicas para enfrentar desafios e alcançar seus objetivos. Viktor é um inovador e um pensador, sempre empenhado em transformar o mundo com suas criações.",
        build: "https://lolalytics.com/lol/viktor/build/"
    },

    {
        ID: "91",
        campeao: "Sejuani",
        data: "17 de janeiro",
        ano: "2012",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Freljord",
        lore: "Sejuani é uma líder guerreira do Freljord, conhecida por sua habilidade em combate e sua determinação em proteger seu povo. Com seu animal de estimação, um javali gigante, ela luta contra as ameaças e busca garantir asegurança e a sobrevivência de sua tribo.Sejuani é uma campeã formidável e corajosa, sempre empenhada em enfrentar desafios com força e bravura.",
    build: "https://lolalytics.com/lol/sejuani/build/"},

    {
        ID: "92",
        campeao: "Ziggs",
        data: "1º de fevereiro",
        ano: "2012",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Zaun",
        lore: "Ziggs é um especialista em explosivos de Zaun, conhecido por sua paixão por causar caos e destruição. Com um talento para criar e detonar bombas, ele busca espalhar a destruição e a diversão em igual medida. Ziggs é um personagem enérgico e explosivo, sempre em busca de aventuras e desafios que lhe permitam demonstrar seu talento para a demolição.",
        build: "https://lolalytics.com/lol/ziggs/build/"
    },

    {
        ID: "93",
        campeao: "Nautilus",
        data: "14 de fevereiro",
        ano: "2012",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Águas de Sentina",
        lore: "Nautilus é um antigo mergulhador que se tornou um colosso subaquático, lutando para proteger o oceano e suas profundezas. Com uma força imensa e habilidades de combate aquático, ele enfrenta ameaças e busca resgatar aqueles que se encontram em perigo. Nautilus é um defensor robusto e determinado, sempre empenhado em garantir a segurança do ambiente marinho.",
        build: "https://lolalytics.com/lol/nautilus/build/"
    },

    {
        ID: "94",
        campeao: "Fiora",
        data: "29 de fevereiro",
        ano: "2012",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Demacia",
        lore: "Fiora é uma espadachim mestre de Freljord, conhecida por sua habilidade excepcional com a espada e seu desejo de provar sua superioridade. Com uma determinação inabalável e uma busca por desafios, ela enfrenta adversários com precisão e habilidade, sempre empenhada em encontrar e derrotar os melhores oponentes.",
        build: "https://lolalytics.com/lol/fiora/build/"
    },

    {
        ID: "95",
        campeao: "Lulu",
        data: "20 de março",
        ano: "2012",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Bandle City",
        lore: "Lulu é uma fada mágica de Bandle City que usa suas habilidades de encantamento para proteger e ajudar os outros. Com seu espírito brincalhão e sua capacidade de manipular a realidade, ela traz alegria e confusão para seus inimigos, sempre buscando criar um mundo mais divertido e encantador.",
        build: "https://lolalytics.com/lol/lulu/build/"
    },

    {
        ID: "96",
        campeao: "Hecarim",
        data: "18 de abril",
        ano: "2012",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ilhas das Sombras",
        lore: "Hecarim é um espectro cavaleiro de Freljord que busca espalhar o medo e o caos por onde passa. Com habilidades de combate espectral e um desejo de destruição, ele enfrenta adversários com uma força sobrenatural e um propósito maligno. Hecarim é uma figura temida, sempre empenhado em conquistar o poder e a dominação através do terror.",
        build: "https://lolalytics.com/lol/hecarim/build/"
    },

    {
        ID: "97",
        campeao: "Varus",
        data: "8 de maio",
        ano: "2012",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ionia",
        lore: "Varus é um arqueiro que busca vingança após ter sua vida e sua família destruídas por forças malignas. Com habilidades de arco e flecha e um desejo de justiça, ele luta para enfrentar aqueles que lhe fizeram mal e proteger os inocentes. Varus é um guerreiro determinado e implacável, sempre empenhado em buscar a redenção e a vingança.",
        build: "https://lolalytics.com/lol/varus/build/"
    },

    {
        ID: "98",
        campeao: "Darius",
        data: "23 de maio",
        ano: "2012",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Noxus",
        lore: "Darius é um guerreiro implacável de Noxus, conhecido por sua força e habilidades de combate excepcionais. Como um dos líderes de Noxus, ele busca expandir o poder de seu reino e derrotar qualquer um que se oponha a ele. Darius é um combatente formidável e um líder destemido, sempre empenhado em garantir a supremacia de seu império.",
        build: "https://lolalytics.com/lol/darius/build/"
    },

    {
        ID: "99",
        campeao: "Draven",
        data: "6 de junho",
        ano: "2012",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Noxus",
        lore: "Draven é um gladiador de Noxus conhecido por sua habilidade com machados e sua busca incessante por fama e reconhecimento. Com uma personalidade exuberante e uma atitude desafiadora, ele busca demonstrar sua superioridade e obter o reconhecimento que acha que merece. Draven é um personagem carismático e formidável, sempre em busca de destaque e sucesso.",
        build: "https://lolalytics.com/lol/draven/build/"
    },

    {
        ID: "100",
        campeao: "Jayce",
        data: "7 de julho",
        ano: "2012",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Híbrido",
        regiaoOrigem: "Piltover",
        lore: "Jayce é um inventor e herói de Piltover, conhecido por suas invenções tecnológicas e seu desejo de proteger sua cidade. Com uma habilidade excepcional em criar dispositivos e armas, ele busca enfrentar ameaças e garantir a segurança de seu povo. Jayce é um inovador e um defensor, sempre empenhado em usar suas habilidades para o bem de sua cidade.",
        build: "https://lolalytics.com/lol/jayce/build/"
    },

    {
        ID: "101",
        campeao: "Zyra",
        data: "24 de julho",
        ano: "2012",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Ixtal",
        lore: "Zyra é uma feiticeira das plantas que busca expandir seu domínio e controlar a natureza. Com suas habilidades de manipulação vegetal e sua ambição de dominar a flora ao seu redor, ela enfrenta inimigos e ameaça o equilíbrio com suas habilidades de devastação. Zyra é uma campeã formidável e perigosa, sempre empenhada em alcançar seus objetivos e expandir seu controle.",
        build: "https://lolalytics.com/lol/zyra/build/"
    },

    {
        ID: "102",
        campeao: "Diana",
        data: "7 de agosto",
        ano: "2012",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Monte Targon",
        lore: "Diana é uma guerreira de Ionia que busca compreender e proteger os mistérios da lua. Com suas habilidades de manipulação lunar e um desejo de equilibrar as forças do cosmos, ela enfrenta adversários e busca garantir asegurança de seu povo.Diana é uma campeã sábia e destemida, sempre empenhada em encontrar e proteger o equilíbrio entre as forças cósmicas.",
build: "https://lolalytics.com/lol/diana/build/"},

    {
        ID: "103",
        campeao: "Rengar",
        data: "21 de agosto",
        ano: "2012",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ixtal",
        lore: "Rengar é um caçador feroz de Ionia, conhecido por sua habilidade em rastrear e eliminar suas presas. Com uma determinação implacável e um desejo de provar sua superioridade, ele busca enfrentar adversários formidáveis e expandir seu domínio como caçador.Rengar é um combatente ágil e astuto, sempre empenhado em alcançar seus objetivos de caça.",
build: "https://lolalytics.com/lol/rengar/build/"},

    {
        ID: "104",
        campeao: "Syndra",
        data: "13 de setembro",
        ano: "2012",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Ionia",
        lore: "Syndra é uma feiticeira poderosa que busca expandir seu poder e superar qualquer limitação que lhe seja imposta. Com suas habilidades de manipulação de energia e controle telecinético, ela enfrenta desafios e adversários com ambição e determinação. Syndra é uma campeã dominante e formidável, sempre em busca de alcançar a supremacia mágica.",
        build: "https://lolalytics.com/lol/syndra/build/"
    },

    {
        ID: "105",
        campeao: "Kha’Zix",
        data: "27 de setembro",
        ano: "2012",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Vazio",
        lore: "Kha’Zix é um predador do Vazio que busca evoluir e se tornar o ser mais formidável de Runeterra. Com a habilidade de adaptação e evolução, ele enfrenta desafios e elimina suas presas com precisão letal. Kha’Zix é uma ameaça constante, sempre em busca de se adaptar e dominar suas vítimas com suas habilidades predatórias.",
        build: "https://lolalytics.com/lol/khazix/build/"
    },

    {
        ID: "106",
        campeao: "Elise",
        data: "26 de outubro",
        ano: "2012",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Híbrido",
        regiaoOrigem: "Noxus",
        lore: "Elise é uma feiticeira de Noxus que se transformou em uma aranha imortal com habilidades de manipulação e veneno. Com seu desejo de expandir seu poder e controlar aqueles ao seu redor, ela busca devorar suas presas e obter o controle sobre suas vítimas. Elise é uma figura ameaçadora e manipuladora, sempre empenhada em alcançar seus objetivos malignos.",
        build: "https://lolalytics.com/lol/elise/build/"
    },

    {
        ID: "107",
        campeao: "Zed",
        data: "13 de novembro",
        ano: "2012",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ionia",
        lore: "Zed é um ninja de Ionia que busca poder e controle através da manipulação das sombras. Como líder dos Assassinos das Sombras, ele utiliza suas habilidades para eliminar seus inimigos e buscar a supremacia. Zed é um mestre da furtividade e da escuridão, sempre empenhado em alcançar seus objetivos e dominar aqueles ao seu redor.",
        build: "https://lolalytics.com/lol/zed/build/"
    },

    {
        ID: "108",
        campeao: "Nami",
        data: "7 de dezembro",
        ano: "2012",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Suporte",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Águas de Sentina",
        lore: "Nami é uma sacerdotisa do oceano que busca proteger e restaurar a harmonia das águas. Com suas habilidades de manipulação da água e seu desejo de garantir a segurança dos mares, ela enfrenta ameaças e busca proteger seu povo e seu ambiente. Nami é uma defensora dedicada e uma figura benevolente, sempre empenhada em manter o equilíbrio e a paz marinha.",
        build: "https://lolalytics.com/lol/nami/build/"
    },

    {
        ID: "109",
        campeao: "Vi",
        data: "19 de dezembro",
        ano: "2012",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Piltover",
        lore: "Vi é uma caçadora de recompensas de Piltover, conhecida por sua força e habilidades de combate com suas luvas de poder. Com uma atitude destemida e uma busca por justiça, ela enfrenta adversários e combate o crime com coragem e eficiência.Vi é uma defensora formidável e determinada, sempre empenhada em proteger sua cidade e garantir a ordem.",
build: "https://lolalytics.com/lol/vi/build/"},

    {
        ID: "110",
        campeao: "Thresh",
        data: "23 de janeiro",
        ano: "2013",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ilhas das Sombras",
        lore: "Thresh é um espectro que se alimenta das almas das suas vítimas, conhecido por seu desejo de colecionar almas e expandir seu poder. Com habilidades de manipulação e captura de almas, ele busca atormentar e dominar aqueles que cruzam seu caminho. Thresh é uma figura sinistra e ameaçadora, sempre empenhada em alcançar seus objetivos malignos.",
        build: "https://lolalytics.com/lol/thresh/build/"
    },

    {
        ID: "111",
        campeao: "Quinn",
        data: "1º de março",
        ano: "2013",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Demacia",
        lore: "Quinn é uma exploradora e guerreira de Demacia, conhecida por sua habilidade em combate e sua lealdade ao reino. Com seu fiel companheiro, um águia chamada Valor, ela busca proteger seu país e enfrentar ameaças com coragem e destreza. Quinn é uma defensora habilidosa e uma combatente dedicada, sempre empenhada em garantir a segurança e a ordem.",
        build: "https://lolalytics.com/lol/quinn/build/"
    },

    {
        ID: "112",
        campeao: "Zac",
        data: "29 de março",
        ano: "2013",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Zaun",
        lore: "Zac é um ser gelatinoso de Zaun que busca ajudar e proteger aqueles ao seu redor. Com suas habilidades de regeneração e elasticidade, ele enfrenta desafios e ameaça o mal com sua força e bondade. Zac é um personagem carismático e benevolente, sempre empenhado em usar suas habilidades para o bem dos outros e proteger aqueles em necessidade.",
        build: "https://lolalytics.com/lol/zac/build/"
    },

    {
        ID: "113",
        campeao: "Lissandra",
        data: "30 de abril",
        ano: "2013",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Freljord",
        lore: "Lissandra é uma feiticeira de gelo de Freljord que busca controlar e dominar o mundo através da magia do gelo. Com suas habilidades de manipulação do frio e seu desejo de expandir seu poder, ela enfrenta adversários e busca alcançar seus objetivos de controle e domínio.Lissandra é uma figura enigmática e ameaçadora, sempre empenhada em consolidar seu poder e alcançar seus objetivos malignos.",
build: "https://lolalytics.com/lol/lissandra/build/"},

    {
        ID: "114",
        campeao: "Aatrox",
        data: "13 de junho",
        ano: "2013",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Runeterra (desconhecida)",
        lore: "Aatrox é um demônio guerreiro do Vazio que busca destruir tudo e todos em seu caminho. Após ser aprisionado e transformado, ele utiliza suas habilidades de combate e sua força imensa para causar caos e destruição. Aatrox é um adversário formidável e impiedoso, sempre empenhado em alcançar seus objetivos de dominação e vingança.",
        build: "https://lolalytics.com/lol/aatrox/build/"
    },

    {
        ID: "115",
        campeao: "Lucian",
        data: "22 de agosto",
        ano: "2013",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Demacia",
        lore: "Lucian é um caçador de almas de Demacia, conhecido por sua habilidade em eliminar os espectros e as forças das trevas. Com uma missão pessoal de vingar a morte de sua esposa, ele utiliza suas habilidades de combate e suas armas para enfrentar as ameaças sobrenaturais. Lucian é um defensor destemido e determinado, sempre empenhado em cumprir sua missão e proteger os inocentes.",
        build: "https://lolalytics.com/lol/lucian/build/"
    },

    {
        ID: "116",
        campeao: "Jinx",
        data: "10 de outubro",
        ano: "2013",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Zaun",
        lore: "Jinx é uma criminosa de Piltover conhecida por seu comportamento anárquico e sua paixão por causar caos e destruição. Com uma série de armas explosivas e uma atitude provocadora, ela busca espalhar o caos e se divertir à custa dos outros. Jinx é uma figura imprevisível e perigosa, sempre em busca de novas formas de criar confusão e desordem.",
        build: "https://lolalytics.com/lol/jinx/build/"
    },

    {
        ID: "117",
        campeao: "Yasuo",
        data: "13 de dezembro",
        ano: "2013",
        rotaPrimaria: "Meio",
        rotaSecundaria: "Topo",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ionia",
        lore: "Yasuo é um espadachim errante de Ionia, conhecido por sua habilidade com a espada e seu desejo de encontrar redenção. Após ser acusado injustamente e sofrer a perda de seus entes queridos, ele busca limpar seu nome e enfrentar os desafios com coragem e habilidade. Yasuo é um guerreiro ágil e destemido, sempre empenhado em lutar pela justiça e pela redenção.",
        build: "https://lolalytics.com/lol/yasuo/build/"
    },

    {
        ID: "118",
        campeao: "Vel'Koz",
        data: "27 de fevereiro",
        ano: "2014",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Vazio",
        lore: "Vel'Koz é uma entidade do Vazio que busca absorver e compreender todo o conhecimento e a vida em Runeterra. Com suas habilidades de manipulação de energia e seu desejo de entender o universo, ele enfrenta adversários e busca expandir seu poder. Vel'Koz é uma figura enigmática e ameaçadora, sempre empenhada em alcançar seus objetivos de conhecimento e controle.",
        build: "https://lolalytics.com/lol/velkoz/build/"
    },

    {
        ID: "119",
        campeao: "Braum",
        data: "12 de fevereiro",
        ano: "2014",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Freljord",
        lore: "Braum é um herói de Freljord conhecido por sua força e coragem em proteger seu povo. Com seu escudo imenso e sua personalidade amigável, ele busca garantir a segurança e a paz em sua terra natal. Braum é um defensor robusto e benevolente, sempre empenhado em usar suas habilidades para proteger e ajudar os outros.",
        build: "https://lolalytics.com/lol/braum/build/"
    },

    {
        ID: "120",
        campeao: "Gnar",
        data: "14 de agosto",
        ano: "2014",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Híbrido",
        regiaoOrigem: "Freljord",
        lore: "Gnar é um yordle primitivo de Freljord que busca reconectar-se com seu passado e sua verdadeira natureza. Com a habilidade de se transformar em um monstro colossal, ele enfrenta desafios e luta para proteger sua terra natal.Gnar é um personagem carismático e poderoso, sempre empenhado em encontrar seu lugar no mundo e proteger seus entes queridos.",
build: "https://lolalytics.com/lol/gnar/build/"},

    {
        ID: "121",
        campeao: "Azir",
        data: "16 de setembro",
        ano: "2014",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Shurima",
        lore: "Azir é um imperador de Shurima que busca restaurar a glória e o poder de seu império perdido. Com suas habilidades de manipulação de areia e sua liderança, ele busca reviver o antigo império e conquistar a supremacia. Azir é um governante ambicioso e formidável, sempre empenhado em alcançar seus objetivos de dominação e restauração.",
build: "https://lolalytics.com/lol/azir/build/"},

    {
        ID: "122",
        campeao: "Kalista",
        data: "20 de novembro",
        ano: "2014",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ilhas das Sombras",
        lore: "Kalista é uma caçadora de almas vingativa que busca justiça e redenção após ser traída e assassinada. Com suas habilidades de controle de almas e seu desejo de vingança, ela enfrenta adversários e busca restaurar a justiça. Kalista é uma figura implacável e formidável, sempre empenhada em alcançar seus objetivos de vingança e justiça.",
        build: "https://lolalytics.com/lol/kalista/build/"
    },

    {
        ID: "123",
        campeao: "Rek'Sai",
        data: "11 de dezembro",
        ano: "2014",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Vazio",
        lore: "Rek'Sai é uma criatura do Vazio que busca devorar tudo e todos em seu caminho. Com suas habilidades de escavação e seu desejo de consumir, ela enfrenta adversários e ameaça o mundo subterrâneo. Rek'Sai é uma predadora implacável, sempre empenhada em expandir seu domínio e controlar o que resta de sua terra natal.",
build: "https://lolalytics.com/lol/reksai/build/"},

    {
        ID: "124",
        campeao: "Bardo",
        data: "12 de março",
        ano: "2015",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Runeterra (desconhecida)",
        lore: "Bardo é um guardião espiritual que busca proteger o equilíbrio e a harmonia do universo. Com suas habilidades de manipulação mágica e sua conexão com as forças cósmicas, ele enfrenta desafios e busca manter o equilíbrio em Runeterra. Bardo é uma figura enigmática e benevolente, sempre empenhado em garantir a ordem e a harmonia no mundo.",
        build: "https://lolalytics.com/lol/bardo/build/"
    },

    {
        ID: "125",
        campeao: "Ekko",
        data: "29 de março",
        ano: "2015",
        rotaPrimaria: "Selva",
        rotaSecundaria: "Meio",
        classeJogo: "Assassino",
        tipoDano: "Híbrido",
        regiaoOrigem: "Zaun",
        lore: "Ekko é um jovem prodígio de Zaun com a habilidade de manipular o tempo. Com sua invenção de uma máquina temporal e seu desejo de proteger sua cidade, ele enfrenta desafios e busca melhorar o futuro. Ekko é um personagem engenhoso e determinado, sempre empenhado em usar suas habilidades para fazer a diferença e enfrentar adversidades.",
        build: "https://lolalytics.com/lol/ekko/build/"
    },

    {
        ID: "126",
        campeao: "Tahm Kench",
        data: "9 de julho",
        ano: "2015",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Águas de Sentina",
        lore: "Tahm Kench é um demônio do Vazio que busca consumir e devorar tudo o que encontra. Conhecido por sua habilidade de engolir e corromper, ele utiliza seu poder para manipular e destruir aqueles ao seu redor. Tahm Kench é uma figura ameaçadora e sinistra, sempre empenhado em expandir seu domínio e controlar os que cruzam seu caminho.",
        build: "https://lolalytics.com/lol/tahmkench/build/"
    },

    {
        ID: "127",
        campeao: "Kindred",
        data: "14 de outubro",
        ano: "2015",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Runeterra (desconhecida)",
        lore: "Kindred é uma entidade que representa a morte e o destino, conhecida por sua habilidade em guiar e eliminar almas. Com a capacidade de se manifestar como um lobo e uma ovelha, ela busca manter o equilíbrio entre a vida e a morte. Kindred é uma figura enigmática e inevitável, sempre empenhada em cumprir seu papel no ciclo da vida e da morte.",
        build: "https://lolalytics.com/lol/kindred/build/"
    },

    {
        ID: "128",
        campeao: "Illaoi",
        data: "24 de novembro",
        ano: "2015",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Águas de Sentina",
        lore: "Illaoi é uma sacerdotisa de Nagakabouros, a deusa da tentação, que busca testar e desafiar a força e a coragem dos que encontram seu caminho. Com suas habilidades de manipulação de tentáculos e seu desejo de testar a fé e a determinação, ela enfrenta adversários e busca demonstrar o poder de sua deusa. Illaoi é uma figura poderosa e formidável, sempre empenhada em desafiar e testar os outros.",
        build: "https://lolalytics.com/lol/illaoi/build/"
    },

    {
        ID: "129",
        campeao: "Jhin",
        data: "1º de fevereiro",
        ano: "2016",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ionia",
        lore: "Jhin é um assassino meticuloso e psicopata, conhecido por sua habilidade em manipular e eliminar suas vítimas com precisão artística. Ele busca criar uma obra-prima de caos e morte, utilizando suas habilidades para aterrorizar e controlar aqueles ao seu redor. Jhin é uma figura enigmática e ameaçadora, sempre em busca de seu próximo trabalho perfeito.",
        build: "https://lolalytics.com/lol/jhin/build/"
    },

    {
        ID: "130",
        campeao: "Aurelion Sol",
        data: "24 de março",
        ano: "2016",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Monte Targon",
        lore: "Aurelion Sol é um dragão estelar que busca recuperar seu status e domínio sobre o cosmos. Com suas habilidades de manipulação das estrelas e seu desejo de retomar o controle do universo, ele enfrenta inimigos e desafios com poder e majestade. Aurelion Sol é uma entidade cósmica formidável e impressionante, sempre empenhado em reivindicar seu lugar no cosmos.",
        build: "https://lolalytics.com/lol/aurelionsol/build/"
    },

    {
        ID: "131",
        campeao: "Taliyah",
        data: "18 de maio",
        ano: "2016",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Shurima",
        lore: "Taliyah é uma jovem geomante de Shurima que usa suas habilidades para controlar a terra e proteger seu povo. Com sua conexão com a magia da terra e seu desejo de ajudar aqueles ao seu redor, ela enfrenta desafios e inimigos com coragem e determinação. Taliyah é uma defensora dedicada e uma lutadora habilidosa, sempre empenhada em garantir a segurança de sua terra natal.",
        build: "https://lolalytics.com/lol/taliyah/build/"
    },

    {
        ID: "132",
        campeao: "Kled",
        data: "10 de agosto",
        ano: "2016",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Selva",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Noxus",
        lore: "Kled é um yordle destemido de Freljord, conhecido por sua coragem e espírito indomável. Sempre acompanhado de seu fiel montado, Skaarl, Kled é um guerreiro apaixonado por batalhas e aventuras. Sua vida é marcada por sua luta constante contra os inimigos de seu povo e seu desejo de provar sua bravura, apesar de sua estatura pequena.",
        build: "https://lolalytics.com/lol/kled/build/"
    },

    {
        ID: "133",
        campeao: "Ivern",
        data: "5 de outubro",
        ano: "2016",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Suporte",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Ixtal",
        lore: "Ivern, o Senhor das Águas, é um espírito da floresta que busca proteger e preservar a vida em Runeterra. Com a capacidade de manipular a natureza e criar vida a partir do solo, ele se opõe a qualquer ameaça que possa desequilibrar o mundo natural. Ivern é um ser benevolente e cuidadoso, dedicado a manter a harmonia e a integridade do meio ambiente.",
        build: "https://lolalytics.com/lol/ivern/build/"
    },

    {
        ID: "134",
        campeao: "Camille",
        data: "7 de dezembro",
        ano: "2016",
        rotaPrimaria: "Topo",
        rotaSecundaria: "Selva",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Piltover",
        lore: "Camille é uma habilidosa espiã e assassina de Piltover, conhecida por sua precisão letal e suas habilidades com suas pernas prostéticas equipadas com lâminas afiadas. Ela busca proteger sua família e sua cidade, mas suas ações são frequentemente motivadas por um desejo de justiça e eficiência, desafiando os limites entre o bem e o mal.",
        build: "https://lolalytics.com/lol/camille/build/"
    },

    {
        ID: "135",
        campeao: "Rakan",
        data: "19 de abril",
        ano: "2017",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Suporte",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Ionia",
        lore: "Rakan é um exuberante e encantador yordle de Ionia, conhecido por seu carisma e habilidades de dança e encanto. Juntamente com sua parceira Xayah, ele luta para proteger sua terra natal e defender seus ideais. Rakan é um lutador alegre e otimista, sempre buscando espalhar alegria e inspirar os outros com sua presença vibrante.",
build: "https://lolalytics.com/lol/rakan/build/"},

    {
        ID: "136",
        campeao: "Xayah",
        data: "19 de abril",
        ano: "2017",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ionia",
        lore: "Xayah é uma astuta e determinada yordle de Ionia, que luta ao lado de seu companheiro Rakan. Ela é conhecida por sua habilidade com suas lâminas afiadas e seu desejo de restaurar a honra e a segurança de sua terra natal. Xayah é uma guerreira resoluta e estratégica, sempre empenhada em proteger seu povo e enfrentar as ameaças que surgem.",
        build: "https://lolalytics.com/lol/xayah/build/"
    },

    {
        ID: "137",
        campeao: "Kayn",
        data: "12 de julho",
        ano: "2017",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Híbrido",
        regiaoOrigem: "Ionia",
        lore: "Kayn é um jovem assassino de Ionia que busca se tornar o ser mais poderoso do mundo. Dividido entre a sua forma humana e a de um demônio da sombra, ele enfrenta um conflito interno enquanto tenta dominar o poder sombrio que possui. Kayn é um combatente ágil e implacável, sempre buscando se superar e alcançar seus objetivos de poder e controle.",
        build: "https://lolalytics.com/lol/kayn/build/"
    },

    {
        ID: "138",
        campeao: "Ornn",
        data: "23 de agosto",
        ano: "2017",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Freljord",
        lore: "Ornn é um deus ferreiro de Freljord, conhecido por sua habilidade em criar armas e armaduras lendárias. Ele busca manter o equilíbrio e a ordem em sua terra natal, enfrentando as ameaças que surgem com sua força e habilidade incomparáveis. Ornn é um personagem robusto e sábio, sempre empenhado em proteger seu lar e garantir a continuidade de suas tradições.",
        build: "https://lolalytics.com/lol/ornn/build/"
    },

    {
        ID: "139",
        campeao: "Zoe",
        data: "21 de novembro",
        ano: "2017",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Monte Targon",
        lore: "Zoe é uma jovem e brincalhona deusa do caos e da curiosidade. Com suas habilidades de manipulação do tempo e espaço, ela se diverte causando confusão e desordem. Apesar de sua natureza travessa, Zoe busca entender o mundo ao seu redor e explorar as possibilidades do universo com uma perspectiva única e encantadora.",
        build: "https://lolalytics.com/lol/zoe/build/"
    },

    {
        ID: "140",
        campeao: "Kai'Sa",
        data: "7 de março",
        ano: "2018",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Vazio",
        lore: "Kai'Sa é uma sobrevivente do Vazio que busca proteger o mundo das ameaças que ela mesma enfrentou. Com a habilidade de se adaptar e evoluir, ela utiliza suas habilidades para enfrentar o mal e proteger os inocentes. Kai'Sa é uma guerreira resiliente e determinada, sempre empenhada em usar seus poderes para o bem e garantir a segurança de Runeterra.",
        build: "https://lolalytics.com/lol/kaisa/build/"
    },

    {
        ID: "141",
        campeao: "Pyke",
        data: "31 de maio",
        ano: "2018",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Águas de Sentina",
        lore: "Pyke é um assassino vingativo que busca justiça após ser traído e abandonado por sua própria gente. Com suas habilidades de combate ágil e sua determinação em eliminar aqueles que lhe fizeram mal, ele enfrenta inimigos com precisão letal. Pyke é um personagem sombrio e impiedoso, sempre empenhado em alcançar sua vingança e garantir que aqueles que o prejudicaram sofram as consequências.",
        build: "https://lolalytics.com/lol/pyke/build/"
    },

    {
        ID: "142",
        campeao: "Neeko",
        data: "5 de dezembro",
        ano: "2018",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Ixtal",
        lore: "Neeko é uma yordle mágica que busca descobrir seu verdadeiro propósito e proteger a floresta que considera sua casa. Com suas habilidades de manipulação da natureza e magia, ela é uma aliada leal e uma defensora do equilíbrio ecológico. Neeko é uma figura enérgica e curiosa, sempre empenhada em ajudar os outros e explorar os mistérios do mundo.",
        build: "https://lolalytics.com/lol/neeko/build/"
    },

    {
        ID: "143",
        campeao: "Sylas",
        data: "25 de janeiro",
        ano: "2019",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Demacia",
        lore: "Sylas é um ex-mago de Demacia que busca vingança após ter sido traído e aprisionado por seus próprios compatriotas. Com suas habilidades de roubar e usar a magia dos outros, ele luta para derrubar o sistema que o destruiu e criar um novo mundo onde ele possa se vingar e alcançar seus objetivos. Sylas é um revolucionário determinado e impiedoso, sempre empenhado em alterar a ordem estabelecida.",
        build: "https://lolalytics.com/lol/sylas/build/"
    },

    {
        ID: "144",
        campeao: "Yuumi",
        data: "14 de maio",
        ano: "2019",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Bandle City",
        lore: "Yuumi é uma gata mágica que busca encontrar seu antigo mestre e proteger aqueles ao seu redor com suas habilidades encantadoras. Com sua capacidade de se teleportar e usar magia para curar e proteger, Yuumi é uma aliada leal e uma figura carismática. Ela é conhecida por sua personalidade afetuosa e sua dedicação em ajudar seus amigos e colegas.",
        build: "https://lolalytics.com/lol/yuumi/build/"
    },

    {
        ID: "145",
        campeao: "Qiyana",
        data: "28 de junho",
        ano: "2019",
        rotaPrimaria: "Meio",
        rotaSecundaria: "Selva",
        classeJogo: "Assassino",
        tipoDano: "Híbrido",
        regiaoOrigem: "Ixtal",
        lore: "Qiyana é uma poderosa geomante de Ixtal, conhecida por sua habilidade em manipular os elementos e sua ambição de dominar seu reino. Com um desejo de se tornar a líder suprema e expandir seu poder, ela enfrenta desafios e adversários com confiança e destreza. Qiyana é uma lutadora formidável e uma estrategista astuta, sempre empenhada em alcançar seus objetivos de poder e controle.",
        build: "https://lolalytics.com/lol/qiyana/build/"
    },

    {
        ID: "146",
        campeao: "Senna",
        data: "10 de novembro",
        ano: "2019",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Demacia",
        lore: "Senna é uma caçadora de almas e a esposa de Lucian, conhecida por sua habilidade em combater forças das trevas e seu desejo de proteger os inocentes. Após sua morte e retorno dos mortos, ela busca redimir sua própria alma e enfrentar os espectros que ameaçam o mundo. Senna é uma defensora determinada e corajosa, sempre empenhada em lutar pela justiça e pela segurança de sua terra natal.",
        build: "https://lolalytics.com/lol/senna/build/"
    },

    {
        ID: "147",
        campeao: "Aphelios",
        data: "11 de dezembro",
        ano: "2019",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Monte Targon",
        lore: "Aphelios é um caçador e guerreiro que serve a uma ordem secreta e usa armas sagradas para enfrentar as trevas. Com sua habilidade em controlar várias armas e seu desejo de cumprir sua missão, ele busca erradicar o mal e proteger o mundo das forças que ameaçam a paz.Aphelios é um combatente enigmático e dedicado, sempre empenhado em cumprir seus deveres sagrados.",
build: "https://lolalytics.com/lol/aphelios/build/"},

    {
        ID: "148",
        campeao: "Sett",
        data: "14 de janeiro",
        ano: "2020",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ionia",
        lore: "Sett é um lutador e chefe de gangue de Ionia, conhecido por sua força bruta e habilidades de combate. Com uma atitude dominante e uma busca por poder, ele enfrenta adversários e rivalidades com confiança e crueldade. Sett é um personagem robusto e imponente, sempre empenhado em consolidar sua influência e garantir seu lugar no mundo.",
        build: "https://lolalytics.com/lol/sett/build/"
    },

    {
        ID: "149",
        campeao: "Lillia",
        data: "22 de julho",
        ano: "2020",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Híbrido",
        regiaoOrigem: "Ionia",
        lore: "Lillia é uma fauninha da floresta de Ionia que busca proteger seu lar e restaurar a paz no mundo natural. Com suas habilidades de manipulação dos sonhos e do sono, ela enfrenta ameaças e luta para preservar a beleza e a tranquilidade de sua terra natal.Lillia é uma defensora gentil e sonhadora, sempre empenhada em manter o equilíbrio e a harmonia no ambiente ao seu redor.",
build: "https://lolalytics.com/lol/lillia/build/"},

    {
        ID: "150",
        campeao: "Yone",
        data: "6 de agosto",
        ano: "2020",
        rotaPrimaria: "Meio",
        rotaSecundaria: "Topo",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ionia",
        lore: "Yone é um espadachim de Ionia que retornou do além após ser assassinado por seu próprio irmão, Yasuo. Com suas habilidades de combate e uma busca por redenção, ele enfrenta inimigos e tenta reconciliar seu passado com seu presente.Yone é um guerreiro complexo e determinado, sempre empenhado em encontrar seu propósito e corrigir os erros do passado.",
build: "https://lolalytics.com/lol/yone/build/"},

    {
        ID: "151",
        campeao: "Samira",
        data: "21 de setembro",
        ano: "2020",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Noxus",
        lore: "Samira é uma combatente audaciosa e destemida de Noxus, conhecida por seu estilo de luta extravagante e suas habilidades acrobáticas. Com uma busca por desafios e uma paixão por combater, ela enfrenta inimigos com confiança e habilidade, sempre em busca de emoções e vitória. Samira é uma figura carismática e enérgica, sempre empenhada em demonstrar seu valor e conquistar seus objetivos.",
        build: "https://lolalytics.com/lol/samira/build/"
    },

    {
        ID: "152",
        campeao: "Seraphine",
        data: "29 de outubro",
        ano: "2020",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "Meio",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Piltover",
        lore: "Seraphine é uma cantora e artista de Piltover que usa sua música para inspirar e curar aqueles ao seu redor. Com suas habilidades mágicas baseadas no som e seu desejo de unir as pessoas através da música, ela enfrenta desafios e busca fazer a diferença no mundo.Seraphine é uma figura otimista e criativa, sempre empenhada em espalhar alegria e positividade através de seu talento.",
build: "https://lolalytics.com/lol/seraphine/build/"},

    {
        ID: "153",
        campeao: "Rell",
        data: "10 de dezembro",
        ano: "2020",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Tanque",
        tipoDano: "Híbrido",
        regiaoOrigem: "Noxus",
        lore: "Rell é uma guerreira de Noxus que usa sua força e habilidades de controle magnético para proteger aqueles ao seu redor. Com um desejo de justiça e uma luta contra as forças do mal, ela enfrenta adversários com determinação e coragem. Rell é uma defensora robusta e valente, sempre empenhada em garantir a segurança e a justiça para os outros.",
        build: "https://lolalytics.com/lol/rell/build/"
    },

    {
        ID: "154",
        campeao: "Viego",
        data: "10 de dezembro",
        ano: "2021",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ilhas das Sombras",
        lore: "Viego é um rei caído de Camavor que busca restaurar seu reino e reviver seu amor perdido. Com suas habilidades de manipulação e um desejo de vingança e redenção, ele enfrenta inimigos e busca recuperar o que perdeu. Viego é um personagem sombrio e implacável, sempre empenhado em alcançar seus objetivos de poder e restaurar seu império.",
        build: "https://lolalytics.com/lol/viego/build/"
    },

    {
        ID: "155",
        campeao: "Gwen",
        data: "15 de abril",
        ano: "2021",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Ilhas das Sombras",
        lore: "Gwen é uma boneca mágica que ganhou vida e busca encontrar seu lugar no mundo após ter sido criada por um antigo mago. Com habilidades de costura e um desejo de proteger e ajudar os outros, ela enfrenta adversários e busca encontrar seu propósito. Gwen é uma figura gentil e corajosa, sempre empenhada em usar suas habilidades para o bem e garantir a segurança dos outros.",
        build: "https://lolalytics.com/lol/gwen/build/"
    },

    {
        ID: "156",
        campeao: "Akshan",
        data: "22 de julho",
        ano: "2021",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Shurima",
        lore: "Akshan é um vigilante de Shurima que busca justiça após ter perdido seu mentor e enfrentar forças corruptas. Com suas habilidades de combate e seu desejo de erradicar o mal, ele luta para proteger os inocentes e restaurar a justiça. Akshan é um personagem determinado e valente, sempre empenhado em cumprir sua missão e enfrentar os desafios que surgem.",
        build: "https://lolalytics.com/lol/akshan/build/"
    },

    {
        ID: "157",
        campeao: "Vex",
        data: "23 de setembro",
        ano: "2021",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Bandle City",
        lore: "Vex é uma jovem e sombria yordle que busca espalhar o desânimo e a tristeza por onde passa. Com suas habilidades de manipulação das sombras e um desejo de combater a felicidade, ela enfrenta adversários com sua personalidade melancólica e seu estilo de combate peculiar. Vex é uma figura intrigante e complexa, sempre empenhada em encontrar seu propósito e enfrentar os desafios ao seu redor.",
        build: "https://lolalytics.com/lol/vex/build/"
    },

    {
        ID: "158",
        campeao: "Zeri",
        data: "20 de janeiro",
        ano: "2022",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Zaun",
        lore: "Zeri é uma jovem de Zaun com habilidades elétricas que busca proteger sua cidade e combater a opressão. Com suas habilidades de manipulação da eletricidade e um desejo de justiça, ela enfrenta adversários e tenta criar um futuro melhor para seu povo. Zeri é uma combatente dinâmica e determinada, sempre empenhada em usar suas habilidades para o bem e garantir a liberdade para todos.",
        build: "https://lolalytics.com/lol/zeri/build/"
    },

    {
        ID: "159",
        campeao: "Renata Glasc",
        data: "17 de fevereiro",
        ano: "2022",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Zaun",
        lore: "Renata Glasc é uma empresária de Zaun que usa suas habilidades de química e manipulação para expandir seu império e alcançar seus objetivos. Com um desejo de poder e controle, ela enfrenta adversários e usa sua inteligência e recursos para garantir sua posição dominante. Renata Glasc é uma figura astuta e implacável, sempre empenhada em alcançar suas ambições e proteger seus interesses.",
        build: "https://lolalytics.com/lol/renataglasc/build/"
    },

    {
        ID: "160",
        campeao: "Bel'Veth",
        data: "9 de junho",
        ano: "2022",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Vazio",
        lore: "Bel'Veth é uma entidade do Vazio que busca devorar e destruir tudo em seu caminho. Com suas habilidades de manipulação e seu desejo de consumir, ela enfrenta adversários e ameaça o mundo com sua presença ameaçadora. Bel'Veth é uma criatura poderosa e destrutiva, sempre empenhada em expandir seu domínio e alcançar seus objetivos de destruição.",
        build: "https://lolalytics.com/lol/belveth/build/"
    },

    {
        ID: "161",
        campeao: "Nilah",
        data: "13 de julho",
        ano: "2022",
        rotaPrimaria: "Atirador",
        rotaSecundaria: "-",
        classeJogo: "Atirador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Águas de Sentina",
        lore: "Nilah é uma guerreira que busca enfrentar o caos e a destruição em seu mundo. Com suas habilidades de combate e um desejo de proteger aqueles ao seu redor, ela enfrenta inimigos com coragem e determinação. Nilah é uma defensora destemida e determinada, sempre empenhada em lutar contra as forças do mal e garantir a segurança dos outros.",
build: "https://lolalytics.com/lol/nilah/build/"},

    {
        ID: "162",
        campeao: "K'Sante",
        data: "3 de novembro",
        ano: "2022",
        rotaPrimaria: "Selva",
        rotaSecundaria: "Topo",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Shurima",
        lore: "K'Sante é um guerreiro de Shurima que busca restaurar sua honra e proteger sua terra natal. Com suas habilidades de combate e um desejo de manter a paz e a ordem, ele enfrenta adversários e luta para garantir a segurança e a estabilidade de seu reino. K'Sante é um lutador dedicado e corajoso, sempre empenhado em cumprir seu dever e proteger seu povo.",
        build: "https://lolalytics.com/lol/ksante/build/"
    },

    {
        ID: "163",
        campeao: "Milio",
        data: "23 de março",
        ano: "2023",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Suporte",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Ixtal",
        lore: "Milio é um jovem curandeiro de Ixtal que usa suas habilidades de cura e magia para ajudar os outros e proteger sua terra natal. Com um desejo de trazer alívio e segurança, ele enfrenta desafios e luta para garantir o bem-estar de sua comunidade. Milio é um personagem gentil e empático, sempre empenhado em usar suas habilidades para o bem e promover a paz.",
        build: "https://lolalytics.com/lol/milio/build/"
    },

    {
        ID: "164",
        campeao: "Naafiri",
        data: "19 de julho",
        ano: "2023",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Assassino",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Shurima",
        lore: "Naafiri é uma entidade do Vazio que busca consumir e dominar tudo ao seu redor. Com suas habilidades de manipulação e seu desejo de espalhar o caos, ela enfrenta adversários e ameaça o mundo com sua presença destrutiva. Naafiri é uma criatura sinistra e implacável, sempre empenhada em alcançar seus objetivos de expansão e controle.",
        build: "https://lolalytics.com/lol/naafiri/build/"
    },

    {
        ID: "165",
        campeao: "Briar",
        data: "13 de setembro",
        ano: "2023",
        rotaPrimaria: "Selva",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Noxus",
        lore: "Briar é uma guerreira feroz e destemida que busca enfrentar seus inimigos e proteger aqueles ao seu redor. Com suas habilidades de combate e um desejo de justiça, ela enfrenta adversários com coragem e determinação. Briar é uma lutadora robusta e valente, sempre empenhada em garantir a segurança e o bem-estar de seu povo.",
        build: "https://lolalytics.com/lol/briar/build/"
    },

    {
        ID: "166",
        campeao: "Hwei",
        data: "21 de novembro",
        ano: "2023",
        rotaPrimaria: "Suporte",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Runeterra (desconhecida)",
        lore: "Hwei é um misterioso ser com habilidades mágicas que busca entender seu propósito e proteger seu lar. Com uma conexão profunda com as forças místicas, ele enfrenta desafios e explora os mistérios do mundo. Hwei é uma figura enigmática e sábia, sempre empenhada em descobrir seu verdadeiro destino e garantir a segurança de seu ambiente.",
        build: "https://lolalytics.com/lol/hwei/build/"
    },

    {
        ID: "167",
        campeao: "Smolder",
        data: "23 de janeiro",
        ano: "2024",
        rotaPrimaria: "Topo",
        rotaSecundaria: "-",
        classeJogo: "Lutador",
        tipoDano: "Físico (AD)",
        regiaoOrigem: "Runeterra (desconhecida)",
        lore: "Smolder é uma figura enigmática e poderosa, conhecida por suas habilidades relacionadas ao fogo e à destruição. Com um desejo de espalhar o caos e desafiar os inimigos, ele enfrenta adversários com uma presença intimidante e uma força formidável. Smolder é um personagem ameaçador e imponente, sempre empenhado em alcançar seus objetivos e causar impacto.",
        build: "https://lolalytics.com/lol/smolder/build/"
    },

    {
        ID: "168",
        campeao: "Aurora",
        data: "26 de junho",
        ano: "2024",
        rotaPrimaria: "Meio",
        rotaSecundaria: "-",
        classeJogo: "Mago",
        tipoDano: "Mágico (AP)",
        regiaoOrigem: "Runeterra (desconhecida)",
        lore: "Aurora é uma guardiã mística que busca proteger a ordem e a harmonia do mundo. Com suas habilidades de manipulação da luz e seu desejo de preservar o equilíbrio, ela enfrenta ameaças e luta para garantir a segurança e a paz. Aurora é uma figura luminosa e benevolente, sempre empenhada em manter a ordem e ajudar aqueles ao seu redor.",
        build: "https://lolalytics.com/lol/aurora/build/"
    }

]