import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts, error } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        <p className="text-danger">{error}</p>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  getContacts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts,
  error: state.contact.error
});

// const mapDispatchToProps = (dispatch) => ({
//   getContacts: (dispatch) => dispatch({
//     type: GET_CONTACTS
//   })
// });

export default connect(mapStateToProps, {
  getContacts
})(Contacts);
