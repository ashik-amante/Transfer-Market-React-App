import React from 'react';

const Signing = (props) => {
    const joining = props.joined;
    const i= joining.length;
    console.log(i);
    console.log(joining);
    const totalBudget = joining.reduce((acc,joining)=>{
        return acc+joining.salary;
    },0)
    console.log(totalBudget);
   
  
   
    
    return (
        <div>
            <h3>Total Purchased:{i}</h3>
            <h3>Total Budget:{totalBudget.toFixed(2)}</h3>
            {
                joining.map((cd)=><h3>{cd.name}<br></br>Salary:{cd.salary}<br></br></h3>)
            }
            
            
            
        </div>
    );
};

export default Signing;