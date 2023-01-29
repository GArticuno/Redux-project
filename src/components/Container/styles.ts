import styled from 'styled-components';

export const ContainerStyle = styled.div`
  display: flex;
  position: relative;
  gap: 3rem;

  @media screen and (max-width: 720px) {
	grid-template-columns: 1fr;
}
`;