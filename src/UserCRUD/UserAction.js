import React, { Component } from 'react';

import { Container, Button } from 'react-bootstrap';
import UserList from './GetUser';
import AddUser from './AddUser';
import axios from 'axios';
const apiUrl = 'http://localhost:51971/Api/User/';

class UserActionApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddUser: false,
      error: null,
      response: {},
      userData: {},
      isEdituser: false,
      isUserDetails: true,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isAddUser: true });
    this.setState({ isUserDetails: false });
  }
  onDetails() {
    this.setState({ isUserDetails: true });
    this.setState({ isAddUser: false });
  }

  onFormSubmit(data) {
    this.setState({ isAddUser: true });
    this.setState({ isUserDetails: false });
    if (this.state.isEdituser) {
      axios.put(apiUrl + 'UpdateEmployeeDetails', data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isAddUser: false,
          isEdituser: false,
        });
      });
    } else {
      axios.post(apiUrl + 'InsertUserDetails', data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isAddUser: false,
          isEdituser: false,
        });
      });
    }
  }

  editUser = (userId) => {
    this.setState({ isUserDetails: false });
    axios.get(apiUrl + 'GetUserDetailsById/' + userId).then(
      (result) => {
        this.setState({
          isEdituser: true,
          isAddUser: true,
          userData: result.data,
        });
      },
      (error) => {
        this.setState({ error });
      }
    );
  };

  render() {
    let userForm;
    if (this.state.isAddUser || this.state.isEditUser) {
      userForm = (
        <AddUser onFormSubmit={this.onFormSubmit} user={this.state.userData} />
      );
    }

    return (
      <div className='App container row col-md-12'>
        <Container className='col text-center col-md-12'>
          <h1 style={{ textAlign: 'center', fontFamily: 'vazir' }}>
            مشخصات همکاران مشانیر
          </h1>
          <hr></hr>
          {!this.state.isUserDetails && (
            <Button
              style={{ fontFamily: 'vazir' }}
              variant='primary'
              onClick={() => this.onDetails()}
              className="text-center"
            >
              {' '}
              مشخصات افراد
            </Button>
          )}
          {!this.state.isAddUser && (
            <Button
              style={{ fontFamily: 'vazir' }}
              variant='primary'
              onClick={() => this.onCreate()}
            >
              اضافه کردن افراد
            </Button>
          )}
          <br></br>
          {!this.state.isAddUser && <UserList editUser={this.editUser} />}
          {userForm}
        </Container>
      </div>
    );
  }
}
export default UserActionApp;
