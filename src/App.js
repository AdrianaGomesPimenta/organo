import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4 (),
      nome: 'Advogado Trabalhista',
      cor: '#57C278'
    },
    {
      id: uuidv4 (),
      nome: 'Advogado Criminal',
      cor: '#82CFFA'
    },
    {
      id: uuidv4 (),
      nome: 'Advogado Civil',
      cor: '#A6D157'
    },
    {
      id: uuidv4 (),
      nome: 'Advogado Empresarial',
      cor: '#E06B69'
    },
    {
      id: uuidv4 (),
      nome: 'Advogado Tributário',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4 (),
      nome: 'Advogado Previdenciário',
      cor: '#FFBA05'
    },
    {
      id: uuidv4 (),
      nome: 'Advogado de Família e Sucessões',
      cor: '#FF8A29'
    },
    {
      id: uuidv4 (),
      nome: 'Advogado Imobiliário',
      cor: '#57C278'
    },
    {
      id: uuidv4 (),
      nome: 'Advogado Imobiliário',
      cor: '#82CFFA'
    },
    {
      id: uuidv4 (),
      nome: 'Advogado Ambiental',
      cor: '#A6D157'
    },
    {
      id: uuidv4 (),
      nome: 'Advogado Administrativo',
      cor: '#E06B69'
    },
    {
      id: uuidv4 (),
      nome: 'Advogado Consumerista',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4 (),
      nome: 'Advogado Constitucional',
      cor: '#FFBA05'
    }
  ])

  const inicial = [
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'JULIANA',
      cargo: 'Advogado Trabalhista',
      imagem: 'https://framerusercontent.com/images/HvaoJ9qTHCtnW1SEelLo2ssRuE.webp',
      time: times[0].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'DANIEL',
      cargo: 'Advogado Trabalhista',
      imagem: 'https://media.licdn.com/dms/image/v2/D4D22AQHAU0--I3YqbA/feedshare-shrink_800/feedshare-shrink_800/0/1732901356352?e=2147483647&v=beta&t=3VdeZRtWL9OX7sFV-oZKgO5bwkv4OJGUCg_MWN9GlAE',
      time: times[0].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'GUILHERME',
      cargo: 'Advogado Trabalhista',
      imagem: '	https://framerusercontent.com/images/23Y3Ud5oGJihytX4eWG5zckWHeQ.png',
      time: times[0].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'PAULO',
      cargo: 'Advogado Trabalhista',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPtxUOEcsUbZnW2Tn1FSE_J_sGJJnoNH63Ae1mKx4z7pzHM535OdmhqRKZLjeCC-xC5A&usqp=CAU',
      time: times[0].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'JULIANA',
      cargo: 'Advogado Criminal',
      imagem: 'https://framerusercontent.com/images/HvaoJ9qTHCtnW1SEelLo2ssRuE.webp',
      time: times[1].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'DANIEL',
      cargo: 'Advogado Criminal',
      imagem: 'https://media.licdn.com/dms/image/v2/D4D22AQHAU0--I3YqbA/feedshare-shrink_800/feedshare-shrink_800/0/1732901356352?e=2147483647&v=beta&t=3VdeZRtWL9OX7sFV-oZKgO5bwkv4OJGUCg_MWN9GlAE',
      time: times[1].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'GUILHERME',
      cargo: 'Advogado Criminal',
      imagem: '	https://framerusercontent.com/images/23Y3Ud5oGJihytX4eWG5zckWHeQ.png',
      time: times[1].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'PAULO',
      cargo: 'Advogado Criminal',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPtxUOEcsUbZnW2Tn1FSE_J_sGJJnoNH63Ae1mKx4z7pzHM535OdmhqRKZLjeCC-xC5A&usqp=CAU',
      time: times[1].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'JULIANA',
      cargo: 'Advogado Civil',
      imagem: 'https://framerusercontent.com/images/HvaoJ9qTHCtnW1SEelLo2ssRuE.webp',
      time: times[2].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'DANIEL',
      cargo: 'Advogado Civil',
      imagem: 'https://media.licdn.com/dms/image/v2/D4D22AQHAU0--I3YqbA/feedshare-shrink_800/feedshare-shrink_800/0/1732901356352?e=2147483647&v=beta&t=3VdeZRtWL9OX7sFV-oZKgO5bwkv4OJGUCg_MWN9GlAE',
      time: times[2].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'GUILHERME',
      cargo: 'Advogado Civil',
      imagem: '	https://framerusercontent.com/images/23Y3Ud5oGJihytX4eWG5zckWHeQ.png',
      time: times[2].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'PAULO',
      cargo: 'Advogado Civil',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPtxUOEcsUbZnW2Tn1FSE_J_sGJJnoNH63Ae1mKx4z7pzHM535OdmhqRKZLjeCC-xC5A&usqp=CAU',
      time: times[2].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'JULIANA',
      cargo: 'Advogado Empresarial',
      imagem: 'https://framerusercontent.com/images/HvaoJ9qTHCtnW1SEelLo2ssRuE.webp',
      time: times[3].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'DANIEL',
      cargo: 'Advogado Empresarial',
      imagem: 'https://media.licdn.com/dms/image/v2/D4D22AQHAU0--I3YqbA/feedshare-shrink_800/feedshare-shrink_800/0/1732901356352?e=2147483647&v=beta&t=3VdeZRtWL9OX7sFV-oZKgO5bwkv4OJGUCg_MWN9GlAE',
      time: times[3].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'GUILHERME',
      cargo: 'Advogado Empresarial',
      imagem: '	https://framerusercontent.com/images/23Y3Ud5oGJihytX4eWG5zckWHeQ.png',
      time: times[3].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'PAULO',
      cargo: 'Advogado Empresarial',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPtxUOEcsUbZnW2Tn1FSE_J_sGJJnoNH63Ae1mKx4z7pzHM535OdmhqRKZLjeCC-xC5A&usqp=CAU',
      time: times[3].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'JULIANA',
      cargo: 'Advogado Tributário',
      imagem: 'https://framerusercontent.com/images/HvaoJ9qTHCtnW1SEelLo2ssRuE.webp',
      time: times[4].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'DANIEL',
      cargo: 'Advogado Tributário',
      imagem: 'https://media.licdn.com/dms/image/v2/D4D22AQHAU0--I3YqbA/feedshare-shrink_800/feedshare-shrink_800/0/1732901356352?e=2147483647&v=beta&t=3VdeZRtWL9OX7sFV-oZKgO5bwkv4OJGUCg_MWN9GlAE',
      time: times[4].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'GUILHERME',
      cargo: 'Advogado Tributário',
      imagem: '	https://framerusercontent.com/images/23Y3Ud5oGJihytX4eWG5zckWHeQ.png',
      time: times[4].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'PAULO',
      cargo: 'Advogado Tributário',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPtxUOEcsUbZnW2Tn1FSE_J_sGJJnoNH63Ae1mKx4z7pzHM535OdmhqRKZLjeCC-xC5A&usqp=CAU',
      time: times[4].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'JULIANA',
      cargo: 'Advogado Previdenciário',
      imagem: 'https://framerusercontent.com/images/HvaoJ9qTHCtnW1SEelLo2ssRuE.webp',
      time: times[5].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'DANIEL',
      cargo: 'Advogado Previdenciário',
      imagem: 'https://media.licdn.com/dms/image/v2/D4D22AQHAU0--I3YqbA/feedshare-shrink_800/feedshare-shrink_800/0/1732901356352?e=2147483647&v=beta&t=3VdeZRtWL9OX7sFV-oZKgO5bwkv4OJGUCg_MWN9GlAE',
      time: times[5].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'GUILHERME',
      cargo: 'Advogado Previdenciário',
      imagem: '	https://framerusercontent.com/images/23Y3Ud5oGJihytX4eWG5zckWHeQ.png',
      time: times[5].nome
    },
    {
      id: uuidv4 (),
      favorito:false,
      nome: 'PAULO',
      cargo: 'Advogado Previdenciário',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPtxUOEcsUbZnW2Tn1FSE_J_sGJJnoNH63Ae1mKx4z7pzHM535OdmhqRKZLjeCC-xC5A&usqp=CAU',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime (cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime) {
    setTimes([ ...times, { ...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }
  
  return (
    <div>
      <Banner />
      <Formulario 
      cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => 
          <Time 
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime }
            key={indice} 
            time={time} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
            aoDeletar={deletarColaborador}
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
