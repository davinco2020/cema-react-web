import React from 'react';
import {Link} from 'react-router-dom';


function Footer() {
  return (
    <div>
       <section className='section footer bg-dark text-white'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'><br/>
                    <h6> Company Information </h6><hr/>
                   <p>
                    For GOd so love the world, and He still does that her gave 
                    His only begotten SOn that whosoever believes ibn Hime should not perish but have everlasting life
                   </p>
                    
                </div>

                <div className='col-md-4'><br/>
                    <h6> Quick Links </h6><hr/>
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                    <div>
                        <Link to='/'>About</Link>
                    </div>
                    <div>
                        <Link to='/'>Contact</Link>
                    </div>
                    <div>
                        <Link to='/'>Blog</Link>
                    </div>
                   
                </div>
                <div className='col-md-4'><br />
                    <h6> Contacts Information  </h6><hr />
                    <div><p className='text-white mb-1'>
                        2, Emeka Ofor Road, Onitsha, ANambra State.
                    </p>
                    </div>
                    <div><p className='text-white mb-1'>
                        080324467555
                    </p>
                    </div>
                    <div><p className='text-white mb-1'>
                        0803426858588
                    </p>
                    </div>
                    <div><p className='text-white mb-1'>
                        info@cema.com.ng
                    </p>
                    </div>
                    
                </div>
            </div>

        </div>

       </section>
        
        
        </div>
  )
}

export default Footer