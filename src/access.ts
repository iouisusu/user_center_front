/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { currentUser?: API.CurrentUser } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    //是否有管理员权限
    //定义多级管理员
    canAdmin: currentUser && currentUser.userRole === 1,
  };
}
