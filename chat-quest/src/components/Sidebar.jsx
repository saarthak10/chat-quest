import React, { useState } from 'react'
import PropTypes from 'prop-types';
import NewChatButton from './Buttons/NewChatButton';


const Sidebar = ({onSidebarClick,history}) => {

    const handleSideBarClick = ()=>{


    }

    return(
        <>
            <NewChatButton  />
        
        </>


    )
}

export default Sidebar;
Sidebar.propTypes = {
  onSidebarClick: PropTypes.func,
  history: PropTypes.array
}
