/**
 * Created by suc on 2017/9/20.
 */
define(['ionic','app'],
  function (ionic,app) {
  if(window.$$appConnfig === 'release' || window.$$appConnfig === 'develop'){
    window.document.addEventListener('deviceready',function onDeviceReady() {
      window.screen.orientation.lock(window.$$appConfig.orientation);
      window.$$appConfig.accountDB = window.sqlitePlugin.openDatabase({name:'account.db',location:'default'});
      window.$$appConfig.accountDB.transaction(function (db) {
      db.executeSql('CREATE TABLE IF NOT EXISTS accountTable (username, password , rememberMe , id)');
      db.executeSql("SELECT * FROM accountTable", [],function (db,res) {
        if(res.rows.length > 0 ){
          window.$$appConfig.appUser = res.rows.item(0);
          window.cookieMaster.setCookieValue(window.$$appConfig.host,'remember-me',window.$$appConfig.appUser.rememberMe,
            function (data) {
            console.log(data);
          },function (error) {
              console.log(error);
            })
        }else {
          db.executeSql("INSERT INTO accountTable (username, password,rememberMe, id) VALUES (?,?,?,?)", ["", "","","LOGIN"]);
          window.$$appConfig.isNewApp = false;
        }

      })

      })
    })
  }else if(window.$$appConnfig == 'debug'){
    window.angualar.bootstrap(document,['zhly']);
  }
})
