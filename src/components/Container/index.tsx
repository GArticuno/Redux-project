import React, {ReactNode} from 'react';

import styled from 'styled-components';


interface OwnProps {
  children: ReactNode
}

const ContainerStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 3rem;

  @media screen and (max-width: 720px) {
	grid-template-columns: 1fr;
}
`;

export default function Container({children}: OwnProps){
  return(
    <ContainerStyle>
      {children}
    </ContainerStyle>
  )
}