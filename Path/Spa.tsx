import * as React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';

//

import Carousel1 from '../Components/Carousel1';
import Carousel2 from '../Components/Carousel2';
import Carousel3 from '../Components/Carousel3';
import Carousel4 from '../Components/Carousel4';
import Carousel5 from '../Components/Carousel5';
import Carousel6 from '../Components/Carousel6';

export default function Spa() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Carousel1 />} />
        <Route path="/carousel2" element={<Carousel2 />} />
        <Route path="/carousel3" element={<Carousel3 />} />
        <Route path="/carousel4" element={<Carousel4 />} />
        <Route path="/carousel5" element={<Carousel5 />} />
        <Route path="/carousel6" element={<Carousel6 />} />
      </Routes>
    </div>
  );
}
