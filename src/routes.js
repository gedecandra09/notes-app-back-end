const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHanlder,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    // menyimpan catatan
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    // menampilkan catatan
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    // menampilkan detail catatan
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    // mengedit catatan
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHanlder,
  },
  {
    // menghapus catatan
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
