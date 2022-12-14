import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { NotFound } from '../NotFound';
import { Page1 } from '../Page1';
import { Page1DetailA } from '../Page1DetailA';
import { Page1DetailB } from '../Page1DetailB';
import { Page2 } from '../Page2';
import { UrlParameter } from '../UrlParameter';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/page1' element={<Page1 />}>
        <Route path='detailA' element={<Page1DetailA />} />
        <Route path='detailB' element={<Page1DetailB />} />
      </Route>

      <Route path='/page2' element={<Page2 />}>
        <Route path=':id' element={<UrlParameter />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
