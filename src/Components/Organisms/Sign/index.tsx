import React from 'react'
import {Container} from './style'
import { useNavigate } from "react-router-dom";

interface propsType {
  mainTitle: string,
  navigate: string,
  pageNo: string
}

export default function Index(props:propsType) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => {
			navigate(props.navigate);
    }}>
      <h1>{props.mainTitle}</h1>
      <p>Boring-Fox-Project</p>
      <h2>{props.pageNo}</h2>
    </Container>
  )
}
