import {getAllFilms} from "@/app/actions/getAllFilms";

// export const dynamic = 'force-dynamic'
export default async function FilmsPage () {
    try {
        const allFilms = await getAllFilms();
        return (
            <div>
                {allFilms.results.map((el) => {
                    return <div key={el.url}>{el.title}</div>;
                })}
            </div>
        );
    } catch (error) {
        return <div>Error fetching films</div>;
    }
}