import React from 'react'
import DashboardItems from './DashboardItems'
const data=[]

const verify=(e)=>{
    // do process
}


const Dashboard = () => {

  return (
    <div>
        <div className='Search'>
            <input type="text"> Search</input>
            <button type='submit' />

        </div>
        {data.map( ( {items, i} ) => {
        return <div key={items}>
            
            <div>
                <button>Download PDF</button>
               <input type="submit" onClick={verify}>verify</input>
            </div>
        </div>
})
}
    
   
    </div>
  )
}

export default Dashboard