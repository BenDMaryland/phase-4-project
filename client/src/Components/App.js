import './App.css';
import TopNav from './TopNav';
import About from './About';
import SignupForm from './SignupForm';
import CardContainer from './CardContainer';
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

function App() {
  // This useState is for displaying car info
  const [carData, SetCarData] = useState([])
  //  This Usestate is for the current user who is loggedin
  const [user, setuser] = useState("")
  // This Use state is loggin in. 
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: ""
  })

  const [newUser, setnewUser] = useState({
    name: "",
    password: "",
    email: "",
    photographer: ""
  })


  // for displaying car info 
  useEffect(() => {
    fetch("/cars")
      .then(res => res.json())
      .then(data => SetCarData(data))
  }, [])


  // for chaning the form to signup 
  function newUserChangeHanldler(e) {

    if (e.target.name == "photographer") {setnewUser(data => data = { ...data, [e.target.name]: e.target.checked })}
    else{
    setnewUser(data => data = { ...data, [e.target.name]: e.target.value })
 }
  }


  //submitting new user requests
  function newUserSubmitHandler(e) {
    e.preventDefault()
    console.log(e)
    console.log(newUser)
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: newUser.email,
        password: newUser.password,
        name: newUser.name,
        photographer: newUser.photographer
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setuser(user));
      }
    });
  }
  

  // for chaning the form to login 
    function changeHanldler(e) {
      setloginDetails(data => data = { ...data, [e.target.name]: e.target.value })
    }
  console.log(newUser)

    //submitting login requests
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
           r.json().then((user) => setuser(user));
         }
       });
     }

  return (
    <div className="App">
      <TopNav  changeHanldler={changeHanldler}  submitHandler={submitHandler} loginDetails={loginDetails} user={user}/>
      <Routes >
        <Route path="/about/*" element={<About />} />
        <Route path="/signup/*" element={<SignupForm newUserSubmitHandler={newUserSubmitHandler} newUserChangeHanldler={newUserChangeHanldler} newUser={newUser}  />} />
      </Routes>
      <CardContainer carData={carData}/>
    </div>
  );
}
  export default App;
   


















