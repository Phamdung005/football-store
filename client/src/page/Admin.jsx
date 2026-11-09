import { Outlet, Link } from 'react-router-dom';

function Admin() {
    return (
        <>
            <div className="grid grid-cols-5 min-h-screen">
                <div className="col-span-1 bg-slate-900 sticky top-0 h-screen">
                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-bold text-2xl flex p-4 text-white">Xin chao Admin</h2>
                            <button className="mr-4"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.99994 10 6 11.9999l1.99994 2M11 5v14m-7 0h16c.5523 0 1-.4477 1-1V6c0-.55228-.4477-1-1-1H4c-.55228 0-1 .44772-1 1v12c0 .5523.44772 1 1 1Z" />
                            </svg>
                            </button>
                        </div>
                        <p className="text-gray-300 ml-4">He thong quan ly football store</p>
                    </div>
                    <div className="text-gray-300 p-4 mb-5">Danh muc</div>
                    <div className="">
                        <ul className="">
                            <li className="h-10 w-full flex items-center mb-4 text-gray-300 hover:bg-gray-600 cursor-pointer"><Link to="/admin/dashboard" className="ml-5 flex gap-5"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd" />
                            </svg>
                                Trang chu</Link></li>
                            <li className="h-10 w-full flex items-center mb-4 text-gray-300 hover:bg-gray-600 cursor-pointer"><Link to="/admin/productmn" className="ml-5 flex gap-5"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z" clip-rule="evenodd" />
                            </svg>
                                San pham</Link></li>
                            <li className="h-10 w-full flex items-center text-gray-300 hover:bg-gray-600 cursor-pointer"><Link to="/admin/usermn" className="ml-5 flex gap-5"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clip-rule="evenodd" />
                            </svg>
                                Nguoi dung</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-4 bg-gray-100 min-h-screen overflow-y-auto">

                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default Admin;