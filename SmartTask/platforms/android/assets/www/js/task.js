/**
 * © 2014 shoarai
 */

/**
 * タスク
 */
var  Task = Backbone.Model.extend({
  defaults: {
    name: '',
    checked: false,
  },
  
  /**
   * チェックを切り替える
   */
  toggleChecked: function() {
    this.set({'checked': !this.get('checked')});
  },
/*  validate: function (attr) {
    if (_.isEmpty(attr.name)) {
      alert("invalid!");
    }
  }
*/
  
});

/**
 * タスク群
 */
var Tasks2 = Backbone.Collection.extend({
  model: Task,
  initialize: function(name) {
    var taskAllString =
      '[' +
        '{"name":"仕事", "tasks":' +
          '[' +
            '{"name":"テスト１", "checked":true},' +
            '{"name":"試してみる", "checked":false}' +
          ']' +
        '},' +
        '{"name":"作曲", "tasks":' +
          '[' +
            '{"name":"テスト２", "checked":true},' +
            '{"name":"試してみる２", "checked":false}' +
          ']' +
        '}' +
      ']';
    var taskAll = JSON.parse(taskAllString);
    
    // タスク群名を設定する
    this.name = name;
  }
});

/**
 * 
 */
var TasksGroup = Backbone.Collection.extend({
  collection: Tasks2,
  taskMenus: ['仕事', '作曲'],         // タスクメニュー
  initialize: function() {
//    localStorage.menu;
    
    var that = this;
    $.each(that.taskMenus, function(index, menu) {
      
    });
    
    var tasks =
      '[' +
        '{"name":"テスト１", "checked":true},' +
        '{"name":"試してみる", "checked":false}' +
      ']';
    
    
  }
});



/**
 * タスク群
 */
var Tasks = Backbone.Collection.extend({
  /**
   * 初期化
   */
  initialize: function(name, tasks) {
    // タスク群名を設定する
    this.name = name;
    
    // タスク群を追加する
    var that = this;
    $.each(tasks, function(index, task) {
      that.addTask(task);
    });
    
    console.log(this.name);
    console.log(this.models);
  },
  
  /**
   * タスク追加
   */
  addTask: function(task) {
    this.add(new Task(
      {'name': task.name},
      {'checked': task.check}
    ));
  },
});


/**
 * 全タスク
 */
var TasksAll = Backbone.Collection.extend({
  /**
   * プロパティ
   */
  currentTasksName: 0,  // 表示中のタスク群名
  taskMenu: [],         // タスクメニュー
  
  /**
   * 初期化
   */
  initialize: function() {
//    this.on({'change: viewingTasksName': this.changeViewingTasksName});

    // ストレージからタスクを取得
//    var taskAllString = localStorage.TasksAll;
    var taskAllString =
      '[' +
        '{"name":"仕事", "tasks":' +
          '[' +
            '{"name":"テスト１", "checked":true},' +
            '{"name":"試してみる", "checked":false}' +
          ']' +
        '},' +
        '{"name":"作曲", "tasks":' +
          '[' +
            '{"name":"テスト２", "checked":true},' +
            '{"name":"試してみる２", "checked":false}' +
          ']' +
        '}' +
      ']';
    var taskAll = JSON.parse(taskAllString);
    
    // 表示位置の初期化
    this.viewingTasksName = taskAll[0].name;
    
    // タスクメニューを設定する
    var that = this;
    $.each(taskAll, function(index, tasks) {
      that.taskMenu.push(tasks.name);
    });
    
    // 表示位置のタスク群を設定する
    $.each(taskAll, function(index, tasks) {
      if (that.currentTasksName === tasks.name) {
        var tasks = tasks.tasks;
        $.each(tasks, function(index, task) {
          that.add(
            new Task({'name': task.name, 'checked': task.checked})
          );
        });
      }
    });
  },
  
  setCurrentTasksName: function() {
    
  },
  
  setCurrentTasks: function() {
    var that = this;
    var tasks;
    
    
  }
  
});