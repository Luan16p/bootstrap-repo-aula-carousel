import * as React from 'react';
import './style.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Path/Header';
import Spa from './Path/Spa';
import Footer from './Path/Footer';
import { CDBFooter } from 'cdbreact';

import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Spa />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
