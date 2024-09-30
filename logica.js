function goToMovie(movieId) {
    window.location.href = `detalhes.html?id=${movieId}`;
} //ESSA FUNÇÃO FICA RESPONSÁVEL POR PEGAR O ID DO FILME EM QUESTÃO E ANEXAR JUNTO COM A PÁGINA DE DESEJO QUE É DETALHES
//QUANDO JÁ HÁ O ID, A PÁGINA DE DETALHES ENTÃO É CARREGADA PELA FUNÇÃO ABAIXO COM O ID PASSADO COMO PARÂMETRO, E OS DADOS DE INTERESSE SÃO CARREGADODS NELA
window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');
    
    if (movieId) {
        const movies = {
            'filme1': {
                title: 'Matrix',
                poster: './matrix.png',
                synopsis: 'Em um futuro próximo, Thomas Anderson (Keanu Reeves), um jovem programador de computador que mora em um cubículo escuro, é atormentado por estranhos pesadelos nos quais encontra-se conectado por cabos e contra sua vontade, em um imenso sistema de computadores do futuro. Em todas essas ocasiões, acorda gritando no exato momento em que os eletrodos estão para penetrar em seu cérebro. À medida que o sonho se repete, Anderson começa a ter dúvidas sobre a realidade. Por meio do encontro com os misteriosos Morpheus (Laurence Fishburne) e Trinity (Carrie-Anne Moss), Thomas descobre que é, assim como outras pessoas, vítima do Matrix, um sistema inteligente e artificial que manipula a mente das pessoas, criando a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia. Morpheus, entretanto, está convencido de que Thomas é Neo, o aguardado messias capaz de enfrentar o Matrix e conduzir as pessoas de volta à realidade e à liberdade.',
                ratings: { story: 8, photography: 9, acting: 8.5 }
            },
            'filme2': {
                title: 'Interestellar',
                poster: './Interestellar.jpg',
                synopsis: 'Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta.',
                ratings: { story: 8.5, photography: 9, acting: 8 }
            },
            'filme3': {
                title: 'Pulp Fiction',
                poster: './pulp.jpg',
                synopsis: 'Vincent Vega (John Travolta) e Jules Winnfield (Samuel L. Jackson) são dois assassinos profissionais trabalham fazendo cobranças para Marsellus Wallace (Ving Rhames), um poderosos gângster. Vega é forçado a sair com a garota do chefe, temendo passar dos limites; enquanto isso, o pugilista Butch Coolidge (Bruce Willis) se mete em apuros por ganhar luta que deveria perder.',
                ratings: { story: 8.5, photography: 7.5, acting: 9.5 }
            },
            'filme4': {
                title: 'Cidade de Deus',
                poster: './cdD.png',
                synopsis: 'Dadinho (Douglas Silva) e Buscapé são grandes amigos, que cresceram juntos imersos em um universo de muita violência. Na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio de Janeiro, os caminhos das duas crianças divergem, quando um se esforça para se tornar um fotógrafo e o outro o chefe do tráfico. Buscapé (Alexandre Rodrigues) é um jovem pobre, negro e muito sensível, que vive amedrontado com a possibilidade de se tornar um bandido, e acaba sendo salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É através de seu olhar atrás da câmera que Buscapé analisa o dia-a-dia da favela onde vive, enquanto Dadinho, agora Zé Pequeno (Leandro Firmino), se torna o temido chefe do tráfico da região, continuando com o legado de violência que remonta a décadas anteriores - e parece ser infinita. Considerado um dos melhores filmes da história do cinema brasileiro.',
                ratings: { story: 8.0, photography: 8, acting: 9.0 }
            },
            'filme5': {
                title: 'Laranja mecânica',
                poster: './orange.jpg',
                synopsis: 'No futuro, o violento Alex (Malcolm McDowell), líder de uma gangue de delinquentes que matam, roubam e estupram, cai nas mãos da polícia. Preso, ele recebe a opção de participar em um programa que pode reduzir o seu tempo na cadeia. Alex vira cobaia de experimentos destinados a refrear os impulsos destrutivos do ser humano, mas acaba se tornando impotente para lidar com a violência que o cerca.',
                ratings: { story: 7.5, photography: 7.0, acting: 9.0 }
            },
            'filme6': {
                title: 'Blade runner 2049',
                poster: './blade.jpg',
                synopsis: 'Em Blade Runner 2049, após os problemas enfrentados com os Nexus 8, uma nova espécie de replicantes é desenvolvida, de forma que seja mais obediente aos humanos. Um deles é K (Ryan Gosling), um blade runner que caça replicantes foragidos para a polícia de Los Angeles. Após encontrar Sapper Morton (Dave Bautista), K descobre um fascinante segredo: a replicante Rachel (Sean Young) teve um filho, mantido em sigilo até então. A possibilidade de que replicantes se reproduzam pode desencadear uma guerra deles com os humanos, o que faz com que a tenente Joshi (Robin Wright), chefe de K, o envie para encontrar e eliminar a criança.',
                ratings: { story: 9.0, photography: 9.0, acting: 9.0 }
            },
            'filme7': {
                title: 'Batman: begins',
                poster: './batman.jpg',
                synopsis: 'Marcado pelo assassinato de seus pais quando ainda era criança, o milionário Bruce Wayne (Christian Bale) decide viajar pelo mundo em busca de encontrar meios que lhe permitam combater a injustiça e provocar medo em seus adversários. Após retornar a Gotham City, sua cidade-natal, ele idealiza seu alter-ego: Batman, um justiceiro mascarado que usa força, inteligência e um arsenal tecnológico para combater o crime.',
                ratings: { story: 8.5, photography: 8, acting: 8.5 }
            },
            'filme8': {
                title: '2001: uma odisséia no espaço',
                poster: './2001.jpg',
                synopsis: 'Desde a "Aurora do Homem" (a pré-história), um misterioso monolito negro parece emitir sinais de outra civilização interferindo no nosso planeta. Quatro milhões de anos depois, no século XXI, uma equipe de astronautas liderados pelo experiente David Bowman (Keir Dullea) e Frank Poole (Gary Lockwood) é enviada à Júpiter para investigar o enigmático monolito na nave Discovery, totalmente controlada pelo computador HAL 9000. Entretanto, no meio da viagem HAL entra em pane e tenta assumir o controle da nave, eliminando um a um os tripulantes.',
                ratings: { story: 8.0, photography: 9.0, acting: 8.5 }
            }
        };
        
        const movie = movies[movieId];
        //ESSA PARTE PEGA AS INFORMAÇÕES DOS OBJETOS E DISPÕE NA TELA
        if (movie) {
            document.getElementById('movie-title').textContent = movie.title;
            document.getElementById('movie-poster').src = movie.poster;
            document.getElementById('synopsis').textContent = movie.synopsis;
            document.getElementById('story-rating').textContent = movie.ratings.story;
            document.getElementById('photography-rating').textContent = movie.ratings.photography;
            document.getElementById('acting-rating').textContent = movie.ratings.acting;
        }
    }
    


};


