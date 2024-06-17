import {peopleList} from '@/data/peopleList';


const Page=()=>{ 
  
 
  
  return(
    <div>
      {peopleList.length >0 &&
      <ul>
           {peopleList.map(pessoa => <li key={pessoa.id}>{pessoa.nome}-{pessoa.profissao}</li>)}
           </ul>
          }
    </div>
  );
}

export default Page;