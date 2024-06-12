import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AddCoffe from './component/addCoffe/AddCoffe';
import UpdateCoffe from './component/updateCoffe/UpdateCoffe';

const router =createBrowserRouter([
    {
        path:"/",
        element: <App></App>,
        loader: () => fetch('https://coffe-store-server-j4bumqy88-al-jabirs-projects.vercel.app/coffee')
    },
    {
        path:"addcoffe",
        element: <AddCoffe></AddCoffe>,
    },
    {
        path:"/updatecoffe/:id",
        element: <UpdateCoffe></UpdateCoffe>,
        loader: ({params}) => fetch(`https://coffe-store-server-j4bumqy88-al-jabirs-projects.vercel.app/coffee/${params.id}`)
    }

])

export default router;