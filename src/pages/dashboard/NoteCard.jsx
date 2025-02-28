import "react";
import {readData, writeData} from "../../dataService/dataService.jsx";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

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
        const data = { noteCards: notes.map((
            noteCard, i) => i ===
            index ? { ...noteCard, note, lastUpdatedDate: new Date().toISOString().split('T')[0] } : noteCard) };
        writeData(currentUser.username, data);
        setNotes(data.noteCards);
        setNote('');
    };

    const handleDelete = (index) => {
        const data = { noteCards: notes.filter((noteCard, i) => i !== index) };
        writeData(currentUser.username, data);
        setNotes(data.noteCards);
    };
//todo make this a grid with cards
    return (
        <div>
            <h2>Notes</h2>
            <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="New note"
            />
            <button onClick={handleSave}>Save</button>
            <ul>
                {notes.map((noteCard, index) => (
                    <li key={index}>
                        <p>{noteCard.note}</p>
                        <p>Created: {noteCard.createdDate}</p>
                        <p>Last updated: {noteCard.lastUpdatedDate}</p>
                        <button onClick={() => handleUpdate(index)}>Update</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default NoteCard;