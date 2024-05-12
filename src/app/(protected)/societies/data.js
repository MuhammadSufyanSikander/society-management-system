import React from 'react'
const columns = [
  { name: 'NAME', uid: 'name' },
  { name: 'DEPARTMENT', uid: 'department' },
  { name: 'MEMBERS', uid: 'members' },
  { name: 'CNIC', uid: 'cnic' },
  { name: 'ACTIONS', uid: 'actions' },
]

const users = [
  {
    id: 1,
    name: 'Society 1',
    members: '123124124',
    department: 'Computer Science',
    cnic: '11111-1111111-7',
    team: 'Management',

    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com',
  },
  {
    id: 2,
    name: 'Society 1',
    members: '123124124',
    department: 'Software Engineer',
    cnic: '11111-1111111-7',
    team: 'Development',

    age: '25',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com',
  },
  {
    id: 3,
    name: 'Society 1',
    members: '123124124',
    department: 'Computer Science',
    team: 'Development',
    cnic: '11111-1111111-7',

    age: '22',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com',
  },
  {
    id: 4,
    name: 'Society 1',
    members: '123124124',
    department: 'Software Engineer',
    team: 'Marketing',
    cnic: '11111-1111111-7',

    age: '28',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
  },
  {
    id: 5,
    name: 'Society 1',
    members: '123124124',
    department: 'Computer Science',
    team: 'Sales',
    cnic: '11111-1111111-7',

    age: '24',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com',
  },
]

export { columns, users }
