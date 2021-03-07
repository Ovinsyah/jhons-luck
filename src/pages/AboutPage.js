import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TitleHeader from '../components/TitleHeader'

const educations = [
  {
    years:'2010 - 2013',
    title: 'SMA 3 Jakarta',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    years:'2013 - 2017',
    title: 'Universitas Indonesia S1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    years:'2017 - 2019',
    title: 'Universitas Indonesia S2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
];
const experiences = [
  {
    years:'2017 - 2019',
    title: 'Tokopedia',
    position: 'UI Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    years:'2019 - Present',
    title: 'Gojek',
    position: 'Web Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
];
function AboutPage() {
  return (
    <div>
      <Navbar isWhite={true} />
      <section className="about-section-header">
        <div className="about-section-left">
          <div className="bg-avatar-about">
            <img className="img-avatar-about" src="/images/avatar-about.png" alt="avatar about" />
          </div>
        </div>
        <div className="about-section-right">
          <TitleHeader />
        </div>
      </section>
      <section className="about-section-second">
        <h2 className="sub-title-about">Education</h2>
        <div>
          {
            educations.map((education, key) => (
              <div key={key}>
                <div className="text-years">{education.years}</div>
                <div className="text-title">{education.title}</div>
                <p className="text-description">{education.description}</p>
              </div>
            ))
          }
        </div>
      </section>
      <section className="about-section-third">
        <h2 className="sub-title-about">Experience</h2>
        <div>
          {
            experiences.map((experience, key) => (
              <div key={key}>
                <div className="text-years">{experience.years}</div>
                <div className="text-title">{experience.title}</div>
                <div className="text-position">{experience.position}</div>
                <p className="text-description">{experience.description}</p>
              </div>
            ))
          }
        </div>
      </section>
      <section className="about-section-socmed">
        <a href="https://www.facebook.com/" target="_blank">
          <img className="icon-socmed" src="/images/socmeds/facebook.png" alt="Facebook" />
        </a>
      </section>
      <Footer />
    </div>
  )
}

export default AboutPage
