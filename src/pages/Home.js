import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

function Home() {
    return (
        <div className='home'>
          <div className="container">
  <div className="row">
    <div className="col-sm"><div class="card" >
  <img src="./images/softtoy.jpg" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Soft toys</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">View</a>
  </div>
</div></div>
    <div className="col-sm"><div class="card" >
  <img src="./images/bag.jpg" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Bag</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">View</a>
  </div>
</div></div>
    <div className="col-sm"><div class="card" >
  <img src="./images/tiffin.jpg" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Tiffin box</h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">View</a>
  </div>
</div></div>
  </div>
</div>
        </div>
    );
}

export default Home;
/*<nav className="navbar navbar-expand navbar-light fixed-top">
          <div className="container">
            <a href="" className="navbar-brand">Home</a>
            <div className="collapse navbar-collapse">
              <ul className="nabar-nav ml-auto">
                <li className="nav-item">
                  <a href="" className="nav-link">Login</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">Sign up</a>
                </li>
              </ul>
            </div>
          </div>*/
