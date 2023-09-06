import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import Header from "@/components/Header";

export default async function page({ params }) {
  const movie = params.searched;
  const imagePath = 'https://image.tmdb.org/t/p/original'

  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movie}`
  )
  const response = await data.json();
  // console.log(params.searched);

  return (
    <Fragment>
        <Header />
        <main>
            <div className="grid gap-4 grid-cols-fluid my-16 mx-20">
                {response.results.map((movie) => (
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

