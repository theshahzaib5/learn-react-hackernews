import React, {Component} from 'react';

export default class SubjectCard extends Component {
  render() {
    const {
      props: {
        subjectInfo,
        onBtnPress,
      },
    } = this
    
    return (
      <div style={{ color: "#000", marginBottom: 20, flex: 1 }}>
        <a href={subjectInfo.url} style={{color: "#764abc", textDecoration: "none", display: "inline-block"}}>
          <p style={{margin: 0}}><strong>Project Name:</strong> {subjectInfo.title} </p>
        </a>
        <p><strong>Author:</strong> {subjectInfo.author} </p>
        <p><strong>Comments:</strong> {subjectInfo.num_comments} </p>
        <p><strong>Points:</strong> {subjectInfo.points}</p>
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