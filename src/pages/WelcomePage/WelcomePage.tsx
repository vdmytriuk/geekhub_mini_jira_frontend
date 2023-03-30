import React, {FC} from "react";

import AppContainer from "../../layouts/AppContainer/AppContainer";
import PublicHeader from "../../layouts/PublicHeader/PublicHeader";

import {Link} from "react-router-dom";
import {ROUTER} from "../../common/config/router";

import {cards} from "./data/cards";
import {sectionNumbers} from './data/section-numbers';
import {footerCompanyLinks, footerProductsLinks, footerContactUsLinks} from './data/links';

import quote from '../../assets/images/quote-bg.jpg';
import rectangle from '../../assets/images/Rectangle.jpg';
import pictureBackground from '../../assets/images/Picture-background.jpg';

import {
  Time, Done, Trio, Canvas, Line, Earth, Linkedin, Dash, Youtube, Smile, Oracle,
  Pentagram, Facebook, Avatar, Exclamation, Capgemini, Deloitte
} from './data/icons';

import './WelcomePage.scss';

const WelcomePage: FC = () => {

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
              {sectionNumbers.map((item) => (
                <div
                  key={item.title}
                  className="numbers__statistic-item"
                >
                  <p className="title">{item.title}</p>

                  <p className="text">{item.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
        <div className="section cards">
          <h2>Smash Your Project Goals with Us <Smile className="smile-position"/></h2>

          <div className="cards__items">
            {cards.map((item) => (
              <div
                key={item.title}
                className="card-item"
              >
                <h5>{item.title}</h5>

                <p>{item.text}</p>
              </div>
            ))}
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
                {footerProductsLinks.map((productLink) => (
                  <li key={productLink.title}>
                    <a
                      href={productLink.path}
                    >
                      {productLink.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h5>Company</h5>

              <ul>
                {footerCompanyLinks.map((companyLink) => (
                  <li key={companyLink.title}>
                    <a
                      href={companyLink.path}
                    >
                      {companyLink.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h5>Contact us</h5>

              <ul>
                {footerContactUsLinks.map((contactUsLink) => (
                  <li key={contactUsLink.title}>
                    <a
                      href={contactUsLink.path}
                    >
                      {contactUsLink.title}
                    </a>
                  </li>
                ))}
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