import React from 'react'
import { MdSpaceDashboard } from 'react-icons/md'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import {AiFillCodeSandboxSquare} from 'react-icons/ai'
import {BsFileEarmarkPersonFill} from 'react-icons/bs'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import {LiaPercentageSolid} from 'react-icons/lia'
import {TbMessage2Question} from 'react-icons/tb'

import './sidebar.css'

const Sidebar = () => {

    const dashBoardItems = [{ icon: MdSpaceDashboard, name: 'Dashboard' }, { icon: AiFillCodeSandboxSquare, name: 'Product' }, { icon: BsFileEarmarkPersonFill, name: 'Customers' }, { icon: FaRegMoneyBillAlt, name: 'Income' }, { icon: LiaPercentageSolid, name: 'Promote' }, { icon: TbMessage2Question, name: 'Help' }]


    return (
        <div class='main-container'>
            <div class='title-container'>
                <MdSpaceDashboard fontSize='1.3em' color='white' />
                <h1>Dashboard</h1>
            </div>

            <div class='middle-container'>
                <ul className='listItems'>
                    {
                        dashBoardItems.map((item, index) => {
                            const IconTag = item.icon;
                            return (

                                <div class='DashboardListItem' key={index}>
                                    <IconTag fontSize='1.3em' color='white' />
                                    <li >{item.name}</li>
                                    <IoIosArrowForward style={{ marginLeft: 20 }} fontSize='1em' class='arrow' />
                                </div>);
                        })
                    }
                </ul>

            </div>

            <div class='tail'>
                <img src="../src/image/men.jpg" alt="" height={20} width={30} />
                <div>
                    <p>Evano</p>
                    <p>Project Manager</p>
                </div>
                <div>
                    <IoIosArrowDown color='white' className='tailArrow' />
                </div>
            </div>

        </div>
    )
}


export default Sidebar