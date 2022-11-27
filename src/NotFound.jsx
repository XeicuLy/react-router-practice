import { Link, Outlet } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link to='/'>TOP</Link>
      <Outlet />
    </div>
  );
};
