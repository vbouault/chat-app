import React from 'react';
import './Contact.css'
import PropTypes from 'prop-types';

class Contact extends React.Component {
  state = {
    online : this.props.online
  }
  handleChangeStatus = () =>{
    const newStatus = !this.state.online;
    this.setState({ online: newStatus });
  }
  render () {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar}/>
        <div>
          <p className="name">{this.props.name}</p>
          <div className="status" onClick={this.handleChangeStatus}>
              <div className={this.state.online ? "status-online" : "status-offline"}></div>
              <p className="status-text">{this.state.online ? "online" : "offline"}</p>
          </div>
        </div>
      </div>
    )
  };
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool,
};

export default Contact;