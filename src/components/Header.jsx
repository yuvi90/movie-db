import React from 'react';
import Link from 'next/link';
import { ThemeBtn } from '.';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
    return (
        <header>
            <section className='max-w-screen-xl mx-auto p-6 flex justify-between items-center'>
                <nav className='flex justify-center items-center gap-10'>
                    <Link href="/">
                        <div className='text-2xl bg-amber-500 text-white rounded-lg p-2 hover:bg-amber-400 drop-shadow-md transition-color duration-150'>
                            <h1>🍿 <span className='font-bold'>Movie</span><span className='pr-1'>DB</span></h1>
                        </div>
                    </Link>
                    <Link href="/movies" className='text-md font-medium hover:text-amber-400 transition-color duration-150'>Movies</Link>
                    <Link href="/tv-shows" className='text-md font-medium hover:text-amber-400 transition-color duration-150'>TV Shows</Link>
                    <Link href="/popular" className='text-md font-medium hover:text-amber-400 transition-color duration-150'>Popular</Link>
                    <Link href="/upcoming" className='text-md font-medium hover:text-amber-400 transition-color duration-150'>Upcoming</Link>
                </nav>
                <div className='flex items-center gap-2'>
                    <form action="" method="get" className='relative'>
                        <div className='relative'>
                            <label htmlFor="search" className='absolute h-full flex items-center right-2 cursor-pointer'>
                                <FaSearch className='text-slate-400 text-xl' />
                            </label>
                            <input id='search' type="text" placeholder='Search...' className='w-[250px] p-2 rounded-md text-md text-black' maxLength="25" />
                        </div>
                    </form>
                    <ThemeBtn />
                </div>
            </section>
        </header>
    )
}
