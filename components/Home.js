import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import Header from "./Header";

export default async function Home() {
    const api = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );
    const data = await api.json();
    const imagePath = 'https://image.tmdb.org/t/p/original'

    // console.log(data.results);
    // const filterHandler = (res) => {
    //     const filter = res;
    //     console.log(filter);
    // }
    return (
        <Fragment>
            <Header />
            <main>
                <h1 className='mt-8 flex justify-center font-bold text-3xl'>POPULAR MOVIES</h1>

                <div className="grid gap-4 grid-cols-fluid my-8 mx-20">
                    {data.results.map((movie) => (
                        <Link href={`/${movie.id}`}>
                            <div className="max-w-md">

                                <div className="h-fit w-fit">
                                    <Image src={imagePath + movie.poster_path} alt='' width={200} height={200} />
                                </div>

                                <div className="grid pr-12 text-center">
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
            </main>
        </Fragment>
    )
}

