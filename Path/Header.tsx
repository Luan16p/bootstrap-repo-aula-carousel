import * as React from 'react';

import { Link } from 'react-router-dom';

import { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

export default function Header(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="header bg-dark">
        <nav className="nav">
          <a href="/" className="logo">
            Carousel
          </a>
          <ul className="list-ul">
            <li>
              <Link to="/">Exemplo 1</Link>
            </li>
            <li>
              <Link to="/carousel2">Exemplo 2</Link>
            </li>
            <li>
              <Link to="/carousel3">Exemplo 3</Link>
            </li>
            <li>
              <Link to="/carousel4">Exemplo 4</Link>
            </li>
            <li>
              <Link to="/carousel5">Exemplo 5</Link>
            </li>
            <li>
              <Link to="/carousel6">Exemplo 6</Link>
            </li>
          </ul>
          <div className="menu-mobile">
            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                className="border border-1"
                id="dropdown-basic"
              >
                Menu
              </Dropdown.Toggle>

              <Dropdown.Menu className="bg-dark">
                <Dropdown.Item>
                  <Link to="/">Exemplo 1</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/carousel2">Exemplo 2</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/carousel3">Exemplo 3</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/carousel4">Exemplo 4</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/carousel5">Exemplo 5</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/carousel6">Exemplo 6</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </nav>
      </div>
    </div>
  );
}
