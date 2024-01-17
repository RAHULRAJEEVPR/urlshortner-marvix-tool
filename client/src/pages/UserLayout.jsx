
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
export default function UserLayout() {
  return (
    <div>
       <div className='z-100'>

< NavBar/>
  </div>
<div>{<Outlet />}</div>
<Footer/>
</div>
    
  )
}
