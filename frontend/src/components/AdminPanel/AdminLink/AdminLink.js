import React from 'react';
import './AdminLink.css';

const AdminLink = props =>
    (
        <div onClick={()=> props.click()} className="admin-link-container">{props.name}</div>
    )

export default AdminLink;