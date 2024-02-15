import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  books: [],
  selectedBook: null,
  searchTerm: '',
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload)
    },
    selectBook: (state, action) => {
      state.selectedBook = action.payload
    },
    editBook: (state, action) => {
      const { id, title, author, publishYear } = action.payload
      const index = state.books.findIndex((book) => book._id === id)
      if (index !== -1) {
        state.books[index] = { ...state.books[index], title, author, publishYear }
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
  },
})

export const { addBook, deleteBook, selectBook, editBook, setSearchTerm } = bookSlice.actions
export default bookSlice.reducer