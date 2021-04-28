import styled from 'styled-components';

import { User } from '../../store/ducks/userProfile/types';

interface OwnProps {
  user: User
}

const Row = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 3fr;
  padding: 0.5rem;
  background: #679731;
  height: 600px;
  border-radius: 30px;

  div {
    padding-left: 1rem;
  }
  img {
    margin-top:1rem;
    width: 15rem;
    height:15rem;
    border-radius: 50%;
  }

  .text1 {
    font-family: sans-serif;
    color: #ffffff;

    .bio {
      font-style: italic;
    }

    .location {
      margin-top:3rem;
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

export default function Header({user}: OwnProps){
  return(
    <Row>
      <div className='imageContainer'>
        <img src={user.avatar_url} alt="Avatar"/>
      </div>
      <div  className='text1'>
        <h1>{user.login}</h1>
        <h2>{user.name}</h2>
        <p className='bio'>{user.bio}</p>
        <p className='location'><strong>Location:</strong> {user.location}</p>
        <p><strong>Github:</strong> <a href={user.html_url}>{user.html_url}</a></p>
        <p><strong>Site:</strong> <a href={user.blog}>{user.blog}</a> </p>
      </div>
    </Row>
  )
}