import React from 'react';

const Navbar = () => {
  return (
    <div style={{display:'flex',padding:'5px 10px',justifyContent:'space-between',background:"black",color:'white'}}>
        <div style={{cursor:'pointer',padding:'5px 10px'}}>
        App
        </div>
        <div style={{display:'flex',padding:'5px 10px'}}>
            <div style={{cursor:'pointer',padding:'5px 10px'}}>
                Link1 
            </div>
            <div style={{cursor:'pointer',padding:'5px 10px'}}>
                Link2
            </div>
        </div>
    </div>
  )
}

export default Navbar;