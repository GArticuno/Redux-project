import { GoLocation } from 'react-icons/go';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

import { Row } from './styles';
import { HeaderProps } from './types';

export default function Header({ user }: HeaderProps){
  return(
    <Row>
      <div className='imageContainer'>
        <img src={user.avatar_url} alt="Avatar"/>
      </div>
      <div  className='bio-text'>
        <h1>{user.name}</h1>
        <h2>{user.login}</h2>
        <p className='bio'>{user.bio}</p>
        <div className="grid">
          <GoLocation color="#ffffff" size={24} />
          <p className='location'>
            {user.location}
          </p>
        </div>
        <div className="grid">
          <a href={user.html_url} target="_blank" rel="noreferrer">
            <AiFillGithub size={24} />
          </a>
          Github
        </div>
        <div className="grid">
          <a href={user.blog} target="_blank" rel="noreferrer">
            <AiOutlineLink size={24} />
          </a>
          Site
        </div>
      </div>
    </Row>
  )
}