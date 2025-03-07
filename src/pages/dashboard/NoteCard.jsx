import "react";
import { readData, writeData } from "../../dataService/dataService.jsx";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid2, Card, CardContent, Typography, Button, TextField, Container } from "@mui/material";
import "./NoteCard.css";

const NoteCard = () => {
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);
    const currentUser = useSelector((state) => state.currentUser);

    useEffect(() => {
        const loadNotes = async () => {
            const data = await readData(currentUser.username);
            if (data) {
                setNotes(data.noteCards);
            }
        };
        loadNotes();
    }, [currentUser]);

    const handleSave = () => {
        const data = { noteCards: [...notes, { note, createdDate: new Date().toISOString().split('T')[0], lastUpdatedDate: new Date().toISOString().split('T')[0] }] };
        writeData(currentUser.username, data);
        setNotes(data.noteCards);
        setNote('');
    };

    const handleUpdate = (index) => {
        const data = { noteCards: notes.map((noteCard, i) => i === index ? { ...noteCard, note, lastUpdatedDate: new Date().toISOString().split('T')[0] } : noteCard) };
        writeData(currentUser.username, data);
        setNotes(data.noteCards);
        setNote('');
    };

    const handleDelete = (index) => {
        const data = { noteCards: notes.filter((noteCard, i) => i !== index) };
        writeData(currentUser.username, data);
        setNotes(data.noteCards);
    };

    return (
        <Container className="note-card-container"
                   maxWidth="lg"
                   // style={{backgroundImage: `url(${graphic})`,
                   // }}
            >
            <Typography variant="h2"
                        className="note-card-header"
                        color="secondary.contrastText"
                        gutterBottom
            >
                My Notes
            </Typography>
            <div className="note-form">
                <TextField
                    label="New note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="note-input"
                />
                <Button variant="contained" className="note-save-btn" onClick={handleSave}>
                    Save
                </Button>
            </div>
            <Grid2 container spacing={2} className="notes-Grid2">
                {notes.map((noteCard, index) => (
                    <Grid2 item xs={12} sm={6} md={4} key={index}>
                        <Card className="note-card">
                            <CardContent className="note-content">
                                <Typography variant="h5" className="note-text">
                                    {noteCard.note}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className="note-date">
                                    Created: {noteCard.createdDate}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className="note-date">
                                    Last updated: {noteCard.lastUpdatedDate}
                                </Typography>
                            </CardContent>
                            <div className="note-actions">
                                <Button variant="outlined" className="note-update-btn" onClick={() => handleUpdate(index)}>
                                    Update
                                </Button>
                                <Button variant="outlined" className="note-delete-btn" onClick={() => handleDelete(index)}>
                                    Delete
                                </Button>
                            </div>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    );
};

export default NoteCard;
