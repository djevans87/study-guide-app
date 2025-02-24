import 'react'
import {useDispatch, useSelector} from "react-redux";
import ProgressBar from "../../components/ProgressBar";
import {updateProgress} from "../../state_management/reducers/UserProgressSlice.jsx";

const GoalsProgress = () => {
  const dispatch = useDispatch();
  const userProgress = useSelector((state) => state.userProgress);

  const handleUpdateProgress = (language, progress) => {
    dispatch(updateProgress({language, progress}));
  };

  return (
        <div className="progress-container">
            <h2>Learning Progress</h2>
            {Object.entries(userProgress).map(([language, progress]) => (
                <ProgressBar
                    key={language}
                    language={language}
                    progress={progress}
                    handleUpdateProgress={handleUpdateProgress}
                />
            ))}
        </div>
    );
};
export default GoalsProgress;
