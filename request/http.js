let prefix;
switch(process.env.NODE_ENV){
  case 'development': prefix = '';break;
  case 'production': prefix = '';break;
}


export function ddget(url, params , type=1){
  let pathtype = type==1?'get':'post';
  return new Promise((resolve, reject)=>{
    dd.httpRequest({
      url: prefix + url,
      method: pathtype,
      data: params,
      dataType: 'json',
      timeout: 120000,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      },
      success: function(res){
        resolve(res);
      },
      fail: function(res){
        console.log(res);
        reject(res);
      }
    })
  })
}