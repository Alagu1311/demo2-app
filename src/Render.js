import React from 'react'
import { useSelector } from 'react-redux';

function Render() {
    // const {store,setstore}=useContext(companycontext)
    const state=useSelector(state=>console.log(state))
  return (
      <div>
          {/* {store.map((arr) => (
              <div>
                  <h3>{arr.Companyname}</h3>
                  <p>
                      {arr. companydescrip}
                  </p>
                  <h3>
                      {arr. Companyvacc}
                  </h3>
                  <p>
                      {arr. companyvaccdescrip}
                  </p>
                  <button>Apply</button>
                  </div>
          ))} */}
          
    </div>
  )
}

export default Render;