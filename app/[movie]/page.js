// import { useParams } from 'next/navigation';
import Image from 'next/image';

export default async function page({ params }) {
    const { movie } = params;
    // const movie = useParams()
    const imagePath = 'https://image.tmdb.org/t/p/original'
    const Details = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
    )
    const data = await Details.json();
    console.log(data);

    const credit = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${process.env.API_KEY}`
    )
    const response = await credit.json();
    const casts = response.cast;
    const crews = response.crew;
    // console.log({ response });



    return (
        <main className='grid justify-center my-8 mx-12 sm:mx-24'>
            <div className='my-4 italic text-center grid font-bold pb-4 font-mono'>
                <h1 className='text-4xl text-red-800'>{data.title}</h1>
                <div className='text-sm mt-2'>{data.tagline}</div>
                <hr className='border-2 border-red-700 w-1/2 mx-auto' />
            </div>
            <div className=' bg-slate-800 rounded'>
                <div className='text-blue-400 text-xl italic font-bold pt-8 pb-4 px-12'>
                    <div>Released:
                        <span className='font-normal text-slate-200 text-lg not-italic'> {data.release_date}</span>
                    </div>
                    <div>Genre:
                        {data.genres.map((genre, index) => (
                            <span className='font-normal text-slate-200 text-lg not-italic'>
                                {genre.name}
                                {index === data.genres.length - 1 ? '.' : ', '}
                            </span>
                        ))}
                    </div>
                    <div>RunTime:
                        <span className='font-normal text-slate-200 text-lg not-italic'> {data.runtime}minutes</span>
                    </div>
                    <div>Ratings:
                        <span className='font-normal text-slate-200 text-lg not-italic'> {data.vote_average}/10</span>
                    </div>
                </div>

                <div className='grid h-fit max-w-5xl mt-2'>
                    <Image 
                    className='rounded grid lg:pl-4 justify-center' 
                    src={imagePath + (data.backdrop_path !== null ? data.backdrop_path : data.poster_path)} 
                    alt='' 
                    width={1000} 
                    height={1000} 
                    />

                    <div className='grid rounded justify-center text-gray-100 font-mono p-12'>
                        <h2 className='font-bold text-2xl text-center'>Synopsis</h2>
                        <div className='font-mono my-4 mx-4'>{data.overview}</div>
                        <h2 className='font-bold text-2xl text-center mt-4'>Credits</h2>
                        <div className='font-mono my-4 mx-4'>
                            <h4 className='font-semibold text-xl ml-10 mb-4'>Cast</h4>

                            <div className='grid w-full grid-cols-fluid'>
                                {casts.map((cast, index) => (
                                    <div>
                                        {index < 9 && (
                                            <div className='grid text-center justify-center'>
                                                <Image className='text-lg' src={imagePath + cast.profile_path} alt='' width={200} height={200} />
                                                <p className='text-lg'>{cast.name}</p>
                                                <p className='text-sm italic'> as '{cast.character}'</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <h4 className='font-semibold text-xl ml-10 my-4'>Crew</h4>

                            <div className='grid justify-center grid-cols-1 md:grid-cols-2'>
                                {crews.map((crew) =>
                                    <div className=''>
                                        {crew.job === 'Director' &&
                                            <p>
                                                <span className='font-bold text-lg text-blue-200'>Director:</span>
                                                <span>{crew.name}</span>
                                            </p>
                                        }
                                    </div>
                                )}

                                <div className='grid sm:flex'>
                                    <span className='font-bold text-lg text-blue-200'>Producers: </span>
                                    <div>
                                        {crews.map((crew) =>
                                            <div>
                                                {crew.job === 'Producer' &&
                                                    <span>{crew.name}</span>
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className='grid sm:flex py-2'>
                                    <span className='font-bold text-lg text-blue-200'>Executive Producers: </span>
                                    <div>
                                        {crews.map((crew) =>
                                            <div>
                                                {crew.job === 'Executive Producer' &&
                                                    <span> {crew.name}</span>
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
{/* <div>Budget:
                    <span className='font-normal text-black text-lg not-italic'> ${data.budget}</span>
                </div>
                <div>Revenue:
                    <span className='font-normal text-black text-lg not-italic'> ${data.revenue}</span>
                </div> */}