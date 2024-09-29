import React from 'react'
import Component from '../Component/Component'

export default function Content() {
  return (
    <div> 
           <div class="w-full h-screen bg-[url('https://images.pexels.com/photos/14750495/pexels-photo-14750495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center flex flex-col ">

        <div class="flex flex-col h-full justify-center items-center">
        <div class="rounded-lg shadow-xl border border-gray-300 max-sm:w-10/12 ">

        <p class="text-white text-lg p-4 max-w-md text-center max-sm:text-sm max-sm:text-black " >
        The Rub' al Khali is the largest continuous sand dune area in the world.
        It is located in the southeastern part of the Arabian Peninsula and spans across four
        countries: Saudi Arabia, Oman, Yemen, and the United Arab Emirates. Its area covers approximately
        650,000 square kilometers, and it is known for its vast expanse and high density of sand dunes, 
        which can reach heights of over 250 meters.
    </p>
    <h1 class="text-white text-3xl font-bold ">Rub' al Khali</h1>
        </div>
  </div>
  <Component/>
        
        
</div>
    
    </div>



  )
}
