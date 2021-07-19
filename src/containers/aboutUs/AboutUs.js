import React from 'react';

import { Teachers } from './components/teacher/Teachers';
import { TeacherPhoto } from './components/teacherPhoto/TeacherPhoto';

import anna from './components/teacherPhoto/photos/anna.jpg';
import dmitriy from './components/teacherPhoto/photos/dmitriy.jpg';
import irina from './components/teacherPhoto/photos/irina.jpg';
import olexandr from './components/teacherPhoto/photos/olexandr.jpg';
import olga from './components/teacherPhoto/photos/olga.jpg';
import sofia from './components/teacherPhoto/photos/sofia.jpg';

import './aboutUs.scss';

export const AboutUs = () => {
  return(
    <section id="about-us" className="about-us-wrapper">
      <div className="about-us-container">
        <h1 className="about-us-title">About Us</h1>
        <div className="about-us-row">
          <Teachers>
            <TeacherPhoto src={anna} title={'Anna'} />
            <TeacherPhoto src={dmitriy} title={'Dmitriy'} />
            <TeacherPhoto src={irina} title={'Irina'} />
            <TeacherPhoto src={olexandr} title={'Olexandr'} />
            <TeacherPhoto src={olga} title={'Olga'} />
            <TeacherPhoto src={sofia} title={'Sofia'} />
          </Teachers>
        </div>
      </div>
    </section>
  );
};
