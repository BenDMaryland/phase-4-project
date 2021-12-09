import React, { useState } from 'react'

function AddCarForm({ handleAddCar, user, setDOMUpdater }) {
  const [errors, seterrors] = useState("")
  const initialState = {
    model: "",
    year: "",
    description: "",
    photo: "",
  };

  const [formData, setFormData] = useState(initialState);

  async function handleErrors(r) {
    if (!r.ok) {
      const jsonResponse = await r.json();
      return alert(jsonResponse.errors)

    }

    return r;
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: formData.model,
        owned_by_id: user.id,
        photo: formData.photo,
        description: formData.description,
        year: formData.year
      })
    }).then(console.log("ddddddd"))
      .then(handleErrors)
      .then((newCar) => {
        setFormData(initialState);
        handleAddCar(newCar);
      })
      .catch(errors => console.log("errors", errors))
  }

  return (
    <div>
      <div className="sign-up-form">
        {/* <AccountCircleIcon id="user-icon"/> */}
        <h1>Add New Car <br /><span id="fill-out-form">Please fill this form to add new car</span></h1>
        <form onSubmit={handleSubmit} >
          <input className="input-box" placeholder="Model" name="model" onChange={handleChange} value={formData.model} />
          <input className="input-box" placeholder="Year" name="year" onChange={handleChange} value={formData.year} />
          <input className="input-box" placeholder="Description" name="description" onChange={handleChange} value={formData.description} />
          <input className="input-box" placeholder="Car URL" name="photo" onChange={handleChange} value={formData.photo} />
          <button type="submit" className="sign-btn">Save Changes</button>
        </form>
      </div>
    </div>
  )
}

export default AddCarForm



