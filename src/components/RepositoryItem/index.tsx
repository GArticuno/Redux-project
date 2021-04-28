import styled from 'styled-components';

import { Repository } from '../../store/ducks/userProfile/types';

interface OwnProps {
  repositories: Repository[]
}

const RepositoryList = styled.ul`
  list-style-type:none;
  li {
    display: grid;
    grid-template-columns: 1fr 0.3fr;
    background: #feffd3;
    box-shadow: 2px 2px 5px 5px rgba(0,0,0, 0.3);
    padding: 0.5rem;
    margin:1rem;
    border-radius:30px;
    padding-left: 2rem;
    padding-bottom:1rem;
    
    font-family: sans-serif;

    h3 {
      font-family: 'Lemon Milk',sans-serif;
      font-weight: 300;
      color: #222222;
    }

    a {
      border-radius: 30px;
      text-decoration: none;
      font-family: 'Lemon Milk';
      font-size: 1rem;
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

export default function RepositoryItem({repositories}: OwnProps){
  return(
    <RepositoryList>
      {repositories.map(repository => 
          <li key={repository.id}>
            <div>
              <h3>{repository.name}</h3>
              <p>{repository.description}</p>
            </div>
            <a href={repository.html_url} type='button'>Source</a>
          </li>
        )}
    </RepositoryList>
  )
}