var express = require('express');
var router = express.Router();
var app = express();
var request = require('request');
var cheerio = require('cheerio');
const superagent = require('superagent')
var config = require('../model/config');
require('superagent-charset')(superagent)
const async = require('async');
var router = express.Router();
// 实现与MySQL交互
var mysql = require('mysql');
var config = require('../model/config');
// 使用连接池，提升性能
var pool = mysql.createPool(config.mysql);
var db = mysql.createPool(config.mysql);




router.get('/', function (req, res, next) {
  res.render('movie', {
    title: 'movie'
  });
});
// 自定义跨域中间件
var allowCors = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};
app.use(allowCors); //使用跨域中间件


var bodyParser = require('body-parser'); //解析,用req.body获取post参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

var url = require("url"); //解析url为对象
var querystring = require('querystring'); //解析如‘a=1&b=2’为对象
 






var AppID = 'wx6fe7d*****51e9b2';
var AppSecret = 'cb2e145a8******fdf47d60d1f29';



//第三方登录
app.post('/appUnionLogin', function(req, res){
  console.log(req.query)
  console.log(req.body)
  var $sql = "select * from users where openid=?";
  var $sql2 = "select name,birthday,date,id,faceImage,sex from users where openid='" + req.body.openid+ "'";
  var $sql1 = "INSERT INTO users( name,username,date,faceImage,sex,openid) VALUES(?,?,?,?,?,?)";
  pool.getConnection(function (err, connection) {
    connection.query($sql, req.body.openid, function (err, result) {
      console.log('result.length :', result.length);
      if (result.length) {
        console.log("账号存在");
       connection.query($sql2, function (err, data) {
          if (err) {
            console.log("错误", err) //我们打印出，错误信息  
          } else {
            result = {
              code: 200,
              data
            };
            res.send(result);
          }

        })
      }else{
        console.log("账号不存在");
        var sd = require('silly-datetime');
        var myname=Math.ceil(Math.random(100)*10000);
        var time = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
        var faceImage=req.body.avatarUrl;
        connection.query($sql1, [req.body.nickName,req.body.nickName, time,faceImage,"-1",req.body.openid], function (err, result) {
          console.log("插入账号");
          connection.query($sql2, function (err, data) {
           console.log('data :', data);
            if (err) {
              console.log("错误", err) //我们打印出，错误信息  
            } else {
              result = {
                code: 200,
                data
              };
              res.send(result);
            }
  
          })
        })
      }
  })
  })
})


//路由
app.post('/get_wx_access_token', function(req, res){
  console.log('req.body :', req.body);
  console.log('req.query.code :', req.query.code);
  //拿到前台给的code后，发送请求
if(req.query.code) {
  let options = {
      method: 'POST',
      url: 'https://api.weixin.qq.com/sns/jscode2session?',
      formData: {
          appid: AppID,
          secret:AppSecret,
          js_code: req.query.code,
          grant_type: 'authorization_code'
      }
  };

  request(options, (error, response, body) => {
      if(error) { //请求异常时，返回错误信息
          res.json({
              "status": "error",
              "code": "ChasenKaso原创文章，转载请注明出处"
          })
      } else {
        console.log('body :', body);
          //返回值的字符串转JSON
          let _data = JSON.parse(body);
          console.log('_data.openid :', _data.openid);
          if (_data.openid) {
            var $sql = "select * from users where openid=?";
            var $sql2 = "select name,birthday,date,id,faceImage,sex from users where openid='" + _data.openid + "'";
            var $sql1 = "INSERT INTO users( name,username,date,faceImage,sex,openid) VALUES(?,?,?,?,?,?)";
            pool.getConnection(function (err, connection) {
              connection.query($sql, [_data.openid], function (err, result) {
                console.log('result.length :', result.length);
                if (result.length) {
                  console.log("账号存在");
                 connection.query($sql2, function (err, data) {
                    if (err) {
                      console.log("错误", err) //我们打印出，错误信息  
                    } else {
                      result = {
                        code: 200,
                        data
                      };
                      res.send(result);
                    }
          
                  })
                }else{
                  console.log("账号不存在");
                  var sd = require('silly-datetime');
                  var myname=Math.ceil(Math.random(100)*10000);
                  var time = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
                  var faceImage=req.body.avatarUrl;
                  connection.query($sql1, [req.body.nickName,req.body.nickName, time,faceImage,"-1",_data.openid], function (err, result) {
                    console.log("插入账号");
                    connection.query($sql2, function (err, data) {
                     console.log('data :', data);
                      if (err) {
                        console.log("错误", err) //我们打印出，错误信息  
                      } else {
                        result = {
                          code: 200,
                          data
                        };
                        res.send(result);
                      }
            
                    })
                  })
                }
            })
            })
           
          }

       }
  });
} else {
  res.json({
      "status": "error",
      "code": "0004"
  });
}
})
//修改用户信息
app.post('/user/updatainfo', function (req, res, next) {
  console.log(req.body.id);

    if(req.body.birthday!=undefined)
    var sql = "update users set birthday = '"+ req.body.birthday +"' where id = " + req.body.id;
    if(req.body.name!=undefined)
   var sql = "update users set name = '"+ req.body.name +"' where id = " + req.body.id;
   if(req.body.sex!=undefined)
   var sql = "update users set sex = '"+ req.body.sex +"' where id = " +req.body.id;
  db.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      result = {
        code: 400,
        msg: '修改失败'
      };
      res.send(result);
    }
    else{
      var $sql2 = "select name,birthday,date,id,faceImage,sex from users where id='" + req.body.id + "'";
      db.query($sql2, function (err, data) {
        if (err) {
          console.log("错误", err) //我们打印出，错误信息  
        } else {
          result = {
            code: 200,
            msg: '修改成功',
            data
          };
          res.send(result);
        }

      })
      console.log("修改成功");
    
    }
  })
});


//用户注册/登录
app.post('/login/userLogin', function (req, res, next) {
  var test = [];
  var username = req.body.username; //获取前台请求的参数
  var password = req.body.password;
 
  pool.getConnection(function (err, connection) {
    //先判断该账号是否存在
    var $sql = "select * from users where username=?";
    connection.query($sql, [username], function (err, result) {
      var resultJson = result;
      var sd = require('silly-datetime');
      var time = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
      var faceImage="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png";
      if (resultJson.length == 0) {
        var myname=Math.ceil(Math.random(100)*10000);
        var $sql1 = "INSERT INTO users( name,username, password,date,faceImage,sex) VALUES(?,?,?,?,?,?)";
        var $sql2 = "select name,birthday,date,id,faceImage,sex from users where username='" + username + "'";
        connection.query($sql1, [myname,username, password, time,faceImage,"-1"], function (err, result) {
          if (result) {
            connection.query($sql2, function (err, data) {
              if (err) {
                console.log("错误", err) //我们打印出，错误信息  
              } else {
                result = {
                  code: 200,
                  msg: '注册成功',
                  data
                };
                res.send(result);
              }
    
            })
          } else {
            result = {
              code: 400,
              msg: '注册失败'
            };
            res.send(result);
          }
        });
        // 以json形式，把操作结果返回给前台页面
      } else { //账号存在，可以登录，进行密码判断
        var $sql1 = "select password from users where username=?";
        var $sql2 = "select name,birthday,date,id,faceImage,sex from users where username='" + username + "'";
        connection.query($sql, [username], function (err, result) {
          var temp = result[0].password; //取得数据库查询字段值
          console.log(temp + "temp");
          if (temp == password) {
            connection.query($sql2, function (err, data) {
              if (err) {
                console.log("错误", err) //我们打印出，错误信息  
              } else {
                result = {
                  code: 200,
                  msg: '登录成功',
                  data
                };   
                res.send(result);
              }

            })
          } else {
            result = {
              code: 400,
              msg: '登录失败'
            };
            console.log(result);
            res.send(result);
          }
        });
      }
    });
  });
});


const multer = require('multer');
//const upload = multer({dest:path.join(__dirname,'./public/uploads')});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/',express.static('views'));


 
 
//图片下载
app.get('/public/uploads/*', function (req, res) {
  res.sendFile( __dirname + "/" + req.url );
  console.log("Request for " + req.url + " received.");
})

//图片上传
var fs = require('fs');
var formidable = require("formidable");
app.post('/upload/:id', function(req, res, next) {
  var form = new formidable.IncomingForm();
  form.uploadDir = "./public/upload/temp/"; //改变临时目录
  form.parse(req, function(error, fields, files) {
      for (var key in files) {
          var file = files[key];
          var fName = (new Date()).getTime();
          switch (file.type) {
              case "image/jpeg":
                  fName = fName + ".jpg";
                  break;
              case "image/png":
                  fName = fName + ".png";
                  break;
              default:
                  fName = fName + ".png";
                  break;
          } 
          var uploadDir = "./routes/public/uploads/" + fName;
          fs.rename(file.path, uploadDir, function(err) {
              if (err) {
                console.log(err);
                
              }
              else{
                var path="http://localhost:8000/public/uploads/"+fName;
                var sql1 = "update users set faceImage = '"+ path+"' where id = " + req.params.id;
                db.query(sql1, function (err, data) {
                  if (err) {
                    console.log(err);
                    result = {
                      code: 400,
                      msg: '修改失败'
                    };
                    res.send(result);
                  }
                  else{
                    var $sql2 = "select name,birthday,date,id,faceImage,sex from users where id='" + req.params.id + "'";
                    db.query($sql2, function (err, data) {
                      if (err) {
                        console.log("错误", err) //我们打印出，错误信息  
                      } else {
                        result = {
                          code: 200,
                          msg: '修改成功',
                          data
                        };
                        res.send(result);
                      }
              
                    })
                    console.log("修改成功");
                  
                  }
                })
              }
              console.log("")
            
             
             
             
            

          })

      }
  });
});










//电影详情
const movie_detail = require('./../data/movie_detail.json').data;
app.post('/movie/movie_detail', function (req, res) {
  let movie_deta = [];
  var id = req.body.id; //获取前台请求的参数
  console.log(req.body.id);
  for (let i = 0; i < movie_detail.length; i++) {
    let detail = movie_detail[i];
    if (i == req.body.id) {
      movie_deta.push({
        id: detail.id,
        number: detail.number,
        title: detail.title,
        type: detail.type,
        scoe: detail.scoe,
        time: detail.time,
        actor: detail.actor,
        video_url: detail.video_url,
        date: detail.date,
        content: detail.content,
        image_url: detail.image_url
      })
    }
  }
  res.send(movie_deta);
  //  res.send(req.params.id);
})


//猜你喜欢
const movie_guess = require('./../data/guess_like.json').data;
app.post('/movie/guesslike/', function (req, res) {
  let guess_like = [];
  for (let i = 0; i < movie_guess.length; i++) {
    let hot_movie = movie_guess[i];
    db.query(`INSERT INTO douban (id, title, type, scoe, date, image_url) VALUE('${hot_movie.id}', '${hot_movie.title}','${hot_movie.type}','${hot_movie.scoe}','${hot_movie.date}','${hot_movie.image_url}')`, function (err, data) {
      if (err) {
        console.log(err);
      }
    })

  }
  db.query('SELECT * FROM douban ORDER BY rand() LIMIT 5;', function (err, data, fields) {
    if (err) {
      console.log(err);
      return;
    };
    // console.log(data);
    res.send(data);
  });

  //ɾ
  var userDelSql = 'delete from douban';
  db.query(userDelSql, function (err, result) {

    if (err) {
      console.log('[DELETE ERROR] - ', err.message);
      return;

    }
    console.log('-------------DELETE--------------');
  });
})

//电影预报
const movie_notice = require('./../data/movie_notice.json').data;
app.post('/movie/movienotice/', function (req, res) {
  let notice_movice = [];
  for (let i = 0; i < movie_notice.length; i++) {
    let hot_movie = movie_notice[i];
    notice_movice.push({
      id: hot_movie.id,
      trailer: hot_movie.video_url
    })
  }
  res.send(notice_movice);
});

//热门电影
const movie_hot = require('./../data/hot_movielist').data;
app.post('/movie/hotmovielist/', function (req, res) {
  let hot_movie_list = [];
  for (let i = 0; i < movie_hot.length; i++) {
    let hot_movie = movie_hot[i];
    hot_movie_list.push({
      id: hot_movie.id,
      title: hot_movie.title,
      type: hot_movie.type,
      score: hot_movie.scoe,
      date: hot_movie.date,
      cover: hot_movie.image_url
    })
  }
  res.send(hot_movie_list);
})
// var db = mysql.createPool(config.mysql);  
const movie_show = require('./../data/show_up.json').data;
const movie_lunbo = require('./../data/lunbo.json').data;
app.post('/movie/lunbo/', function (req, res) {
  // 1. 定义临时数组
  let temp_arr = [];
  // 2. 遍历
  for (let i = 0; i < movie_lunbo.length; i++) {
    // 2.1 取出单个数据对象
    let movie_s = movie_lunbo[i];
    // 2.2 取出数据表中对应的字段
    temp_arr.push({
      id: movie_s.id,
      img: movie_s.image_url
    });
    // 2.3 合并到大的数
  }
  res.send(temp_arr);
});







var server = app.listen(8000, function () {
  console.log('listening at 8000');
});


module.exports = router;