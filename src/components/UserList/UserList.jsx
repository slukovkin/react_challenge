import React from 'react'
import { UserItem } from '../UserItem/UserItem'

export const UserList = ({users, remove}) => {
  return (
    <div>
      {users.map((user) => 
        <UserItem key={user.id} user={user} remove={remove} />
      )}
    </div>
  )
}
