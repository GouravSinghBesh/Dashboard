import React, { useState } from 'react'
import { PiHandWavingFill } from 'react-icons/pi'
import {BsSearch} from 'react-icons/bs'
import './header.css'

const Header = () => {
    const[searchText,setSearchText] = useState('');

    function handleSearch (e){
            setSearchText(e.target.value);
    }
    return (<>
        <div class='header'>
            <div class='header-text'>
                <h1>Hello Shahrukh</h1>
                <PiHandWavingFill color='RGB(238, 187, 153)' size={25}  />
            </div>


            <div class='searchbar'>
                <button class='btn'>
                    <BsSearch size={12} />
                </button>

                <input type="text" placeholder='      Search' value={searchText} onChange={handleSearch}/>
            </div>
        </div>

        

        </>
    )
}

export default Header