import {getAllFilms} from "@/app/actions/getAllFilms";

export default async function FilmsPage () {

    const allFilms = await getAllFilms()

    return(
        <div>
            {allFilms.results.map((el)=>{
                return <div key={el.url}>{el.title}</div>
            })}
        </div>
    )
}