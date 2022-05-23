import React from 'react'
import Chart from './Chart'

const Item = ({info, members }) => {
  
  return (
    <div>
        <div>
            <div className='row'>
              <div> Firstname</div>
              <div className='right'>{info.firstName}</div>       
            </div>
            <div className='row'> 
              <div>Lastname</div>
              <div className='right'>{info.lastName}</div>     
            </div>
            <div className='row'> 
              <div>Email</div>
              <div className='right'>{info.emailAddress}</div>  
            </div>
            <div className='row'> 
              <div>Phone Number</div>
              <div className='right'>{info.phoneNumber}</div>  
            </div>
            <div className='row'>   
              <div>Last Login</div>
              <div className='right'>{info.lastLogin}</div>  
            </div>
            <div  className='row'> 
              <div>Status</div>
              <div className='right'>{info.status}</div>  
            </div>
            <div className='row'> 
              <div>MemberShip</div>
              <div className='right'>{info.membership}</div>  
            </div>
            <div className='row'> 
              <div>Address</div>
              <div className='right'>{info.Address}</div>  
            </div>
        </div>

        {/* Card */}
        
        { members && members.map (member => (
          <div className='card' key={member.id}>
            <div> 
              <div>Member {member.id}</div>
              <h3>{member.name}</h3>
            </div>  
            <div className='row'> 
              <div>Relationship</div>
              <h3>{member.relation}</h3>
            </div>
            <div className='row'> 
              <div>Gender</div>
              <h3>{member.gender}</h3>
            </div>
            <div  className='row'>
              <div> Date Of birth</div>
              <h3>{member.dateOfBirth}</h3>
            </div>
          </div>     
        ))}
        

        {/*  Chart*/}
        <div className='card'>
          <div>Member ages</div>
          <Chart/>
        </div>
    </div>
  )
} 

export default Item