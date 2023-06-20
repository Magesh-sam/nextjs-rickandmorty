import { notFound } from "next/navigation";
import { Card } from "../components/Card";
import { ICharacter } from "../page";

export default async function Pages({ params }: { params: { id: number } }) {
  if(params.id>42) return notFound();
    
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${params.id}`)
  const data = await response.json();
  
    
    return (
        <main className="min-h-screen min-w-screen">
        <div className="  grid grid-cols-1  mx-auto gap-5 lg:grid-cols-2 xl:grid-cols-3 ">
          {data.results.map((character:ICharacter) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
  </main>
    )
}