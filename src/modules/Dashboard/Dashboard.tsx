import {FC, useEffect} from "react";
import {Link} from "react-router-dom";

import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import {ROUTER} from "../../common/config/router";

import {getProjectsRequest} from "./api";

import "./Dashboard.scss";

const Dashboard: FC = () => {
    const dispatch = useTypedDispatch();
    const projects = useTypedSelector(state => state.projects.projects);

    useEffect(() => {
        dispatch(getProjectsRequest());
    }, []);

    return (
        <div className="dashboard">
            <div className="dashboard__header">
                <h2 className="big-title">
                    Dashboard
                </h2>
            </div>

            {projects.map(project => (
              <Link
                  key={project.name}
                  to={ROUTER.PROJECT(project.name)}
              >
                  <strong>{project.name}</strong>

                  <br/>

                  Status: {project.status}
              </Link>
            ))}
        </div>
    );
};

export default Dashboard;