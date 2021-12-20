import React from 'react'
import { Link } from 'react-router-dom';
import user1 from './Images/user1.png'

function Home() {
    return (
        <div>
            <section id="header">
<div class="container text-center">
<div class="user-box">
<img src={user1}/>
<h1>Neelamadhaba Behera</h1>
<p>Web Developer</p>
</div>  
</div>
<Link to="/profile"> 
<div class="scroll-btn">
<div class="scroll-bar"><span> </span></div>
</div>
</Link>
</section>   
        </div>
    )
}

export default Home ;
