import 'react';
import './background.css';
import {useLocation} from "react-router-dom";
import PropTypes from 'prop-types';

const BackgroundWrapper = ({ children }) => {
    const location = useLocation();
    const excludeBackground =
        location.pathname === '/login' || location.pathname === '/logout';
    if (excludeBackground) {
        return <>{children}</>;
    }

    return (
        <div className="background-image">
            {children}
        </div>
    );
};

BackgroundWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default BackgroundWrapper;
