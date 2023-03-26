import {FC, useEffect} from "react";

import {useTypedDispatch} from "../../hooks/useTypedDispatch";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import {ROUTER} from "../../common/config/router";

import {getProjectsRequest} from "./api";

import "./Dashboard.scss";
import {Link} from "react-router-dom";

const Dashboard: FC = () => {
    const dispatch = useTypedDispatch();
    const projects = useTypedSelector(state => state.projects.projects);

    useEffect(() => {
        dispatch(getProjectsRequest());
    }, []);

    return (
        <>
            Dashboard:

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
        </>
    );
};

export default Dashboard;