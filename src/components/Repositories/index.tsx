import { RepoContainter } from './styles';
import { RepositoriesProps } from './types';

export default function Repositories({children}: RepositoriesProps){
  return(
    <RepoContainter>
      <h1>Repositories</h1>
      {children}
    </RepoContainter>
    
  )
}