import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { Page1 } from './Page1';
import { Page1DetailA } from './Page1DetailA';
import { Page1DetailB } from './Page1DetailB';
import { Page2 } from './Page2';

export const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Link to='/'>Home</Link>
        <br />
        <Link to='page1'>page1</Link>
        <br />
        <Link to='page2'>Page2</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page1' element={<Page1 />}>
          <Route path='detailA' element={<Page1DetailA />}>
            DetailA
          </Route>
          <Route path='detailB' element={<Page1DetailB />}>
            DetailB
          </Route>
        </Route>
        <Route path='/page2' element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
};
