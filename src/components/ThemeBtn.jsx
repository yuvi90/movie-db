'use client'

import React, { useEffect, useState } from 'react'
import { BsFillMoonFill } from 'react-icons/bs'
import { MdSunny } from 'react-icons/md'

export default function ThemeBtn() {
    const [theme, setTheme] = useState(null)

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleThemeBtn = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <>
            {theme === "dark" ? <MdSunny className='w-[40px] cursor-pointer text-2xl hover:text-amber-400 transition-color duration-150' onClick={handleThemeBtn} /> : <BsFillMoonFill className='w-[40px] cursor-pointer text-xl hover:text-amber-400 transition-color duration-150' onClick={handleThemeBtn} />}
        </>
    )
}
