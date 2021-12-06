import React, {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from "./Modal"
import { Link } from "react-router-dom";




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
                    <Typography variant="h  6" component="div" sx={{ flexGrow: 1 }}>
                        App Name and Logo
                    </Typography>
                    <Link className="nav-link" to="/"><Button color="inherit">Home</Button></Link>
                     <Link className="nav-link" to="about"><Button color="inherit">About</Button></Link>
                     <Link className="nav-link" to="signup"><Button color="inherit">Signup</Button></Link>
                    <Button onClick={toggleModal}  color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
                
            
        </div>
    )
}

export default TopNav
