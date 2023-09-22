import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import Sort from "@/components/Sort";

export default async function sortings() {
    const imagePath = 'https://image.tmdb.org/t/p/original'

    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&sort_by=vote_average.desc`
    );
    const response = await data.json();

    return (
        <Fragment className='relative'>
            <div className="grid justify-end my-8 mx-20 py-2 px-6 gap-1 text-center w-fit h-auto border-slate-500 text-slate-600 bg-slate-300 border-2 font-mono rounded-md font-medium tracking-wider absolute right-4 top-6">
                <Link href='/trendingshows'><div>TRENDING SHOWS</div></Link>
                <Sort />
            </div>
                <h1 className='mt-24 flex justify-center font-bold text-3xl'>TRENDING MOVIES</h1>
                <div className="grid gap-4 grid-cols-fluid my-8 mx-20">
                    {response.results.map((movie) => (
                        <Link href={`/${movie.id}`}>
                            <div className="max-w-md grid justify-center">

                                <div className="h-fit w-fit">
                                    <Image src={imagePath + movie.poster_path} alt='' width={200} height={200} />
                                </div>

                                <div className="grid text-center">
                                    <p className="text-xl font-semibold text-blue-800">{movie.title}
                                    </p>
                                    <div>⭐
                                        <span className=''> {movie.vote_average}/10</span>
                                    </div>

                                    <div>Released:
                                        <span className=''> {movie.release_date}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
        </Fragment>
    )
}