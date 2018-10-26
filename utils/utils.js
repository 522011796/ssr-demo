export default{
  /**
   * 判断服务器端的cookie内容
   * 中间件无法获取到前端的cookie，所以才用header的方式
   * 如果是前端，直接通过js-cookie的方式
   */
  getcookiesInServer(req) {
    let service_cookie = {};
    req && req.headers.cookie && req.headers.cookie.split(';').forEach(function (val) {
      let parts = val.split('=');
      service_cookie[parts[0].trim()] = (parts[1] || '').trim();
    });
    return service_cookie;
  }
}
