export default [
  {
    path: '/user',
    layout: false,
    routes: [{name: '登录', path: '/user/login', component: './User/Login'},
      {name: '注册', path: '/user/register', component: './User/Register'}
    ],
  },
  {path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome'},
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',//只有access.ts的返回值为true，当前用户才能进入该页面。
    // component: './Admin',//优先展示父组件的内容.需要修改admin.ts
    routes: [
      {path: '/admin/user-manage', name: '用户管理', component: './Admin/UserManage'},
    ],
  },


  {name: '查询表格', icon: 'table', path: '/list', component: './TableList'},
  {path: '/', redirect: '/welcome'},
  {path: '*', layout: false, component: './404'},
  //从上到下一次核对，没有上述路径的其他字符串一律404；
];


// export default [
//   {
//     path: '/user',
//     layout: false,
//     routes: [
//       {
//         path: '/user', routes: [
//           {name: '登录', path: '/user/login', component: './User/Login'},
//           {name: '注册', path: '/user/register', component: './User/Register'}
//         ]
//       },
//       {component: './404'},
//     ],
//   },
//   {path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome'},
//   {
//     path: '/admin',
//     name: '管理页',
//     icon: 'crown',
//     access: 'canAdmin',
//     component: './Admin',
//     routes: [
//       {path: '/admin/user-manage', name: '用户管理', icon: 'smile', component: './Admin/UserManage'},
//       {component: './404'},
//     ],
//   },
//   {name: '查询表格', icon: 'table', path: '/list', component: './TableList'},
//   {path: '/', redirect: '/welcome'},
//   {component: './404'},
// ];

