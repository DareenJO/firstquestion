"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index = (0, express_1.default)();
let pers = [];
index.get('/person', (req, res, next) => {
    return res.json(pers);
});
index.post('/person', (req, res) => {
    const newpers = req.body;
    pers.push(newpers);
    return res.json({
        name: "name added",
    });
});
index.put('/person/:id', (req, res) => {
    const updatedname = req.body;
    const { id } = req.params;
    const updatednameslist = pers.filter((persons) => {
        return persons.id === id;
    });
    updatednameslist.push(updatedname);
    pers = updatednameslist;
    return res.json({
        message: 'names updated !',
    });
});
index.delete('/person/:id', (req, res) => {
    const { id } = req.params;
    const delname = pers.filter(person => {
        person.id !== id;
    });
    pers = delname;
    return res.json({
        message: 'name deleted ',
    });
});
//--------------------------------------------------------
let grade1 = [];
index.get('/grade', (req, res, next) => {
    return res.json(grade1);
});
index.post('/grade', (req, res) => {
    const newgrade = req.body;
    grade1.push(newgrade);
    return res.json({
        grade: "grade added",
    });
});
index.put('/grade/:id', (req, res) => {
    const updategrade = req.body;
    const { id } = req.params;
    const updategradelist = grade1.filter((grades) => {
        return grades.id === id;
    });
    updategradelist.push(updategrade);
    grade1 = updategradelist;
    return res.json({
        message: 'grades updated !',
    });
});
index.delete('/grade/:id', (req, res) => {
    const { id } = req.params;
    const delgrade = grade1.filter(grades => {
        grades.id !== id;
    });
    grade1 = delgrade;
    return res.json({
        message: 'grade deleted ',
    });
});
//----------------------------------------------------
let track = [];
index.use(express_1.default.json());
index.get('/tracker', (req, res) => {
    return res.json(track);
});
index.post('/tracker', (req, res) => {
    const newTrack = req.body;
    track.push(newTrack);
    return res.json({
        message: 'track added !',
    });
});
index.put('/tracker/:id', (req, res) => {
    const updatedTracker = req.body;
    const { id } = req.params;
    const updatedtrackerlist = track.filter((tracks) => {
        return tracks.id !== id;
    });
    updatedtrackerlist.push(updatedTracker);
    track = updatedtrackerlist;
    return res.json({
        message: 'tracks updated !',
    });
});
index.delete('/tracker/:id', (req, res) => {
    const { id } = req.params;
    const newTreacks = track.filter((tracks) => {
        return tracks.id !== id;
    });
    track = newTreacks;
    return res.json({
        message: 'tracks deleted !',
    });
});
index.get('/tracker/:title', (req, res) => {
    let key = req.params.title;
    let title = key.replace("-", " ");
    let searchVal = track.filter((tracksa) => {
        return tracksa.title.toLowerCase() === title;
    });
    return res.json(searchVal);
});
index.listen(5000);
