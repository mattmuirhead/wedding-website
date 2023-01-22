import { createSlice } from '@reduxjs/toolkit'
import localForage from 'localforage'

export const sessionSlice = createSlice({
  name: 'session',
  initialState: {
    user: {},
    loading: true,
  },
  reducers: {
    setSession: (state, action) => {
      localForage.setItem('user', action.payload)
      state.user = action.payload
      state.loading = false
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  },
})

export const { setSession, setLoading } = sessionSlice.actions

export default sessionSlice.reducer