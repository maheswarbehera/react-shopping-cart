import React from 'react'
import MainLayout from '../../Layouts/Mainlayout'
import { useAuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom';
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, LogIn } from 'lucide-react'  
import logo from '../../assets/images/ecommerce-logo-free-png.webp'

const Dashboard = () => {
  const { user, handleLogout } = useAuthContext();

  return (
    <MainLayout>
       <aside className="flex h-600 w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
      <Link to="/">
      <span>
          <img src={logo} alt="" width={"50px"} />
          </span>
      </Link>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">analytics</label>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="#"
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="/order"
            >
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">My Order</span>
            </Link>
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">content</label>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="#"
            >
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Blogs</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="#"
            >
              <BellRing className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Notifications</span>
            </Link>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to="#"
            >
              <Paperclip className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Checklists</span>
            </Link>
          </div>
        </nav>
        <div className="mt-6">
          <div className="mt-6 flex items-center justify-between">
            <Link to="#" className="flex items-center gap-x-2">
              <img
                className="h-7 w-7 rounded-full object-cover"
                src={user?.photoURL}
                alt={user?.displayName}
              />
              <span className="text-sm font-medium text-gray-700">{user && user?.displayName}</span>
            </Link>
            <button title='Logout'
              onClick={handleLogout}
              className="rotate-180 text-gray-800 transition-colors duration-200 hover:text-gray-900"
            >
              <LogIn className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
    </MainLayout>
  )
}

export default Dashboard

// <div className='pt-5'>
//         <div className="row">
//           <div className="col-2">
//             <div className="sidebar">
//               <div className='icon d-flex justify-content-between align-baseline'>
                
//                 <Link  to='/dashboard'><span >Dashboard</span></Link>                
//               </div>
//               <div className='icon mt-3 text-center'>
//               <Link  to='/profile'><span >Profile</span></Link>
//               <Link  to='/order'><span >My Order</span></Link>
//               </div>
//             </div>
//           </div>
//           <div className="col-8">
//             <h1>Welcome To Dashboard</h1>
//             <h4 className='text-center'>Hello ! {user && user?.displayName}</h4>
//             <img src={user?.photoURL} alt='' className=' justify-content-end' width={'80px'} />
//             <button onClick={handleLogout} className="btn btn-info text-light logout">Logout</button>
            
//           </div>
//         </div>
//       </div>