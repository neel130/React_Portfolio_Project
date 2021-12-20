import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (

        <>

            <div class="contact" id="contact">
                <div class="container text-center">
                    <h1>Contact Me</h1>
                    <p class="text-center">Subscribe Easy Tutorials YouTube Channel to <br />watch more videos on wesite Development and Digital Marketing</p>

                    <div class="row">
                        <div class="col-md-4">
                            <i class="fa fa-phone"></i>
                            <p>9337120597</p>
                        </div>
                        <div class="col-md-4">
                            <i class="fa fa-envelope"></i>
                            <p>madhavneel297@gmail.com</p>
                        </div>
                        <div class="col-md-4">
                            <i class="fa fa-internet-explorer"></i>
                            <p>www.neelmadhav.com</p>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary">Resume</button>
                    <button type="button" class="btn btn-primary">Hire Me</button>
                </div>
                <div class="footer text-center">
                    <p>Made by Neelamadhaba</p>
                </div>
            </div>
       

        </>
    )
}

export default Footer
