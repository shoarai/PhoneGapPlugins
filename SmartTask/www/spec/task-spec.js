



/**
 * タスクのテスト
 */
describe('task', function() {
  describe('initialize', function() {
    var model = null;
    var name = 'タスク名';
    var checked = true;
    
    it('should initialize', function() {
      model = new Task({'name': name});
      expect(model).toBeDefined();
    });
/*    it('should not initialize', function() {
      task = new Task({'name': ''});
      expect(task.get('name')).toBe('');
    });
*/
    it('should initialize the checked', function() {
      model = new Task({'name': name, 'checked': checked});
      expect(model).toBeDefined();
    });
  });
  
  describe('initialize no checked', function() {
    var name = 'タスク名';
    var model = null;
    
    beforeEach(function() {
      model = new Task({'name': name});
    });
    it('should get the name', function() {
      expect(model.get('name')).toBe(name);
    });
    it('should toggle the checked', function() {
      model.toggleChecked();
      expect(model.get('checked')).toBe(true);
    });
  });
});


/**
 * タスク群のテスト
 */
describe('Tasks', function() {
  var collection = null;
  var name = 'タスク群名';
  
  it('should initialize the name', function() {
    collection = new Tasks2(name);
    expect(collection).toBeDefined();
  });
  
  describe('when initialized', function() {
    var collection = null;
    var name = 'タスク群名';
    var taskName = 'タスク名';
    
    beforeEach(function() {
      collection = new Tasks2(name);
    });
    it('should get the name', function() {
      expect(collection.name).toBe(name);
    });
    it('should add the task', function() {
      var model = new Task({'id': 0, 'name': taskName});
      collection.add(model);
      expect(collection.get(0).get('name')).toBe(taskName);
    });
    
/*    describe('when initialized', function() {
      beforeEach(function() {
        var model = new Task({'id': 0, 'name': taskName});
        collection.add(model);
      });
      it('should get the all name of tasks', function() {
        var name = collection.getTaskNameAll();
        expect(collection.name).toBe(name);
      });
    });*/
  });
});

/**
 * タスク群グループのテスト
 */
describe('TasksGroup', function() {
  var collection = null;
  var name = 'タスク群名'; 
  
  beforeEach(function() {
    collection = new TasksGroup();
  });
  it('should add the task', function() {
    var tasks = new Tasks2({'name': name});
    collection.collection = tasks;
    expect(collection.collection.at(0).get('name')).toBe(tasks.name);
  });
});


