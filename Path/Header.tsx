import * as React from 'react';

import { Link } from 'react-router-dom';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="header">
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
            <Button
              variant="dark"
              className="border border-1"
              onClick={handleShow}
            >
              Menu
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
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
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </nav>
      </div>
    </div>
  );
}
