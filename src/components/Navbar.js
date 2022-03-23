import React from 'react';

function Navbar() {
    return (
        
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand display=3 fw-bold" href="#">PRODUTOS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active fw-bold" href="#">Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">Cadastro</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#">Consulta</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        
        )
}

export default Navbar;