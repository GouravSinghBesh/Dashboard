import React from 'react'
import './card.css'




const Card = (props) => {
   const IconPicture = props.IconPicture;
   const iconColor = props.color;
   const backgroundC = props.background;
  return (
    <div class="card-container">
        <div class='card-icon-container'>
            <IconPicture size={40} style={{color : iconColor}} class='card-icon'/>
            <div class='card-icon-circle' style={{background:backgroundC}}></div>
        </div>
        <div class="card-text">
           <p className='text-sm text-gray-400'>{props.title}</p> 
            <p className='font-semibold'>{props.price}</p>
            <p className='text-green-600 text-sm inline'>{props.inflation} <span className='text-xs text-black'>{props.month}</span></p>
            
        </div>
    </div>
  )
}

export default Card