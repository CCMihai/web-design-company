$(function () {
			var filterList = {
			init: function () {	
				$('#portfolio-list').mixItUp({
					selectors: {
		     	    target: '.span3',
		  		    filter: '.filter'	
		  		  	},
		  		load: {
		    		filter: '.all' 
		    			}     
					});								
				}
			};
			filterList.init();
		});