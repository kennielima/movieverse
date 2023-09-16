import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
export default async function trendingshow() {
    const imagePath = 'https://image.tmdb.org/t/p/original'

    const api = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`
    );
    const data = await api.json();
    // console.log(data.results);

    return (
        <Fragment>
            <main>
                <h1 className='mt-8 flex justify-center font-bold text-3xl'>TRENDING SHOWS</h1>

                <div className="grid gap-4 grid-cols-fluid my-8 mx-20">
                    {data.results.map((show) => (
                        <Link href={`/shows/${show.id}`}>
                            <div className="max-w-md">

                                <div className="h-fit w-fit">
                                    <Image src={imagePath + show.poster_path} alt='' width={200} height={200} />
                                </div>

                                <div className="grid pr-12 text-center">
                                    <p className="text-xl font-semibold text-blue-800">{show.name}
                                    </p>
                                    <div>⭐
                                        <span className=''> {show.vote_average}/10</span>
                                    </div>

                                    <div>First Airing:
                                        <span className=''> {show.first_air_date}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </Fragment>
    )
}
