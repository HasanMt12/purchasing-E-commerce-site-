import { Link } from "react-router-dom";


const DropDown = () => {
    return (
          <div className='flex justify-end '>
               <div className="dropdown dropdown-bottom mr-26 dropdown-end">
                    <label tabIndex={0} htmlFor="dashboard-drawer" className="btn rounded btn-sm mt-2 mr-6  btn-slate-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                        </svg>
                        </label>
                      <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"tabIndex={0} >
                        <li><Link to="/dashboard">My Orders</Link></li>

                              
                      
                             <li><Link to="/dashboard/users">All Users</Link></li>
                        
                           
                       </ul>
                    

                   

                </div></div>
    );
};

export default DropDown;