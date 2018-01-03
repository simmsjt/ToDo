angular.module('appModule')
  .component('todoList', {
	  templateUrl : 'app/appModule/todoList/todoList.component.html',
	  controller: function(){
		  var vm = this;
		  vm.selected = null;
		  vm.copy = null;
		  vm.todos = [
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
		
		  vm.addTodo = function(task){
			task.completed = false;
			task.id = generateId();
	    	  	var copy = angular.copy(task);
	    	  	vm.todos.push(task);
	      };
	     
	      var generateId = function() {
	    	  return vm.todos[vm.todos.length-1].id + 1;
	      };
	      
	      vm.getNumTodos = function() {
		        return vm.todos.length;
		  };
		  
		  vm.displayTodo = function(todo){
			  vm.selected = todo;
			  vm.copy = angular.copy(vm.selected);
		  };
		  
		  vm.resetEdit = function(){
			  vm.copy = angular.copy(vm.selected);
		  };
		  
		  vm.submitEdit = function(){
			var obj = vm.todos.find(x => x.id === vm.selected.id );
			obj.task = vm.copy.task;
			obj.description = vm.copy.description;
			obj.completed = vm.copy.completed;
			vm.displayTable();
		  };
		  
		  vm.displayTable = function(){
			  vm.selected = null;
			  vm.copy = null;
		  };
	      
	  },
	  controllerAs: 'vm'
  })
  
  