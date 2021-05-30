/* eslint-disable */


import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';


class AddUser extends React.Component {
  constructor(props) {
    super(props);
 
    this.initialState = {
      UserId: '',
      FirstName: '',
      LastName: '',
      EmailId: '',
      MobileNo: '',
      Address: '',
      PinCode: '',
    }

    if (props.user.UserId) {
      this.state = props.user
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    let pageTitle;
    let actionStatus;
    if (this.state.UserId) {

      pageTitle = <h2> ویرایش</h2>
      actionStatus = <b>به رو رسانی</b>
    } else {
      pageTitle = <h2 className="text-center"> اضافه کردن پرسنل</h2>
      actionStatus = <b>ذخیره</b>
    }

    return (
      


























      <div style={{fontFamily: 'vazir'}} className="col-md-12 ">      
        <h2> {pageTitle}</h2>
        <Row className="text-center row">
          <Col className="text-center col-md-12 col-md-6 col-md-offset-3" sm={7}>
            <Form className="text-center col-centered" onSubmit={this.handleSubmit}>
              <Form.Group controlId="FirstName">
                <Form.Label>نام</Form.Label>
                <Form.Control
                  type="text"
                  name="FirstName"
                  value={this.state.FirstName}
                  onChange={this.handleChange}
                  placeholder="First Name" />
              </Form.Group>
              <Form.Group controlId="LastName">
                <Form.Label>نام خانوادگی</Form.Label>
                <Form.Control
                  type="text"
                  name="LastName"
                  value={this.state.LastName}
                  onChange={this.handleChange}
                  placeholder="Last Name" />
              </Form.Group>
              <Form.Group controlId="EmailId">
                <Form.Label>ایمیل</Form.Label>
                <Form.Control
                  type="text"
                  name="EmailId"
                  value={this.state.EmailId}
                  onChange={this.handleChange}
                  placeholder="EmailId" />
              </Form.Group>
              <Form.Group controlId="MobileNo">
                <Form.Label>شماره موبایل</Form.Label>
                <Form.Control
                  type="text"
                  name="MobileNo"
                  value={this.state.MobileNo}
                  onChange={this.handleChange}
                  placeholder="MobileNo" />
              </Form.Group>
              <Form.Group controlId="Address">
                <Form.Label>آدرس</Form.Label>
                <Form.Control
                  type="text"
                  name="Address"
                  value={this.state.Address}
                  onChange={this.handleChange}
                  placeholder="Address" />
              </Form.Group>

              <Form.Group controlId="PinCode">
                <Form.Label>کد پرسنلی</Form.Label>
                <Form.Control
                  type="text"
                  name="PinCode"
                  value={this.state.PinCode}
                  onChange={this.handleChange}
                  placeholder="PinCode" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="hidden" name="UserId" value={this.state.UserId} />
                <Button variant="success" type="submit">{actionStatus}</Button>          

              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AddUser;