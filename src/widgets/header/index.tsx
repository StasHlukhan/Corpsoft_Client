import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'shared/hooks/reducer';
import { logOutUser } from 'shared/store/user/slice';
import { selectUser } from 'widgets/loginForm/model/helpers';

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate('/login');
  };
  return (
    <nav className="font-noto-sans bg-white border-b border-gray-200  fixed z-30 w-full  px-3  lg:px-5 lg:pl-3 flex items-center justify-between">
      <div className="flex items-center justify-start self-center whitespace-nowrap ">
      <img width="75" height="75" src="https://img.icons8.com/clouds/100/domain.png" alt="domain"/>      </div>
      <div className="flex cursor-pointer items-center">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="flex  "
        >
          {user?.username}
          <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/000000/sort-down.png" alt="sort-down"/>
        </div>
        {open ? (
          <div className=" absolute top-10 right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow  block">
            <ul className="py-1">
              <a
                onClick={handleLogOut}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   "
              >
                Sign out
              </a>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

export default Header;
