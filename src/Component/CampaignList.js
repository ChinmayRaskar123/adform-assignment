import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios"
import { useEffect, useState } from "react"
import { reformat } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import {addCampaign} from '../features/campaignSlice'
import { TextField } from '@mui/material';
import './Campaign.scss'

export const CampaignList = () => {
    const [initialLoad, setInitialLoad] = useState(false)
    const [records, setRecords] = useState([])
    
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
        const [searchCampaignByName, setSearchCampaignByName] = useState('');

    const campaignList = useSelector((state) => state.campaign.campaignList)
    const dispatch = useDispatch()

    const columns = [
        { 
          field: 'campaignName', 
          headerName: 'Name', 
          width: 150 
        },
        {
          field: 'name',
          headerName: 'User name',
          width: 150 
        },
        {
          field: 'startDate',
          headerName: 'Start Date',
          type: 'Date',
          width: 110 
        },
        
        {
          field: 'endDate',
          headerName: 'End Date',
          type: 'Date',
          width: 110 
        },
        {
            field: 'flag',
            headerName: 'Active',
            width: 150,
            editable: true,
        },
        {
            field: 'budget',
            headerName: 'Budget',
            type: 'number',
            width: 150,
            editable: true,
        },
      ];
      
      const handleStartDateChange = (newValue) => {
        setStartDate(newValue)
        console.log(dayjs(newValue).format('M/D/YYYY'));

        setRecords(records.filter(rc => {
          if (rc.startDate === dayjs(newValue).format('M/D/YYYY').toString()) {
            return rc
          }  
          }))              
      }

      const handleEndDateChange = (newValue) => {
        setEndDate(newValue)
        console.log(dayjs(newValue).format('M/D/YYYY'));

        setRecords(records.filter(rc => {
          if (rc.endDate === dayjs(newValue).format('M/D/YYYY').toString()) {
            return rc
          }  
          })) 
      }

      const handleSearchCampaignByName = () => {
        if (searchCampaignByName === '') {
          setRecords(reformat(campaignList))
        } else {
          setRecords(records.filter(rc => {
            if (rc.name === searchCampaignByName) {
              return rc
            }  
           }))      
        }       
      }

    useEffect(() => {
      const data = reformat(campaignList)
      setRecords(data)        
    }, [campaignList])
    
    return (
      <div>
        <div className="d-flex justify-content-between p-4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
              <DatePicker
                label="Start-Date"
                value={startDate}
                onChange={(newValue) => handleStartDateChange(newValue)}
              />
              <DatePicker
                label="End-Date"
                value={endDate}
                onChange={(newValue) => handleEndDateChange(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <div className="d-flex justify-content-end">
            <TextField      
              id="outlined-helperText"
              label="Search By Name"
              defaultValue="Default Value"
              value={searchCampaignByName}
              onChange={(e) => setSearchCampaignByName(e.target.value)}
            />
            <button onClick={() => handleSearchCampaignByName()}>
          Search
        </button>
          </div>
        </div>
        <Box sx={{ height: 700, width: '100%' }}>
          <DataGrid
            rows={records}
            hideFooterPagination={true}
            columns={columns}
            initialState={{
                
            }}
            disableRowSelectionOnClick
          />
        </Box>         
        <button onClick={() => dispatch(addCampaign({id:11,name:"Realbridge",startDate:"3/5/2021",endDate:"10/2/2026",Budget:505602, userId: 5}))}>
          AddCampaign
        </button>
      </div>
    )
}