import { configureStore } from '@reduxjs/toolkit'
import campaignReducer from '../features/campaignSlice'

const store = configureStore({
    reducer: {
        campaign: campaignReducer
    }
})

export default store