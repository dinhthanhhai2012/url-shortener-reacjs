import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
import Button from "../../components/base/Button";
import routhPath from "../../constant/routhPath";
import {signInPost} from "./services";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SignIn: React.FC<Props> = (props) => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserName(value);
  };
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const signIn = async () => {
    if (userName && password) {
      try {
        // @ts-ignore
        await dispatch(signInPost({userName, password}));
        navigate(routhPath.HOME);
      } catch (e: any) {
        toast(e.message);
      }
    } else {
      toast('Missing User name or Password');
    }
  };

  return (
    <>
      <div className={'flex flex-col items-center mt-10'}>
        <div className={'text-5xl font-bold uppercase tracking-widest'}>Sign In</div>

        <div className={'mt-5 text-[#777777]'}>Enter your email to log into your account.</div>
        <div className={'flex flex-col mt-12'}>
          <div>
            <div className={''}>User Name</div>
            <input
              value={userName}
              onChange={onUserNameChange}
              className={'min-w-[23rem] h-[3.25rem] rounded-[12px] border border-[2px] border-[#C7C7C7] mt-2 px-4 py-2'}
              type={'text'}
            />
            <div className={'mt-8'}>Password</div>
            <input
              value={password}
              onChange={onPasswordChange}
              className={'min-w-[23rem] h-[3.25rem] rounded-[12px] border border-[2px] border-[#C7C7C7] mt-2 px-4 py-2'}
              type={'password'}
            />
          </div>
          <div className={'flex justify-end'}>
            <Button
              content={'Sign In'}
              handleClick={signIn}
              size={'sm'}
              classNamePrefix={'rounded-[12px] bg-[#411CFF] mt-8 rounded-full hover:bg-[#4f46e5] text-[white]'}
            />
          </div>

          <div
            className={'mt-5 text-[#777777] cursor-pointer hover:text-[#2563eb] hover:underline'}
            onClick={() => {
              navigate(routhPath.SIGN_UP);
            }}
          >
            Create new account
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
