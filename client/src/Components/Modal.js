import React, { useState } from 'react'

function Modal({ setIsModalOpen, changeHanldler, submitHandler }) {

    const [users, setusers] = useState("")
    const [loginDetails, setloginDetails] = useState({
        email: "",
        password: ""

    })

    const handleClick = () => {
        setIsModalOpen(false)
    }

    function changeHanldler(e) {
        setloginDetails(data => data = { ...data, [e.target.name]: e.target.value })
    }


    function submitHandler(e) {
        e.preventDefault()
        console.log(e)
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                email: loginDetails.email,
                password: loginDetails.password
                
             }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setusers(user));
            }
        });
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
