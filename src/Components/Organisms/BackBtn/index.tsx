import React from 'react'
import { Btn } from './style'
import X from '../../../assets/images/x.png'
import { useNavigate } from 'react-router-dom';


export default function Index() {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };

  return (
    <Btn onClick={onClickBtn}><img src={X} alt="go to back" /></Btn>
  )
}
