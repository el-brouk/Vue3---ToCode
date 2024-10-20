export function localStorageUpdateNotes(notesList) {
  if (notesList) {
    localStorage.setItem('notes', JSON.stringify(notesList))
  }
}
