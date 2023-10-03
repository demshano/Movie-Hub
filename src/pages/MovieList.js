import { UseFetch } from "../hooks/UseFetch";
import { useTitle } from "../hooks/useTitle";
import { Card } from "../components/Card";
export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = UseFetch(apiPath);
  useTitle(`${title}`);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly ">
          {movies.map((e) => (
            <Card key={e.id} movie={e} />
          ))}
        </div>
      </section>
    </main>
  );
};
