import { useState } from "react";
import NewProduct from "../components/NewProduct";
import UpdateProduct from "../components/UpdateProduct";
import UpdateUser from "../components/UpdateUser";

export default function Admin() {
  const [page, setPage] = useState('newProduct');
  return (
    <div className="d-flex w-100 align-items-center justify-between admin" >
      <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem" onClick={() => setPage('updateUser')}>
              <i class="fa fa-user-plus" ></i>
              Update User
            </li>
            <li className="sidebarListItem" onClick={() => setPage('newProduct')}>
              <i class="fa fa-rocket sidebarIcon"></i>
              New Product
            </li>
            <li className="sidebarListItem" onClick={() => setPage('updateProduct')}>
              <i class="fa fa-pen-nib sidebarIcon" ></i>
              Update Product
            </li>

          </ul>
        </div>
      </div>
    </div>
      <div className="wrapper container d-flex">
        {
          page === 'newProduct' && <NewProduct />
        }
        {
          page === 'updateProduct' && <UpdateProduct />
        }
        {
          page === 'updateUser' && <UpdateUser />
        }
      </div>
    </div>
  );
}
