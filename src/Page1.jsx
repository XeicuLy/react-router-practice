import { Link, Outlet } from 'react-router-dom';

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  return (
    <>
      <div>
        <p>Page1ページです</p>
        <Link to='detailA' state={arr}>
          Detail A
        </Link>
        <br />
        <Link to='detailB'>Detail B</Link>
      </div>
      <Outlet />
    </>
  );
};
