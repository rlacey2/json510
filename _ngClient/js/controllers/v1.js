 
angularnodeApp.controller('V1Ctrl', ['$scope' ,  'jsonModels', 
		function($scope, jsonModels  ) {
 
		$scope.data = jsonModels.get(1);	

		// scaling issues as second and third pass on the data after ngRepeat
		// also, not reset on filters
		// how to solve this
		$scope.getFinalResult = function(data2, key){ 
			var total = 0;
			var count = 0;
			var len = data2.length;
			for(var i = 0; i < len; i++){				  
				total +=  data2[i].mark  ; // total = total + data2.mark
				count++;
			}
			return { "result" : (total / count).toFixed(2), "count" : count} ;
		}
	}]); // V1Ctrl
	
 
 	
	 