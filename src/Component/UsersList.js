import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { usersColumns } from '../mock';
import { fetchUsers } from '../features/userSlice';
import { useEffect } from 'react';
import { reformatUsersData } from '../utils';
import { ErrorBoundary } from './ErrorBoundary';

export const UsersList = () => {  
  const { loading, users, error } = useSelector((state) => state.users)
  const records = reformatUsersData(users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className="p-4">
      <h1>List of Users</h1>
      {loading && <div>Loading...</div>}
      {!loading && error ? <ErrorBoundary error={error}> </ErrorBoundary> : null}
      {!loading && users?.length ? (
        <Box sx={{ height: 700, width: '100%' }} >
          <DataGrid
            rows={records}
            hideFooterPagination={true}
            columns={usersColumns}
            disableColumnMenu 
            initialState={{
            }}
            disableRowSelectionOnClick
          />
        </Box>   
      ) : null}            
    </div>
  )
}