// 'use client'
// import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Image from 'next/image';
import { Fragment } from 'react';

export default async function page({ params }) {
    const { movie } = params;
    // const movie = useParams()

    const imagePath = 'https://image.tmdb.org/t/p/original'
    const Details = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
    )
    const data = await Details.json();
    // console.log({ data })
    const credits = await fetch(
        `https://api.themoviedb.org/3/person/{data.id}/movie_credits?api_key=${process.env.API_KEY}`
    )
    const credit = await credits.json();
    console.log(credit);

    return (
        <Fragment>
            <Header />
        <main className='grid justify-center my-8 mx-44 md:mx-24 '>
            <div className='my-4 italic text-center grid font-bold font-mono'>
                <h1 className='text-4xl text-red-800'>{data.title}</h1>
                <div className='text-sm mt-2'>{data.tagline}</div>
                <hr className='border-2 border-red-700 w-1/2 mx-auto' />
            </div>
            <div className='text-red-700 text-xl italic font-bold pt-4 px-8'>
                <div>Released:
                    <span className='font-normal text-black text-lg not-italic'> {data.release_date}</span>
                </div>
                <div>RunTime:
                    <span className='font-normal text-black text-lg not-italic'> {data.runtime}minutes</span>
                </div>
                <div>Ratings:
                    <span className='font-normal text-black text-lg not-italic'> {data.vote_average}/10</span>
                </div>
            </div>
            <div className='grid h-fit w-fit rounded mt-2'>
                <Image className='rounded' src={imagePath + data.backdrop_path} alt='' width={1000} height={1000} />
            </div>
                <div className='grid justify-center bg-slate-800 text-gray-100 font-mono py-8'>
                    <h2 className='font-bold text-xl text-center'>Synopsis</h2>
                <div className='max-w-2xl font-mono my-4'>{data.overview}</div>
                </div>
        </main>
        </Fragment>
    )
}
