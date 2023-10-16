import React from 'react'
import { useAppSelector } from 'shared/hooks/reducer';
import Layout from 'widgets/layout';
import { selectUser } from 'widgets/loginForm/model/helpers';

const UserPage = () => {
  const user = useAppSelector(selectUser);

  return (
    <Layout>
          <div className='mt-2'>{user?.username}</div>

    </Layout>
  )
}

export default UserPage