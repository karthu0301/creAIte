import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import MainLayout from './components/MainLayout'
import ProfilePage from './pages/ProfilePage'
import InsightsPage from './pages/InsightsPage';
import IdeationPage from './pages/IdeationPage';
import SchedulePage from './pages/SchedulePage';
import EditPage from './pages/EditPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
   <Route index element={<ProfilePage />} />
   <Route path='/insights' element={<InsightsPage />} />
   <Route path='/ideation' element={<IdeationPage />} />
   <Route path='schedule' element={<SchedulePage />} />
   <Route path='/edit' element={<EditPage />} />
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App
