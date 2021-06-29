const express = require('express');
const router = express.Router();

const Note= require('../models/Note');

router.get('/notes/add', (req, res) => {
    res.render('notes/new-note');
});

//redirect te envia al metodo get inicial


router.post('/notes/new-note', async (req, res) => {
    const { title, description } = req.body;
    const errors = [];
    if (!title) {
        errors.push({ text:'Please enter a title'});
    }
    if (!description) {
        errors.push({ text: 'Please enter a description' });
    }
    if (errors.length > 0) {
        res.render('notes/new-note', {
            errors,
            title,
            description
        });
    } else {
        const newNote = new Note({ title, description });
        await newNote.save();
        res.redirect('/notes')
    }
    
});


router.get('/notes', async (req, res) => {
    await Note.find().then(documents => {
        const contexto = {
            notesDB: documents.map(document => {
            return {
                title: document.title,
                description: document.description,
                date: document.date
            }
          })
        }
        
        res.render('notes/notes', {notesDB: contexto.notesDB }) 
      })
  })

module.exports = router;