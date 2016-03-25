app.controller('TodoController', ['$scope', function($scope) {
    $scope.todoTasks = [
        {text: 'Download the translation app', date: "25.04.2016", done: false},
        {text: 'Pass English exams', date: "01.04.2016", done: false},
        {text: 'Update Angular project', date: "11.04.2016", done: false}
    ];

    $scope.getTasksNumber = function() {
        return $scope.todoTasks.length;
    };

    $scope.addTask = function() {
        if ($scope.formTodoText !== undefined &&  $scope.formTodoText !== '') {

            var dateReg = /^\d{2}([./-])\d{2}\1\d{4}$/;
            if ($scope.formTodoDate !== undefined && !$scope.formTodoDate.match(dateReg) ){
                alert("Wrong data or data format. Please input date in format 11.11.2016 or 11-11-2016.")
                $scope.formTodoDate = '';
            };

            $scope.todoTasks.push({
                text: $scope.formTodoText,
                date: $scope.formTodoDate,
                done: false
            });
            $scope.formTodoText = '';
        }
    };

    $scope.deleteTask = function(idx) {
        $scope.todoTasks.splice(idx, 1);
    };

    $scope.clearCompleted = function() {
        var lst = $scope.todoTasks;
        $scope.todoTasks = lst.filter(function(todo) {
            return !todo.done;
        })
    };
}]);