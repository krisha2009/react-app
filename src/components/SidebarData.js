import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData=[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<FaIcons.FaCartPlus />,
        cName:'nav-text'
    },
    {
        title:'Account',
        path:'/account',
        icon:<RiIcons.RiAccountCircleLine />,
        cName:'nav-text'
    },
    {
        title:'Help',
        path:'/help',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    },
]