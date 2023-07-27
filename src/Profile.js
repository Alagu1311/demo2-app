import React from 'react'


function Profile() {
   return (
      <div>
          <h3>User profile</h3>
          <form>
          <input type='text' placeholder='Enter the Name'></input><br></br>
              <input type='Email' placeholder='Enter the Email' ></input><br></br>
              <input type='text' placeholder='Current working company' ></input><br></br>
              <input type='text'  placeholder='current working position' ></input><br></br>
              <button>Sumbit</button>
          </form>
    </div>
  )
}

export default Profile;