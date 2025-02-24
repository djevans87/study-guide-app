import {useState} from 'react';
import {Box, Card, CardContent, MenuItem, Select, Typography} from '@mui/material';
import theme from "../../theme";

const Documentation = () => {
    const [language, setLanguage] = useState('');

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const languages = [
        {
            name: 'Python',
            description: 'A high-level, interpreted language known for its simplicity and readability.',
            guide: 'https://docs.python.org/3/tutorial/index.html',
            documentation: 'https://docs.python.org/3/'
        },
        {
            name: 'C#',
            description: 'A modern, object-oriented language developed by Microsoft.',
            guide: 'https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/',
            documentation: 'https://docs.microsoft.com/en-us/dotnet/csharp/'
        },
        {
            name: 'Java',
            description: 'An object-oriented language known for its platform independence and large community.',
            guide: 'https://docs.oracle.com/javase/tutorial/',
            documentation: 'https://docs.oracle.com/javase/'
        },
        {
            name: 'JavaScript',
            description: 'A high-level, dynamic language used for client-side scripting on the web.',
            guide: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps',
            documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            name: 'PHP',
            description: 'A server-side scripting language used for web development.',
            guide: 'https://www.php.net/manual/en/tutorial.php',
            documentation: 'https://www.php.net/manual/en/'
        },
        {
            name: 'C++',
            description: 'A high-performance, compiled language used for systems programming.',
            guide: 'https://www.cplusplus.com/doc/tutorial/',
            documentation: 'https://www.cplusplus.com/doc/'
        },
        {
            name: 'Ruby',
            description: 'A dynamic, object-oriented language known for its simplicity and ease of use.',
            guide: 'https://www.ruby-lang.org/en/documentation/quickstart/',
            documentation: 'https://www.ruby-lang.org/en/documentation/'
        },
        {
            name: 'Swift',
            description: 'A modern, high-performance language developed by Apple.',
            guide: 'https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html',
            documentation: 'https://docs.swift.org/swift-book/'
        },
        {
            name: 'SQL',
            description: 'A standard language for managing relational databases.',
            guide: 'https://www.w3schools.com/sql/',
            documentation: 'https://www.w3schools.com/sql/'
        },
    ];

    return (
        <Box>
            <Typography variant="h3" color="primary" align="center" gutterBottom>
                Developer Resources
            </Typography>
            <Typography variant="h5" color="secondary" align="center" gutterBottom>
                Explore comprehensive guides and resources for popular programming languages, including tutorials, examples, and reference materials to help you learn and improve your coding skills.
            </Typography>
            <Select
                value={language}
                onChange={handleLanguageChange}
                displayEmpty
                renderValue={(selected) => {
                    if (selected === '') {
                        return <em>Select a language</em>;
                    }
                    return selected;
                }}
                sx={{backgroundColor: theme.palette.background.secondary}}
            >
                <MenuItem value="" onClick={() => setLanguage('')}>
                    <em>Clear</em>
                </MenuItem>
                {languages.map((lang) => (
                    <MenuItem key={lang.name} value={lang.name}>
                        {lang.name}
                    </MenuItem>
                ))}
            </Select>
            {language && (
                <Card sx={{mt: 2}}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            {language}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {languages.find((lang) => lang.name === language).description}
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{mt: 2}}>
                            Basic How-To Guide:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <a href={languages.find((lang) => lang.name === language).guide} target="_blank"
                               rel="noopener noreferrer">
                                Click here to view the guide
                            </a>
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{mt: 2}}>
                            Main Documentation:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <a href={languages.find((lang) => lang.name === language).documentation} target="_blank"
                               rel="noopener noreferrer">
                                Click here to view the documentation
                            </a>
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Box>
    );
};

export default Documentation;
