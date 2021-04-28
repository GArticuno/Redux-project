import React, { ReactNode } from 'react';

import styled from 'styled-components';

interface OwnProps {
  children: ReactNode
}

const RepoContainter = styled.div`
  
  h1 {
    font-size: 2rem;
    font-family:'Lemon Milk', sans-serif;
    font-weight: 100;
    background: #fde054;
    padding:1rem;
    border-radius: 20px;
  }

`

export default function Repositories({children}: OwnProps){
  return(
    <RepoContainter>
      <h1>Repositories</h1>
      {children}
    </RepoContainter>
    
  )
}