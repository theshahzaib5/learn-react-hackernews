import React, {Component} from 'react';

export default class StudentCard extends Component {
  render() {
    const {
      props: {
        studentInfo,
        onBtnPress,
      },
    } = this
    
    return (
      <div style={{ color: "#000", marginBottom: 20, flex: 1 }}>
        <a href="#" style={{color: "#764abc", textDecoration: "none", display: "inline-block"}}>
          <p style={{margin: 0}}><strong>Student Name:</strong> {studentInfo.first_name} {studentInfo.last_name} </p>
        </a>
        <p><strong>Email:</strong> {studentInfo.email} </p>
        <p><strong>Gender:</strong> {studentInfo.gender} </p>
        <p>
          <button
            onClick={onBtnPress}
            type="button"
          >
            Dismiss
          </button>
        </p>
      </div>
    );
  }
}