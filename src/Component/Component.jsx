import React from 'react'
import { Link } from 'react-router-dom'
export default function Component () {
  return (
    <div class="flex justify-around w-full h-full items-end max-sm:flex-wrap">
    <div class="w-1/4 h-1/4   m-2 flex items-center justify-center bg-white  bg-opacity-10 backdrop-filter backdrop-blur-lg hover:bg-opacity-20 text-black font-semibold py-2 text-xl px-4 rounded">
        <Link to={`/`}><h1 class="max-sm:text-sm max-sm:text-center">Rub' al Khali</h1></Link>
    </div>
    <div class="w-1/4 h-1/4  m-2 flex items-center justify-center bg-white  bg-opacity-10 backdrop-filter backdrop-blur-lg hover:bg-opacity-20 text-black font-semibold py-2 text-xl px-4 rounded">
    <Link to={`/Tuwaiq`}><h1 class="max-sm:text-sm max-sm:text-center">Tuwaiq Mountains</h1></Link>
       
    </div>
    <div class="w-1/4 h-1/4  m-2 flex items-center justify-center bg-white  bg-opacity-10 backdrop-filter backdrop-blur-lg hover:bg-opacity-20 text-black font-semibold py-2 text-xl  px-4 rounded">
    <Link to={`/Al-Lawz`}><h1 class="max-sm:text-sm max-sm:text-center">Al-Lawz Mountain</h1></Link>
    </div>
    <div class="w-1/4 h-1/4  m-2 flex items-center justify-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg hover:bg-opacity-20 text-black font-semibold py-2 text-xl px-4 rounded">
    <Link to={`/Sarawat`}><h1 class="max-sm:text-sm max-sm:text-center">Sarawat Mountains</h1></Link>
    </div>
    <div class="w-1/4 h-1/4  m-2 flex items-center justify-center bg-white  bg-opacity-10 backdrop-filter backdrop-blur-lg hover:bg-opacity-20 text-black font-semibold py-2 text-xl  px-4 rounded">
        <Link to={'/Fifa'}> <h1 class="max-sm:text-sm max-sm:text-center">Fifa Mountains</h1></Link>
    </div>
    <div class="w-1/4 h-1/4   m-2 flex items-center justify-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg hover:bg-opacity-20 text-black  font-semibold text-xl py-2 px-4 rounded">
        <Link to={'/Al-Souda'}><h1 class="max-sm:text-sm max-sm:text-center">Al-Souda Mountain</h1> </Link>
    </div>
</div>

  )
}
