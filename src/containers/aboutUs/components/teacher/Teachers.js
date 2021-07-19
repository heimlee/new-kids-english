import React from 'react';

export const Teachers = (props) => {
  const renderTeachers = () => {
    const photos = props.children;
    return photos.map((photo, index) => {
      return(
        <div 
          key={index}
          index={index}
          className="single-teacher-container"
        >
          <div className="single-teacher-wrapper">
            <img className="img-responsive" src={photo.props.src} alt="" />
            <div className="single-teacher-title">{photo.props.title}</div>
          </div>
        </div>
      );
    });
  };

  return(
    <>{renderTeachers()}</>
  );
};
