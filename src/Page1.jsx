import { Link, Outlet } from 'react-router-dom';

export const Page1 = () => {
  return (
    <>
      <div>
        <p>Page1ページです</p>
        <Link to='detailA'>Detail A</Link>
        <br />
        <Link to='detailB'>Detail B</Link>
      </div>
      <Outlet />
    </>
  );
};
