(function(){
'use strict';

angular.module('LunchCheck',[]).controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var total;
  $scope.check = function(){
  total = $scope.items;
  if(total)
  {
  total= total.replace(/\s/g,'');
  total= total.replace(/,,/g,',');
  total=total.split(',').length;
}
else{$scope.message = "Please enter data first";}
  };
  $scope.eval = function(){
    if (total >0 && total <=3)
    {$scope.message = "Enjoy!";}
    else if (total >3)
    {$scope.message = "Too much!";}

  };
}
}
)();
