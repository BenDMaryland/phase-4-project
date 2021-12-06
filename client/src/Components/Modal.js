import React, { useState } from 'react'

function Modal({ setIsModalOpen, changeHanldler, submitHandler, loginDetails }) {


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
                    <form onSubmit={submitHandler} className="body">
                        <div>
                            <div>
                                <label>Email</label>
                                <div>
                                    <input value={loginDetails.email} onChange={changeHanldler} name="email" type="email" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label >Password</label>
                            <div>
                                <input onChange={changeHanldler} value={loginDetails.password} type="password" name="password" />
                            </div>
                        </div>
                        <button id="login-btn">Login</button>
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
