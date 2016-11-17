'use strict';
let db = require('mysql-promise')();
db.configure({
  'host': 'localhost',
  'user': 'root',
  'password': '',
  'database': 'gl-lesson'
});

const indexModel = {
  data(num) {
    let snum = num;
    return (async() => {
      var promise = await new Promise((resolve, reject) => {
        setTimeout(() => {

          resolve(++snum)
        }, 1000)

      });
      let result = new Promise((resolve, reject) => {
        db.query('UPDATE zan SET num = ? where id=1', [promise]).then(function(result) {
          const err = result[0]['changedRows'];
          console.log(err)
          if (err == 0) {
            console.log(err)
            reject({
              msg: 'no'
            })
          } else {
            resolve({
              msg: 'ok'
            })
          }
          // return db.query('SELECT * FROM foo');
        });

      });
      return result;

    })(); //async 函数
  }

};
export
default indexModel;