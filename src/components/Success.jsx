import React from 'react'
import { useRoutes } from 'react-router-dom';

function Success() {
  const routers = useRoutes();
  return (
    <div>Success {routers.quary.name}
      <p>{routers.quary.email}</p>
    </div>
  )
}

export default Success
