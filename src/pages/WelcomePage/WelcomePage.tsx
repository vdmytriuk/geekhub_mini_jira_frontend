import React, {FC} from "react";

import {PublicLayout} from "../../layouts/PublicLayout";
import AppContainer from "../../layouts/AppContainer/AppContainer";
import PublicHeader from "../../layouts/PublicHeader/PublicHeader";

import Line from '../../assets/svg/line.svg';
import Smile from '../../assets/svg/smile.svg';
import Exclamation from '../../assets/svg/exclamation.svg'

import dash from "../../assets/images/Dash.png";
import canvas from "../../assets/images/Canvas.png";
import oracle from "../../assets/images/Oracle.png";
import deloitte from "../../assets/images/Deloitte-logo.png";
import capgemini from "../../assets/images/Capgemini.png";
import pentagram from "../../assets/images/Pentagram.png";

import './WelcomePage.scss';

const WelcomePage: FC = () => {

  return (
    <div>
      <AppContainer>
        <PublicHeader/>
        <PublicLayout>
          <div className="section">
            <h1 className="section__header">Project Management Shouldn&apos;t Be a Headache Anymore</h1>
            <p className="p-text section__text">
              Bring your team together like never before with Kotello! With real-time chat, file sharing,
              and task delegation, you can ensure everyone is on the same page.
            </p>
            <div className="section__statistic">
              <div>
                <h3>+<span className="statistic__header">27k</span> users</h3>
                <p className="p-text statistic-text">in the past year alone</p>
                <Line/>
              </div>
              <div>
                <h3><span className="statistic__header">50%</span> reduction <Exclamation className="exclamation-position"/></h3>
                <p className="p-text statistic-text">in project completion time</p>
              </div>
            </div>
          </div>
        </PublicLayout>
        <div className="section list">
          <h4>See Who&apos;s on Our List</h4>
          <p className="list__text">We&apos;re passionate about what we do, and our track record speaks for itself.</p>
          <div className="list__brands">
            <img src={deloitte} alt="deloitte" />
            <img src={pentagram} alt="pentagram" style={{paddingTop: "10px"}}/>
            <img src={dash} alt="dash" />
            <img src={canvas} alt="canvas" />
            <img src={oracle} alt="oracle" />
            <img src={capgemini} alt="capgemini" style={{paddingTop: "10px"}}/>
          </div>
        </div>
        <div>
          Section?
        </div>
        <div className="section cards">
          <h2>Smash Your Project Goals with Us <Smile className="smile-position"/></h2>
          <div className="cards__items">
            <div className="col">
              <h5>Supercharge Your Team Collaboration</h5>
              <p>Work together in real-time and stay on top of tasks with ease.</p>
            </div>
            <div className="col">
              <h5>Work Smarter, Not Harder</h5>
              <p>Streamline your workflows and prioritize tasks.</p>
            </div>
            <div className="col">
              <h5>Get a Bird&apos;s-Eye View of Your Project</h5>
              <p>With enhanced visibility, you can easily identify all possible roadblocks.</p>
            </div>
            <div className="col">
              <h5>Manage Your Time and Resources Like a Pro</h5>
              <p>Stay on top of deadlines and allocate resources with data-driven insights.</p>
            </div>
            <div className="col">
              <h5>Keep Everyone Accountable</h5>
              <p>Assign tasks, set deadlines, ensure that everyone is pulling their weight.</p>
            </div>
            <div className="col">
              <h5>Communicate Like a Boss</h5>
              <p>Stay connected and collaborate on projects from anywhere.</p>
            </div>
            <div className="col">
              <h5>Automate Your Reporting</h5>
              <p>Get the insights without the hassle of manual reporting - with just a few clicks.</p>
            </div>
            <div className="col">
              <h5>Get Flexible</h5>
              <p>Customize your workflows to fit your unique needs and work style.</p>
            </div>
            <div className="col">
              <h5>Be a Project Management Pro</h5>
              <p>With all the tools and features in one place, you&apos;ll feel like a pro in no time.</p>
            </div>
          </div>
        </div>
        <div>
          Sections...
        </div>
      </AppContainer>
    </div>
  );
};

export default WelcomePage;