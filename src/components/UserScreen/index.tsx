import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import {ApplicationState} from '../../store'; 
import { User, Repository } from '../../store/ducks/userProfile/types';

import * as UserActions from '../../store/ducks/userProfile/actions';

import Header from '../Header';
import Container from '../Container';
import Repositories from '../Repositories';
import RepositoryItem from '../RepositoryItem';

interface StateProps {
  user: User;
  repositories: Repository[];
}

interface DispathProps {
  loadRequest(): void;

}

type Props = StateProps & DispathProps;

class UserScreen extends Component<Props> {

  componentDidMount(){
    const {loadRequest} = this.props;

    loadRequest();
  }

  render(){
    const {user} = this.props;
    const {repositories}  =this.props;
    return(
      <Container>
        <Header user={user}/>
        <Repositories>
          <RepositoryItem repositories={repositories}/>
        </Repositories>  
      </Container>
      
    )
  }
}

const mapStateToProps = ( state: ApplicationState) => ({
  user: state.user.data,
  repositories: state.user.repositories
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);
