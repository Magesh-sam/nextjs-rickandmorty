import { Card } from "./components/Card";

export interface ICharacter{
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ICharacterData{
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: ICharacter[];
}

export default async function Home() {
  const res = await fetch('https://rickandmortyapi.com/api/character?page=1');
  const data:ICharacterData = await res.json();


  return (
    <>
      <main className="min-h-screen min-w-screen">
            <div className="  grid grid-cols-1  mx-auto gap-5 lg:grid-cols-2 xl:grid-cols-3 ">
              {data.results.map((character:ICharacter) => (
                <Card key={character.id} character={character} />
              ))}
            </div>
      </main>
    </>
    
  )
}
