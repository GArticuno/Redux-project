import styled from 'styled-components';

export const RepositoryList = styled.ul`
  list-style-type:none;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #feffd3;
    box-shadow: 2px 2px 5px 5px rgba(0,0,0, 0.3);
    padding: 0.5rem;
    margin:1rem;
    border-radius:30px;
    padding-left: 2rem;
    
    font-family: sans-serif;

    h3 {
      font-weight: 500;
      color: #222222;
    }

    p {
      font-size: 1rem;
    }

    a {
      border-radius: 30px;
      text-decoration: none;
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      padding: 0.4rem;
      width: 5.5rem;
      color: #222222;
      background:#fde054;
      
      align-self: center;
      text-align:center;
      
      transition: color 0.2s;
      
      &:hover {
        color: #679731;
      }
    }
  }
`