import 'react';
import PropTypes from 'prop-types'

const ProgressBar = ({progress, language, handleUpdateProgress}) => {
    const getProgressColor = (progress) => {
        if (progress <= 50) {
            return `linear-gradient(90deg, #ff0000 ${progress}%, #ffffff ${progress}%)`;
        } else {
            return `linear-gradient(90deg, #00ff00 ${progress}%, #ffffff ${progress}%)`;
        }
    };
    return (
        <div className="goal-item">
            <span>{language}</span>
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{
                        width: `${progress}%`,
                        background: getProgressColor(progress),
                    }}
                >
                    <span className="progress-text">{Math.round(progress)}%</span>
                </div>
            </div>
            <button onClick={() => handleUpdateProgress(language, 80)}
            className="update-progress-btn">
                Update {language} Progress
            </button>
        </div>
    );
};
ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
    language: PropTypes.string.isRequired,
    handleUpdateProgress: PropTypes.func.isRequired,
};

export default ProgressBar;