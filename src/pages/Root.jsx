import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <header>
         my header
      </header>
       <Outlet />
    </>
  );
}

export default Root;
