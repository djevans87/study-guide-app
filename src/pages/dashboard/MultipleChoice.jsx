import 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage, changeDifficulty, nextQuestion, previousQuestion, incrementScore } from "../../state_management/reducers/QuizSlice.jsx";
import { MULTIPLE_CHOICE_QUESTIONS } from "../../components/common/Constants.jsx";
import { RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

const MultipleChoiceQuiz = () => {
    const dispatch = useDispatch();
    const { language, difficulty, currentQuestion, score } = useSelector((state) => state.quiz);
    const currentQuestions = MULTIPLE_CHOICE_QUESTIONS[language][difficulty];

    const handleLanguageChange = (event) => {
        dispatch(changeLanguage(event.target.value));
    };

    const handleDifficultyChange = (event) => {
        dispatch(changeDifficulty(event.target.value));
    };

    const handleNextQuestion = () => {
        dispatch(nextQuestion());
    };

    const handlePreviousQuestion = () => {
        dispatch(previousQuestion());
    };

    const handleAnswerChange = (event) => {
        if (event.target.value === currentQuestions[currentQuestion].answer) {
            dispatch(incrementScore());
        }
    };

    return (
        <div>
            <h1>Multiple Choice Quiz</h1>
            <form>
                <label>
                    Select a programming language:
                    <select value={language} onChange={handleLanguageChange}>
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                    </select>
                </label>
                <br />
                <label>
                    Select a difficulty level:
                    <select value={difficulty} onChange={handleDifficultyChange}>
                        <option value="easy">Easy</option>
                        <option value="med">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>
                <br />
                <p>Question: {currentQuestions[currentQuestion].question}</p>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue={currentQuestions[currentQuestion].options[0]}
                    name="radio-buttons-group"
                    onChange={handleAnswerChange}
                >
                    {currentQuestions[currentQuestion].options.map((option, index) => (
                        <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
                    ))}
                </RadioGroup>
                <Button variant="contained" onClick={handleNextQuestion}>
                    Next Question
                </Button>
                <Button variant="contained" onClick={handlePreviousQuestion}>
                    Previous Question
                </Button>
                <p>Score: {score}</p>
            </form>
        </div>
    );
};

export default MultipleChoiceQuiz;
