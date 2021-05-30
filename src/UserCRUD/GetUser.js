import React from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
//Access-Control-Allow-Origin http://localhost:51971/Api/User/GetUserDetails;

const apiUrl = 'http://localhost:51971/Api/User';

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      response: {},
    };
  }

  componentDidMount() {
    axios
      .get(apiUrl + '/GetUserDetails')
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  deleteUser(userId) {
    const { users } = this.state;
    axios.delete(apiUrl + '/DeleteUserDetails/' + userId).then((result) => {
      alert(result.data);
      this.setState({
        response: result,
        users: users.filter((user) => user.UserId !== userId),
      });
    });
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div>
          <Table style={{ fontFamily: 'vazir' }}>
            <thead className='btn-primary'>
              <tr style={{ fontFamily: 'vazir' }}>
                <th>نام</th>
                <th>نام خانوادگی</th>
                <th>ایمیل</th>
                <th>شماره موبایل</th>
                <th>آدرس</th>
                <th>شماره پرسنلی</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody style={{ fontFamily: 'vazir' }}>
              {users.map((user) => (
                <tr key={user.UserId}>
                  <td style={{ fontFamily: 'vazir' }}>{user.FirstName}</td>
                  <td>{user.LastName}</td>
                  <td>{user.EmailId}</td>
                  <td>{user.MobileNo}</td>
                  <td>{user.Address}</td>
                  <td>{user.PinCode}</td>
                  <td>
                    <Button
                      variant='info'
                      onClick={() => this.props.editUser(user.UserId)}
                    >
                      ویرایش{' '}
                    </Button>{' '}
                    &nbsp;&nbsp;&nbsp;
                    <Button
                      variant='danger'
                      onClick={() => this.deleteUser(user.UserId)}
                    >
                      حذف
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default UserList;
