// import React, { useState } from 'react'
import Card from './Card';
import './cards.css'
import {AiOutlineDollarCircle,AiFillLock} from 'react-icons/ai'
import {CgNotes} from 'react-icons/cg'
import {FaRegMoneyBillAlt} from 'react-icons/fa'

const Cards = () => {
    // const cardData = [{ IconPicture: , title: '', price: '', inflation: '', month: '',color:'' },
    //  { IconPicture: '', title: '', price: , inflation: , month: 'this month',color: },
    // { IconPicture: '', title: '', price: , inflation: , month: 'this month',color:'' },
    // { IconPicture: '', title: '', price: , inflation: , month: ,color:'' }]

    // const [data, setData] = useState(cardData);


    return (
        <div class="cards-container">
            <Card IconPicture={AiOutlineDollarCircle} title={'Earning'} price={'$198K'} inflation={'37.8%'} month={'this month'} color={'green'} background={' rgb(199, 235, 199)'}/>
            <Card IconPicture={CgNotes} title={'Orders'} price={'$2.4K'} inflation={'2%'} month={'this month'} color={'purple'} background={'  rgb(217, 179, 234)'}/>
            <Card IconPicture={FaRegMoneyBillAlt} title={'Balance'} price={'$2.4K'} inflation={'2%'} month={'this month'} color={'skyblue'} background={'  rgb(190, 222, 227)'}/>
            <Card IconPicture={AiFillLock} title={'Total Sales'} price={'$89K'} inflation={'11%'} month={'this week'} color={'red'} background={'  rgb(228, 163, 206)'}/>
        </div>
    )
}

export default Cards