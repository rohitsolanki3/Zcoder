import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'fixed', top: 0, width: 'calc(100% - 250px)',height: '100px' ,marginLeft: '-250px' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h1>Zcoder</h1>
        </a>
        <div className="d-flex align-items-center"> {/* Added a div for alignment */}
          <button className="btn btn-outline-light me-2" type="button"> {/* Profile button */}
            <FontAwesomeIcon icon={faUser} />
          </button>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
