import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  background: #679731;
  height: 600px;
  max-width: 400px;
  border-radius: 30px;

  img {
    margin-top:1rem;
    width: 15rem;
    height:15rem;
    border-radius: 50%;
  }

  .bio-text {
    font-family: sans-serif;
    color: #ffffff;

    margin-top: 1rem;
    margin-left: 1.5rem;

    h1, h2 {
      margin: 0;
      padding: 0;
    }

    h1 {}

    h2 {
      font-weight: 300;
    }

    .grid {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .bio {
      font-style: italic;
    }

    .location {
    }

    a {
      text-decoration: none;
      color: #ffffff;
      transition: color 0.2s;
      &:hover {
        color: #fde054;
      }
    }
  }
`;