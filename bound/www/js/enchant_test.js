window.onload = function () {
  bearPath = 'img/chara1.png';
  
  var core = new Core(320, 320);
  core.preload(bearPath);
  core.fps = 15;
  
  
  var Bear = Class.create(Sprite, {
    initialize: function(x, y) {
      Sprite.call(this, 32, 32);
      this.x = x;
      this.y = y;
      this.opacity = rand(100) / 100;
      this.frame = 1;
      this.image = core.assets[bearPath];
      
      // x, y, 40フレームかけて動く
      this.tl.moveBy(rand(100), 0, 40, enchant.Easing.BOUNCE_EASEOUT)
        .moveBy(-rand(100), -rand(20), rand(20))
        .fadeOut(20)
        .fadeIn(10)
        .loop();
        
      
      this.on('enterframe', function() {
        if (core.input.left)  this.x -= 5;
        if (core.input.right) this.x += 5;
        if (core.input.up)    this.y -= 5;
        if (core.input.down)  this.y += 5;
      });
      
      // クマを消す
      this.on('touchstart', function() {
        core.rootScene.removeChild(this);
      });
      
      // タッチした場所にクマを移す
/*      core.rootScene.on('touchstart', function(e) {
        this.x = e.x;
        this.y = e.y;
      });
*/      
      core.rootScene.addChild(this);
    }
  });
  
  function rand(n) {
    return Math.floor(Math.random() * n + 1);
  }
  
  
  core.onload = function() {
    var bears = [];
    
    for (var i=0; i < 100; i++) {
      bears[i] = new Bear(rand(320), rand(320));
    };
    
    var enemy = new Sprite(32,32);
    enemy.image = core.assets[bearPath];
    enemy.x = 100;
    enemy.y = 100;
    enemy.frame = 5;
    
    var label = new Label();
    label.x = 280;
    label.y = 5;
    label.color = 'red';
    label.font = '14px "Arial"';
    label.text = '0';
    
    
/*    bear.addEventListener('enterframe', function() {
      // intersect
      if (this.intersect(enemy)) {
//        label.text = 'hit!';
      }
      
      // within（中心点との距離を指定）
      if (this.within(enemy, 10)) {
        label.text = 'HIT';
        core.pushScene(gameOverScene);
        core.stop();
      }
    });
    */
    
    
    var gameOverScene = new Scene();
    gameOverScene.backgroundColor = 'black';
    
    
/*    label.on('enterframe', function() {
      label.text = (core.frame / core.fps).toFixed(2);
    });
*/
    
    // クマアニメーション
/*    bear.addEventListener('enterframe', function() {
      this.x += 5;
      this.frame = this.age % 3 + 5;    // age：spriteが動き始めてからいくつ南フレーム動いたか
      
      if (this.x > 320) this.x = 0;
//      this.rotate(2);
//      this.scale(1.01, 1.01);
    });
*/    
    core.rootScene.addChild(label);
    core.rootScene.addChild(enemy);
  };
  core.start();
  
  
/*  var game = new Game(320, 320);
  game.onload() = function() {
    console.log('test');
    var core = new Core(320, 320);
    core.preload('chara.png');
    // 処理
  };
  game.start();
*/
};