import { createSlice } from '@reduxjs/toolkit'
import { rows } from '../mock'
const campaignSlice = createSlice({
    name: 'campaign',
    initialState: {
        campaignList: rows,
    },
    reducers: {
        addCampaign: (state, actions) => {
            const rc = [...state.campaignList, actions.payload]
            state.campaignList = rc
        }
    }
})

export default campaignSlice.reducer
export const {addCampaign} = campaignSlice.actions