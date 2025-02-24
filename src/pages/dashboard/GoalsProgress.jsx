import 'react'
import {useDispatch, useSelector} from "react-redux";

const GoalsProgress = () => {
  const dispatch = useDispatch();
  const userProgress = useSelector((state) => state.userProgress);

  const handleUpdateProgress = (language, progress) => {
    dispatch(userProgress(language, progress));
  };

  return (
      <div>
        <h2>Learning Progress</h2>
        <div className="goal-item">
          <span>Java</span>
          <div className="progress-bar">
            <div
                className="progress"
                style={{ width: `${userProgress.java}%` }}
            ></div>
          </div>
          <button onClick={() => handleUpdateProgress('java', 80)}>
            Update Java Progress
          </button>
        </div>
        <div className="goal-item">
          <span>C#</span>
          <div className="progress-bar">
            <div
                className="progress"
                style={{ width: `${userProgress.csharp}%` }}
            ></div>
          </div>
          <button onClick={() => handleUpdateProgress('csharp', 80)}>
            Update C# Progress
          </button>
        </div>
        <div className="goal-item">
          <span>JavaScript</span>
          <div className="progress-bar">
            <div
                className="progress"
                style={{ width: `${userProgress.javascript}%` }}
            ></div>
          </div>
          <button onClick={() => handleUpdateProgress('javascript', 80)}>
            Update JavaScript Progress
          </button>
        </div>
        <div className="goal-item">
          <span>Python</span>
          <div className="progress-bar">
            <div
                className="progress"
                style={{ width: `${userProgress.python}%` }}
            ></div>
          </div>
          <button onClick={() => handleUpdateProgress('python', 80)}>
            Update Python Progress
          </button>
        </div>
        <div className="goal-item">
          <span>SQL</span>
          <div className="progress-bar">
            <div
                className="progress"
                style={{ width: `${userProgress.sql}%` }}
            ></div>
          </div>
          <button onClick={() => handleUpdateProgress('sql', 80)}>
            Update SQL Progress
          </button>
        </div>
      </div>
  );
};
export default GoalsProgress;
