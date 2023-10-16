import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/reducer';
import { setUser } from 'shared/store/user/slice';
import { IUser } from './model/types';
import UserService from './model/api';
import KGInput from 'shared/ui/Input/KGInput';
import KGButton from 'shared/ui/button/KGButton';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [state, setState] = useState<IUser>({
    username: '',
    password: '',
  });

  const handleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await UserService.loginUser(state);
      if (response) {
        dispatch(setUser(response.data.user));
        navigate('/profile');
      }
      console.log(response);
      setIsLoading(false);
    } catch (e: unknown) {
      const err = e as Error;
      setIsLoading(false);
      console.log(err);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="mx-auto h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0 overflow-hidden bg-[#dedede17] backdrop-blur-[2rem]">
      <div className="p-6 sm:p-8 lg:p-16 space-y-8 bg-white  shadow-3xl rounded-lg md:mt-0 w-full max-w-[500px]">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Sign in to platform</h2>
        <form className="mt-8 flex flex-col items-end" action="#">
          <div className="flex flex-col space-y-6 w-full">
            <div>
              <label className="text-sm font-medium text-gray-900 block mb-2">Your username</label>

              <KGInput
                placeholder="name"
                name="username"
                type="text"
                value={state.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">
                Your password
              </label>

              <KGInput
                placeholder="••••••••"
                type="password"
                id="password"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <KGButton
            onClick={handleLogin}
            className="bg-transparent text-zinc-600 border-[1.5px] border-zinc-600 mt-8 w-full flex justify-center"
          >
            {isLoading ? 'Loading...' : 'Login '}
          </KGButton>
          <Link to="/register">
         
            <p className=" text-zinc-500 pt-2">Dont have account yet?</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
