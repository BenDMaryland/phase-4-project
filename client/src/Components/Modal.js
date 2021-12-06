import React from 'react'

function Modal({setIsModalOpen}) {

    const handleClick = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
             <div className="modalBackground">
                <div className="modalContainer">
                    <div className="titleCloseBtn">
                    <button onClick={handleClick}>X</button>
                    </div>
                        <div className="title">
                            <h1>User Authorization</h1>
                        </div>
                    <form className="body">
                        <div>
                            <div>
                                <label>Email</label>
                                <div>
                                    <input type="email" name="email" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label >Password</label>
                            <div>
                                <input type="password" name="password"/>
                            </div>
                        </div>
                        <button>Forgot your password?</button>
                        <button>Login</button>
                    </form>

                    <div>
                        <p>Not a member yet</p>
                        <a href="">Sign Up Now!</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Modal
