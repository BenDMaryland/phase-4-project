import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from "./Modal"
// import { NavLink } from "react-router-dom";




function TopNav() {

     const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(true)
  }

    return (
        <div >
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" id="nav-container">
                    <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        App Name and Logo
                    </Typography>
                   <Button color="inherit">Home</Button>
                     <Button color="inherit">About</Button>
                    <Button color="inherit">Signup</Button>
                    <Button onClick={toggleModal}  color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
                
            
        </div>
    )
}

export default TopNav
