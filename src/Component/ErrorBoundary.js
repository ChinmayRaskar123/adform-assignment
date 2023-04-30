import { Alert } from '@mui/material'
import './ErrorBoundary.scss'
export const ErrorBoundary = ({error}) => {
    return (
    <div role="alert">
        <Alert severity="error">This is an error alert — check it out! {error}</Alert>
    </div>
    )
    
}