import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p> Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          doloremque?
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
          blanditiis quis voluptatem, animi, non vero suscipit aperiam molestias
          est, quos dolorem itaque mollitia. Illum non ea velit praesentium,
          quisquam dicta commodi nemo expedita molestiae! Optio, corrupti dicta
          architecto consequuntur consequatur nostrum sed repellendus tempora?
          Ab consectetur culpa modi suscipit accusantium. Hic, voluptatem eum.
          Quibusdam, numquam nihil. Obcaecati veritatis incidunt nesciunt totam
          repudiandae exercitationem similique quod nisi amet ea ducimus modi
          qui autem corrupti provident tempore laboriosam, alias mollitia?
          Nostrum, est nemo. Impedit quod deleniti velit ab et, fugit
          voluptatibus libero repellat, obcaecati aperiam architecto expedita in
          cum, est blanditiis nemo.
        </p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
};

export default Single;
