import {peopleList} from '@/data/peopleList';


const Page=()=>{ 
  
  const filtro = peopleList.filter(pessoa => pessoa.profissao ==='bancaria');
  
  return(
    <div>
      {filtro.length >0 &&
      <ul>
           <h3>Lista de Bancarios</h3>
           {filtro.map(pessoa => <li key={pessoa.id}>{pessoa.nome}</li>)}
           </ul>
          }
    </div>
  );
}

export default Page;