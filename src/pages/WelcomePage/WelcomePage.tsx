import React, {FC} from "react";

import AppContainer from "../../layouts/AppContainer/AppContainer";
import PublicHeader from "../../layouts/PublicHeader/PublicHeader";

import {Link} from "react-router-dom";
import {ROUTER} from "../../common/config/router";

import quote from '../../assets/images/quote-bg.jpg';
import rectangle from '../../assets/images/Rectangle.jpg';
import pictureBackground from '../../assets/images/Picture-background.jpg';

import Time from '../../assets/svg/time.svg';
import Done from '../../assets/svg/done.svg';
import Trio from '../../assets/svg/trio.svg';
import Line from '../../assets/svg/line.svg';
import Dash from "../../assets/svg/dash.svg";
import Earth from '../../assets/svg/earth.svg';
import Smile from '../../assets/svg/smile.svg';
import Avatar from '../../assets/svg/avatar.svg';
import Oracle from "../../assets/svg/oracle.svg";
import Canvas from "../../assets/svg/canvas.svg";
import Youtube from '../../assets/svg/youtube.svg';
import Linkedin from '../../assets/svg/linkedin.svg';
import Facebook from '../../assets/svg/facebook.svg';
import Deloitte from "../../assets/svg/deloitte.svg";
import Capgemini from "../../assets/svg/capgemini.svg";
import Pentagram from "../../assets/svg/pentagram.svg";
import Exclamation from '../../assets/svg/exclamation.svg'

import './WelcomePage.scss';

const WelcomePage: FC = () => {

  const footerProductsLinks = [
    {title: 'What`s new?', path: '#'},
    {title: 'Tooltips', path: '#'},
    {title: 'Integrations', path: '#'}
  ];

  const footerCompanyLinks = [
    {title: 'Terms of service', path: '#'},
    {title: 'Privacy policy', path: '#'},
    {title: 'Meet the team', path: '#'}
  ];

  const footerContactUsLinks = [
    {title: 'FAQ', path: '#'},
    {title: 'Help center 24/7', path: '#'}
  ]

  return (
    <div>
      <AppContainer>
        <PublicHeader/>
        <div className="container container--public">
          <div className="column column--first">
            <div className="section">
              <h1 className="section__header">Project Management Shouldn&apos;t Be a Headache Anymore</h1>

              <p className="p-text section__text">
                Bring your team together like never before with Kotello! With real-time chat, file sharing,
                and task delegation, you can ensure everyone is on the same page.
              </p>

              <div className="section__statistic">
                <div>
                  <h3>+<span className="statistic__header">27k</span> users</h3>

                  <p
                    className="p-text statistic-text"
                  >
                    in the past year alone
                  </p>
                  <Line/>
                </div>

                <div>
                  <h3><span className="statistic__header">50%</span> reduction
                    <Exclamation
                      className="exclamation-position"
                    />
                  </h3>

                  <p
                    className="p-text statistic-text"
                  >
                    in project completion time
                  </p>
                </div>
              </div>

              <div className="section__link">
                <Link to={ROUTER.REGISTRATION} className="link">
                  <span className="text-strong">Get started</span> - It’s free
                </Link>
              </div>
            </div>
          </div>

          <div className="column column--second">
            <img src={pictureBackground} alt="img"/>
          </div>
        </div>

        <div className="section list">
          <h4>See Who&apos;s on Our List</h4>

          <p className="list__text">
            We&apos;re passionate about what we do, and our track record speaks for itself.
          </p>

          <div className="list__brands">
            <Deloitte/>
            <Pentagram/>
            <Dash/>
            <Canvas/>
            <Oracle/>
            <Capgemini/>
          </div>
        </div>

        <div>
          <div className="section__numbers">
            <div className="numbers__image">
              <img src={rectangle} alt="img"/>
            </div>

            <div className="numbers__statistic">
              <div className="numbers__statistic-item">
                <p className="title">80%</p>

                <p className="text">retention rate</p>
              </div>
              <div className="numbers__statistic-item">
                <p className="title">10X</p>

                <p className="text">better user conversion</p>
              </div>
              <div className="numbers__statistic-item">
                <p className="title">4X</p>

                <p className="text">boost in task completion</p>
              </div>
              <div className="numbers__statistic-item">
                <p className="title">65%</p>

                <p className="text">growth in team collaboration</p>
              </div>
            </div>

          </div>
        </div>
        <div className="section cards">
          <h2>Smash Your Project Goals with Us <Smile className="smile-position"/></h2>

          <div className="cards__items">
            <div className="card-item">
              <h5>Supercharge Your Team Collaboration</h5>

              <p>Work together in real-time and stay on top of tasks with ease.</p>
            </div>

            <div className="card-item">
              <h5>Work Smarter, Not Harder</h5>

              <p>Streamline your workflows and prioritize tasks.</p>
            </div>

            <div className="card-item">
              <h5>Get a Bird&apos;s-Eye View of Your Project</h5>

              <p>With enhanced visibility, you can easily identify all possible roadblocks.</p>
            </div>

            <div className="card-item">
              <h5>Manage Your Time and Resources Like a Pro</h5>

              <p>Stay on top of deadlines and allocate resources with data-driven insights.</p>
            </div>

            <div className="card-item">
              <h5>Keep Everyone Accountable</h5>

              <p>Assign tasks, set deadlines, ensure that everyone is pulling their weight.</p>
            </div>

            <div className="card-item">
              <h5>Communicate Like a Boss</h5>

              <p>Stay connected and collaborate on projects from anywhere.</p>
            </div>

            <div className="card-item">
              <h5>Automate Your Reporting</h5>

              <p>Get the insights without the hassle of manual reporting - with just a few clicks.</p>
            </div>

            <div className="card-item">
              <h5>Get Flexible</h5>

              <p>Customize your workflows to fit your unique needs and work style.</p>

            </div>
            <div className="card-item">
              <h5>Be a Project Management Pro</h5>

              <p>With all the tools and features in one place, you&apos;ll feel like a pro in no time.</p>
            </div>
          </div>
        </div>
      </AppContainer>
      <div className="section__quote">
        <img className="section__quote-image" src={quote} alt="Quote" loading="lazy"/>

        <div className="quote__text-container">
          <p className="quote__text">
            <span className="primary-color">“</span>
            I&apos;ve used several project management tools over the years,
            but none have come close to the functionality and ease of use of Kotello.
            It&apos;s improved our project delivery time by 25%. Thanks, Kotello!

            <span className="primary-color">“</span>
          </p>
        </div>

        <div className="quote__image-container">
          <Avatar/>
          <p className="image__text">
            Oto Kuaför
            <span className="primary-color"> / </span>
            Scrum Master
            <span className="primary-color"> / </span>
            Abstergo Ltd.
          </p>
        </div>

      </div>
      <AppContainer>
        <div className="section__features">
          <div className="features__header">
            <h3>Kotello is The Missing Piece!</h3>

            <p>Say Goodbye to Stressful Projects - Give Kotello a Spin!</p>

            <div className="section__link">
              <Link to={ROUTER.REGISTRATION} className="link">
                <span className="text-strong">Get started</span> - It’s free
              </Link>
            </div>

          </div>
          <div className="features__details">
            <div className="details-text">
              <Time/>
              <p
                className="details-text-item"
              >
                Real-time experience triggering without page refreshes
              </p>
            </div>

            <div className="details-text">
              <Done/>
              <p
                className="details-text-item"
              >
                Intuitive design = productivity boost
              </p>
            </div>

            <div className="details-text">
              <Trio/>
              <p
                className="details-text-item"
              >
                Smooth communication, allowing for seamless workflow
              </p>
            </div>

          </div>
        </div>
        <div className="section__footer">
          <div className="footer__about">
            <div className="footer-col">
              <h5>Product</h5>

              <ul>
                {footerProductsLinks.map((productLink) => {
                  return (
                    <li key={productLink.title}>
                      <a
                        href={productLink.path}
                      >
                        {productLink.title}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="footer-col">
              <h5>Company</h5>

              <ul>
                {footerCompanyLinks.map((companyLink) => {
                  return (
                    <li key={companyLink.title}>
                      <a
                        href={companyLink.path}
                      >
                        {companyLink.title}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="footer-col">
              <h5>Contact us</h5>

              <ul>
                {footerContactUsLinks.map((contactUsLink) => {
                  return (
                    <li key={contactUsLink.title}>
                      <a
                        href={contactUsLink.path}
                      >
                        {contactUsLink.title}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

          </div>
        </div>
        <div className="section__rights">
          <p>Copyright © 2023 Geekhub Dynamics Inc. All rights reserved.</p>

          <p><Earth/> Region: International Ukrainian</p>

          <div className="socials-svg">
            <Facebook/>
            <Youtube/>
            <Linkedin/>
          </div>

        </div>
      </AppContainer>
    </div>
  );
};

export default WelcomePage;