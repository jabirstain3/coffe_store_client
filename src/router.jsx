import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AddCoffe from './component/addCoffe/AddCoffe';
import UpdateCoffe from './component/updateCoffe/UpdateCoffe';

const baseURL = import.meta.env.VITE_SERVER_BASE_URL

const router =createBrowserRouter([
    {
        path:"/",
        element: <App></App>,
        loader: () => fetch(`${baseURL}/coffee`)
    },
    {
        path:"/addcoffe",
        element: <AddCoffe></AddCoffe>,
    },
    {
        path:"/updatecoffe/:id",
        element: <UpdateCoffe></UpdateCoffe>,
        loader: ({params}) => fetch(`${baseURL}/coffee/${params.id}`)
    }

])

export default router;