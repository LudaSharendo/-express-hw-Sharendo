
const express = require('express');
const router = express.Router();
let books = []; 
let currentId = 1; 
router.get('/', (req, res) => {
  res.status(200).json(books);
});
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.status(200).json(book);
});
router.post('/', (req, res) => {
  const { title, author, year } = req.body;
  
  if (!title || typeof title !== 'string' || title.length < 1 || title.length > 100) {
    return res.status(400).json({ message: "Invalid title" });
  }

  const newBook = { id: currentId++, title, author, year };
  books.push(newBook);
  res.status(201).json(newBook);
});
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  const updatedBook = { id, ...req.body };
  books[index] = updatedBook;
  res.status(200).json(updatedBook);
});
router.patch('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  const updatedData = req.body;
  books[index] = { ...books[index], ...updatedData };
  res.status(200).json(books[index]);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  books.splice(index, 1);
  res.status(204).send(); 
});

module.exports = router;