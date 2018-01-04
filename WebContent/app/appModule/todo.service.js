angular.module('appModule')
.factory('todoService',function(){
	var service = {};
	var tasks = [
		  {
			  id : 1,
		      task : 'Call mom',
		      description : 'She is old and lonely.',
		      completed : false
		  },
		  {
			  id : 2,
		      task : 'Buy bananas',
		      description : 'Got to keep potassium up.',
		      completed : false
		  },
		  {
			  id : 3,
		      task : 'Go for a run',
		      description : 'Ate to many donuts during christmas.',
		      completed : false
		  }
	  ];
	
	service.index = function(){
		return tasks;
	};
	
	service.create = function(task){
		task.id = generateId();
		task.completed = false; 
		tasks.push(task);
	};
	
	var generateId = function() {
    	  return tasks[tasks.length-1].id + 1;
    };
      
    service.getNumTasks = function() {
        return tasks.length;
    };
    
    service.update = function(task){
    			var obj = tasks.find(x => x.id === task.id );
			obj.task = task.task;
			obj.description = task.description;
			obj.completed = task.completed;
    };
   
    service.delete = function(task){
    		var obj = tasks.find(x => x.id === task.id );
		tasks.splice();
    };
    

	return service;
})