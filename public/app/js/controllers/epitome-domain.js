app.controller('EpitomeDomainCtrl', ['$scope', '$filter', '$http', 'editableOptions', 'editableThemes', 
  function($scope, $filter, $http, editableOptions, editableThemes){
    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
    editableOptions.theme = 'bs3';
    $scope.basicURL = "http://epitome.dev/";
    $scope.headersURL = $scope.basicURL + 'headers.json';
    $scope.projectsURL = $scope.basicURL + 'projects.json';
    $scope.educationsURL = $scope.basicURL + 'educations.json';
    $scope.sectionsURL = $scope.basicURL + 'sections.json';

    $scope.headersData = [];
    $scope.insertedHeadersData = {};
    $scope.projectsData = [];
    $scope.insertedProjectsData = {};
    $scope.educationsData = [];
    $scope.insertedEducationsData = {};
    $scope.sectionsData = [];
    $scope.insertedSectionsData = {};
    
    //Common Add, Save, Delete, Delete All Methods for All 
    $scope.add = function(type) {
      $scope.addNewRow(type);
    };
    $scope.save = function(type, data, index) {
      console.dir("SAVE:::INDEX IS::" + index);
      console.dir('-------------------------------WE FOR save----------------------');
              console.dir($scope.projectsData);
              console.dir($scope.projectsData[index]);
      $scope.saveNewRow(type, data, index);
      if(index != -1) {
        var row = $scope.getCleanObjectForServer(type, index);
        //ADD Opeartion
        if($scope.isAdded(type, index)) {
          newlyAddedHeaderId = $scope.sendRequest(type, 'POST', row, index, 'ADD');
          // $scope.headersData[index].added = 0;
        } else {
          //EDIT Opeartion
          newlyAddedHeaderId = $scope.sendRequest(type, 'PUT', row, index, 'EDIT');
          // $scope.headersData[index].dirty = 1;
        }
      } 
    };
    $scope.delete = function(type, index) {
      $scope.sendRequest(type, 'delete', null, index, 'DELETE');
      $scope.deleteRow(type, index);
    };
    $scope.deleteAll = function(type) {
      $scope.sendRequest(type, 'delete', null, null, 'DELETEALL');
      $scope.setEmpty(type);
    };

    //Common operations
    $scope.addNewRow = function(type) {
        switch(type.toLowerCase()) {
          case 'headers':
              $scope.insertedHeadersData = {
                      id:$scope.headersData.length+1,
                      tag_name: null,
                      value: null,
                      dirty:0,
                      added:1 //0 means Already thier, 1 means we added new record and need to send to server
                  };
              $scope.headersData.push($scope.insertedHeadersData);
              break;
          case 'projects':
                $scope.insertedProjectsData = {
                      id:$scope.projectsData.length+1,
                      name: null,
                      desc: null,
                      duration: null,
                      clients: null,
                      outsourced: null,
                      short_name: null,
                      dirty:0,
                      added:1 //0 means Already thier, 1 means we added new record and need to send to server
                  };
              $scope.projectsData.push($scope.insertedProjectsData);
              break;
          case 'sections':
              $scope.insertedSectionsData = {
                      id:$scope.sectionsData.length+1,
                      name: null,
                      type: null,
                      short_name: null,
                      dirty:0,
                      added:1 //0 means Already thier, 1 means we added new record and need to send to server
                  };
              $scope.sectionsData.push($scope.insertedSectionsData);
              break;  
          case 'educations':
              $scope.insertedEducationsData = {
                      id:$scope.educationsData.length+1,
                      course_name: null,
                      uni_name: null,
                      course_name: null,
                      percentage_marks: null,
                      dirty:0,
                      added:1 //0 means Already thier, 1 means we added new record and need to send to server
                  };
              $scope.educationsData.push($scope.insertedEducationsData);
              break;             
        }  
        return -1;
    };  
    $scope.saveNewRow = function(type, data, index) {
        console.dir('INDEX===' + index);
        switch(type.toLowerCase()) {
          case 'headers':
              $scope.headersData[index].tag_name = data['tag_name'];
              $scope.headersData[index].value = data['value'];
              return index;
          case 'projects':
              $scope.projectsData[index].name = data['name'];
              $scope.projectsData[index].desc = data['desc'];
              $scope.projectsData[index].duration = data['duration'];
              $scope.projectsData[index].clients = data['clients'];
              $scope.projectsData[index].outsourced = data['outsourced'];
              $scope.projectsData[index].short_name = data['short_name'];
              return index;
         case 'sections':
              $scope.sectionsData[index].name = data['name'];
              $scope.sectionsData[index].type = data['type'];
              $scope.sectionsData[index].short_name = data['short_name'];
              return index;
         case 'educations':
              $scope.educationsData[index].course_name = data['course_name'];
              $scope.educationsData[index].uni_name = data['uni_name'];
              $scope.educationsData[index].year = data['year'];
              $scope.educationsData[index].percentage_marks = data['percentage_marks'];
              return index;     
        }  
        return -1;
    };  
    
    $scope.deleteRow = function(type, index) {
        switch(type.toLowerCase()) {
          case 'headers':
              $scope.headersData.splice(index, 1);
              break;
          case 'projects':
              $scope.projectsData.splice(index, 1);
              break;
          case 'sections':
              $scope.sectionsData.splice(index, 1);
              break;   
          case 'educations':
              $scope.educationsData.splice(index, 1);
              break;              
        }  
    }; 
    $scope.setEmpty = function(type) {
        switch(type.toLowerCase()) {
          case 'headers':
              $scope.headersData = [];
              break;
          case 'projects':
              $scope.projectsData = [];
              break;
          case 'sections':
              $scope.sectionsData = [];
              break; 
          case 'educations':
              $scope.educationsData = [];
              break;             
        }  
    }; 
    $scope.getIndexById = function(type, id) {
        var data = [];
        switch(type.toLowerCase()) {
          case 'headers':
              data = $scope.headersData;
              break;
          case 'projects':
              data = $scope.projectsData;
              break;
          case 'sections':
              data = $scope.sectionsData;
              break;    
          case 'educations':
              data = $scope.educationsData;
              break;              
        }  

        for (var i = 0; i < data.length; i++){
          if(data[i].id == id) {
            return i;
          }
        }  
        return -1;
    }; 

    $scope.getCleanObjectForServer = function(type, index) {
        var data = [];
        switch(type.toLowerCase()) {
          case 'headers':
              data = $scope.headersData[index];
              break;
          case 'projects':
              data = $scope.projectsData[index];
              break;
         case 'sections':
              data = $scope.sectionsData[index];
              break; 
         case 'educations':
              data = $scope.educationsData[index];
              break;              
        }  
        var newObject = JSON.parse(JSON.stringify(data));
        delete newObject['id']; 
        delete newObject['dirty']; 
        delete newObject['added']; 
        return newObject;
    };  
    $scope.isAdded = function(type, index) {
        var data = [];
        switch(type.toLowerCase()) {
          case 'headers':
              if($scope.headersData[index].added == 1) {
                return true;
              }  
              break;
          case 'projects':
              if($scope.projectsData[index].added == 1) {
                return true;
              }  
              break;
          case 'sections':
              if($scope.sectionsData[index].added == 1) {
                return true;
              }  
              break;   
          case 'educations':
            if($scope.educationsData[index].added == 1) {
              return true;
            }  
            break;             
        }  
        return false;
    };  
    $scope.updateAdded = function(type, index, value) {
        switch(type.toLowerCase()) {
          case 'headers':
              $scope.headersData[index].added = value;
              break;
          case 'projects':
              $scope.projectsData[index].added = value;
              break;
          case 'sections':
              $scope.sectionsData[index].added = value;
              break;   
          case 'educations':
              $scope.educationsData[index].added = value;
              break;             
        }  
    };  
    $scope.updateID = function(type, index, value) {
        switch(type.toLowerCase()) {
          case 'headers':
              $scope.headersData[index].id = value;
              break;
          case 'projects':
              $scope.projectsData[index].id = value;
              break;
          case 'sections':
              $scope.sectionsData[index].id = value;
              break;  
          case 'educations':
              $scope.educationsData[index].id = value;
              break;                 
        }  
    };  
    $scope.getID = function(type, index) {
        switch(type.toLowerCase()) {
          case 'headers':
              return $scope.headersData[index].id;
              break;
          case 'projects':
              return $scope.projectsData[index].id;
              break;
         case 'sections':
              return $scope.sectionsData[index].id;
              break;   
          case 'educations':
              return $scope.educationsData[index].id;
              break;   
        }  
    };  
    $scope.updateDirty = function(type, index, value) {
        switch(type.toLowerCase()) {
          case 'headers':
              $scope.headersData[index].dirty = value;
              break;
          case 'projects':
              $scope.projectsData[index].dirty = value;
              break;
          case 'sections':
              $scope.sectionsData[index].dirty = value;
              break;   
          case 'educations':
              $scope.educationsData[index].dirty = value;
              break;             
        }  
    }; 

    //HTTP OPerations for POST,put,DELETE
    $scope.sendRequest = function(type, method, data, index, operation) {
        var url = $scope.createURL(type, index, operation);
        $http({
              url: url,
              method: method,
              data: data,
              headers: {'Content-Type': 'application/json'}
        })
        .then(function(response) {
              // success
            if(operation=='ADD') {
              $scope.updateAdded(type, index, 0); 
              $scope.updateID(type,index,parseInt(response['data']['data']['id']));
            }  
            if(operation=='EDIT') {
              console.dir('-------------------------------WE GOR RESPOINSE FOR EDIT----------------------');
              console.dir($scope.projectsData);
              $scope.updateDirty(type, index, 1); 
            }
        }, 
        function(response) { 
            // failed
            console.dir('HTTP REQUEST ' +  method +' Failure Response');
        });
    };
    $scope.createURL = function(type, index, operation) {
        switch(operation.toUpperCase()) {
          case 'ADD':
              return $scope.basicURL + type + '.json';
              break;
          case 'EDIT':
              return $scope.basicURL + type + '/' + $scope.getID(type, index) + '.json';
              break;
          case 'DELETE':
              return $scope.basicURL + type + '/' + $scope.getID(type, index) + '.json';
              break;      
          case 'DELETEALL':
              return $scope.basicURL + type + '.json';
              break;            
        }                
    };  


    //Initialization 
    $scope.init = function() {
        $http.get($scope.headersURL).success(function(data) {
            $scope.headersData = $scope.initData(data['data']);
        });
        $http.get($scope.projectsURL).success(function(data) {
            $scope.projectsData = $scope.initData(data['data']);
        });
        $http.get($scope.educationsURL).success(function(data) {
            $scope.educationsData = $scope.initData(data['data']);
        });
        $http.get($scope.sectionsURL).success(function(data) {
            $scope.sectionsData = $scope.initData(data['data']);
        });
    };
    $scope.init();

    $scope.initData = function(data) {
        for (var i = 0; i < data.length; i++){
          data[i].dirty = 0; 
          data[i].added = 0; //0 means Already thier, 1 means we added new record and need to send to server
        }  
        return data;
    }; 
}]);
