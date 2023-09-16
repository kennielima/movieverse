"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";


export default function Header() {
    const router = useRouter();
    const [searched, setSearched] = useState('');

    const search = () => {
        searched !== '' && 
        router.push(`/search/${searched}/`);
    }

    return (
        <header className=' hover:text-slate-300 h-12 px-12 bg-blue-700 flex items-center justify-between text-white'>
            <Link href='/'>
                <p className="font-serif text-2xl">MovieVerse</p>
            </Link>

            <div className="flex w-2/5 items-center justify-end border-2 rounded-md border-blue-500">
                <input
                    className="relative w-full h-8 pl-3 text-black border-gray-800 rounded-md"
                    type='text'
                    placeholder='search a database of thousands of movies'
                    onChange={(e) => { setSearched(e.target.value); console.log(searched) }}
                    onKeyUp={search}
                    value={searched}
                />

                <AiOutlineSearch
                    type="submit"
                    className='absolute text-slate-900 cursor-pointer mr-2'
                    onClick={search}
                />
            </div>
        </header>
    )
}