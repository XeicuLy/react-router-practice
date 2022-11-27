import { Link, Outlet, useNavigate } from 'react-router-dom';

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const navigate = useNavigate();

  const onCLickDetailA = () => {
    navigate('detailA');
  };

  return (
    <>
      <div>
        <p>Page1ページです</p>
        <Link to='detailA' state={arr}>
          Detail A
        </Link>
        <br />
        <Link to='detailB'>Detail B</Link>
        <br />
        <button onClick={onCLickDetailA}>DetailAに自動遷移</button>
      </div>
      <Outlet />
    </>
  );
};
