import React from "react";
import PropTypes from "prop-types";
import logo from '../../../assets/img/profile-pic.jpg'

function index(props) {
  return (
    <>
      <div className="card flex gap-4 items-center mb-2 bg-white p-4 rounded-md">
        <img
          src={logo}
          alt="pic-students"
          className="w-28 rounded-full"
        />
        <span className="w-64">
          <p>Nama : {props.name}</p>
          <p>TTL : {props.ttl}</p>
          <p>Alamat : {props.address}</p>
        </span>
      </div>
    </>
  );
}

index.propTypes = {};

export default index;