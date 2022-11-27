import { Link, Outlet } from 'react-router-dom';

export const Page2 = () => {
  return (
    <>
      <div>
        <p>Page2ページです</p>
      </div>
      <Link to='999'>URLParameter</Link>
      <br />
      <Link to='999?name=test'>QueryParameter</Link>
      <Outlet />
    </>
  );
};
