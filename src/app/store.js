import { configureStore } from '@reduxjs/toolkit'
import campaignReducer from '../features/campaignSlice'
import userReducers from '../features/userSlice'

const store = configureStore({
    reducer: {
        campaign: campaignReducer,
        users: userReducers
    }
})

export default store