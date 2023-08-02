import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import {Box} from '@mui/material';
import {Feed, VideoDetail, ChannelDetail, SearchFeed, Navbar} from './components'



const router = createBrowserRouter([
    {   
        element: <Navbar />,
        children: [
            {
                path: '/',
                element: <Feed />,
            },
            {
                path:'/video/:id',
                element: <VideoDetail />
            },
            {
                path:'/channel/:id',
                element: <ChannelDetail />
            },
            {
                path:'/search/:searchTerm',
                element: <SearchFeed />
            }            
        ]
    }
])

const App = (props) => {
    return (
        <Box sx={{backgroundColor: '#000'}}>
            <RouterProvider router={router} >
            </RouterProvider>
        </Box>
    )
}

export default App
