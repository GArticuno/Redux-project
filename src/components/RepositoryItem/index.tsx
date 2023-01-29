import { RepositoryList } from "./styles";

import { RepositoryItemProps } from "./types";

export default function RepositoryItem({repositories}: RepositoryItemProps){
  return(
    <RepositoryList>
      {repositories.map(repository => 
          <li key={repository.id}>
            <div>
              <h3>{repository.name}</h3>
              <p>{repository.description}</p>
            </div>
            <a href={repository.html_url} target="_blank" type='button' rel="noreferrer">Source</a>
          </li>
        )}
    </RepositoryList>
  )
}