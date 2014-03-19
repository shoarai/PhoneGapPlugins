/**
 * © 2014 shoarai
 */

/**
 * タスクView
 */
var TasksMenuView = Backbone.View.extend({
  /**
   * エレメント
   */
  el: '#main-header ul',
  
  /**
   * 初期化
   */
  initialize: function() {
  }
});


/**
 * タスクView
 */
var TaskView = Backbone.View.extend({
  
  initialize: function() {
    console.log(this.model.get('name'));
    console.log(this.el);
    this.$el.append(this.model.get('name'));
    
  }
});

/**
 * タスク群View
 */
var TasksView = Backbone.View.extend({
  el: '#main-content ul',
  
  /**
   * 初期化
   */
  initialize: function() {
    
    this.listenTo(this.collection, 'add', this.initialize);

    // タスク群を描画する
    var that = this;
/*    $.each(this.collection.models, function(index, model) {
      var html = '<li></li>';
      that.$el.append(html).append(model.get('name')).listview('refresh');
    });*/
    var html = '';
    $.each(this.collection.models, function(index, model) {
      console.log(model.get('name'));
      html += '<li>' + model.get('name') + '</li>';
    });
    this.$el.append(html).listview('refresh');
  }
});


/**
 * タスクビュー
 */
var AppView = Backbone.View.extend({
  /**
   * プロパティ
   */
  el: '#main-page',
  collection: new TasksAll(),
  events: {
    'click #main-header ul li': 'onClickMenu',
//    'click #complete': 'onClickMenu',
//    'click #edit': 'onClickMenu'
  },
  
  /**
   * 初期化
   */
  initialize: function() {
    // タスクメニューViewの描画
/*    $('#main-header ul').append(
      new TasksMenuView(
        {collection: this.collection}
      )
    );
*/    
    
    // タスクメニューを描画する
    var html = '';
    $.each(this.collection.taskMenu, function(index, menu) {
      html += '<li>' + menu + '</li>';
    });
    $('#main-header ul').append(html).listview('refresh');
    
    
    // タスク群を描画する
    $('#main-content ul').append(
      new TasksView({collection: this.collection})
    );
  },
  
  /**
   * タスクニューをクリックしたとき
   * @param {Object} event
   */
  onClickMenu: function(event) {
    var text = $(event.currentTarget).text();
    this.collection.setCurrentTasksName(text);
  }
  
  
});