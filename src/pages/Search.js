import { useSearchParams } from 'react-router-dom';
import { UseFetch } from '../hooks/UseFetch';
import { useTitle } from '../hooks/useTitle';
import { Card } from '../components/Card';

 

export const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");

  const { data: movies } = UseFetch(apiPath, queryTerm);
  useTitle(`Search result for ${queryTerm}`);



  return (
    <main>

<section className='py-7'>
  <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `no results found for '${queryTerm}' ` : `result for '${queryTerm}'` }</p>
</section>

    <section className='max-w-7xl mx-auto py-7'>

        <div className="flex justify-start flex-wrap other:justify-evenly">

            {movies.map((e) =>(
                <Card key={e.id} movie={e}/>
            
            ))}

            
          </div>

    </section>

</main>
  )
}
