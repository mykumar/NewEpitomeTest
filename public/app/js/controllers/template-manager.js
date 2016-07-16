app.controller('TemplateManagerCtrl', ['$scope', '$filter', '$http', 'editableOptions', 'editableThemes', '$controller',  
  function($scope, $filter, $http, editableOptions, editableThemes, $controller){
    // $controller('EpitomeTechtypesCtrl', {$scope: $scope}); //This works
    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
    editableOptions.theme = 'bs3';
    ///////////////////Tech Types///////////////////////////////////////////////
    $scope.CH = {section_id: 2, name: "CH"};
    $scope.CA = {section_id: 3, name: "CA"};
    $scope.Orbit = {section_id: 4, project_id: 1, name: "Orbit"};
    $scope.FishPond = {section_id: 4, project_id: 2, name: "FishPond"};
    $scope.techContentLabelURL = 'techcontents';
    $scope.techTypeLabelURL = 'techtypes';
    $scope.basicURL = "http://epitome.dev/";
    $scope.techTypesURL = $scope.basicURL  + 'techtypes.json';
    $scope.techTypeSection = 'techTypeSection';

    $scope.techContentWithIDSLabelURL = $scope.basicURL + 'techcontents/' + 'techtype/';
    $scope.techContentURL = $scope.basicURL + 'techcontents.json';

    $scope.CHData = [];
    $scope.insertedCHData = [];
    $scope.CAData = [];
    $scope.insertedCAData = [];
    $scope.OrbitData = [];
    $scope.insertedOrbitData = [];
    $scope.FishPondData = [];
    $scope.insertedFishpondData = [];
    $scope.techTypesObjectSelected = {};
    $scope.techTypesObject = {};
    $scope.techTypes = [];
    $scope.selectedTechTypeName = {name:""};
    ///////////////////Tech Types///////////////////////////////////////////////

    ///////////////////Template Content///////////////////////////////////////////////
    $scope.templateContentHeadersData = [];
    $scope.templateContentinsertedHeadersData = [];
    $scope.templateContentProjectsData = [];
    $scope.templateContentinsertedProjectsData = [];
    $scope.templateContentEducationData = [];
    $scope.templateContentinsertedEducationData = [];
    $scope.templateContentCHData = [];
    $scope.templateContentinsertedCHData = [];
    $scope.templateContentCAData = [];
    $scope.templateContentinsertedCAData = [];
    $scope.templateContentOrbitData = [];
    $scope.templateContentinsertedOrbitData = [];
    $scope.templateContentFishPondData = [];
    $scope.templateContentinsertedFishpondData = [];
    //Template Type
    $scope.templateTypesObjectSelected = {};
    $scope.templateTypesObject = {};
    $scope.templateTypes = [];
    $scope.selectedTemplateTypeName = {name:""};
    ///////////////////Template Content///////////////////////////////////////////////

    /*
      app/partials/templates/templateFormats/standard-format.html
      --Get all the Template Types
      --On select a Template Type Name
        On server create the strure According to the sections CH, CA, Projects - Orbit, Fish and send it client adn also Headers, Projects, Education 
        On client, load the contents into corresponding strutures templateContentCHData, templateContentCAData, templateContentOrbitData, templateContentFishPondData
      --insertTechTypeContentIntoTemplate
        check which section it is, CH, CA, Projects - Orbit, Fish
        Insert into corresponding structure templateContentCHData, templateContentCAData, templateContentOrbitData, templateContentFishPondData by using the Added as "1"
        we can use $scope.addNewRow method but chnage the name
      --deleteTechTypeContentFromTemplate
        check which section it is, CH, CA, Projects - Orbit, Fish
        Delete it from corresponding structure templateContentCHData, templateContentCAData, templateContentOrbitData, templateContentFishPondData
      --saveTemplateIntoDatabase
        if (Added = 1) in the corresponding sections like CH, CA, Projects - Orbit, Fish  (templateContentCHData, templateContentCAData, templateContentOrbitData, templateContentFishPondData)  
          Get all the struture and create the ids : ID,Template_types_id,Tech_content_id,Tech_types_id, section_id,Header_id,Education_id, project_id for "CH, CA, Projects - Orbit, Fish"
        end if  
        @@@send it server indiviually and update the corresponding IDS properly  
      CASE 1: (Create a New Template)
            ** Same as saveTemplateIntoDatabase
      CASE 2: (On Existing Template I Deleted one item -- indivually one item at a time)
            ** Send Delete request to the server
      CASE 2: (I Modified existing Template by adding few (For example: 10 new items) new Tech Types Content )
            ** Same as saveTemplateIntoDatabase
    */  

    //Common Add, Save, Delete, Delete All Methods for All 
    $scope.add = function(section) {
      $scope.addNewRow(section);
    };
    $scope.save = function(section, data, index) {
      console.dir("SAVE:::INDEX IS::" + index);
      console.dir('-------------------------------WE FOR save----------------------');
      $scope.saveNewRow(section, data, index);
      if(index != -1) {
        var row = $scope.getCleanObjectForServer(section, index);
        //ADD Opeartion
        if($scope.isAdded(section, index)) {
          $scope.sendRequest(section, 'POST', row, index, 'ADD');
        } else {
          //EDIT Opeartion
          $scope.sendRequest(section, 'PUT', row, index, 'EDIT');
        }
      } 
    };
    $scope.delete = function(section, index) {
      $scope.sendRequest(section, 'delete', null, index, 'DELETE');
      $scope.deleteRow(section, index);
    };
    $scope.deleteAll = function(section) {
      $scope.sendRequest(section, 'delete', null, null, 'DELETEALL');
      $scope.setEmpty(section);
    };

    //TechType
    $scope.addTechType = function() {
      console.dir('addTechType');
      console.dir($scope.selectedTechTypeName.name);
      if(!$scope.isTechTypeExists($scope.selectedTechTypeName.name)) {
        $scope.sendRequest($scope.techTypeSection, 'POST', $scope.createJsonDataForTechType($scope.selectedTechTypeName.name), null, 'ADD');
      }  
      // $scope.sendRequest($scope.techTypeSection, 'delete', null, index, 'DELETE');
    };
    $scope.saveTechType = function() {
      console.dir('saveTechType');
      if(!$scope.isTechTypeExists($scope.selectedTechTypeName.name)) {
        $scope.sendRequest($scope.techTypeSection, 'PUT', $scope.createJsonDataForTechType($scope.selectedTechTypeName.name), null, 'EDIT');
      }  
      // $scope.sendRequest($scope.techTypeSection, 'delete', null, index, 'DELETE');
    };
    $scope.deleteTechType = function() {
      console.dir('deleteTechType');
      $scope.sendRequest($scope.techTypeSection, 'delete', null, null, 'DELETE');
      // $scope.sendRequest($scope.techTypeSection, 'delete', null, index, 'DELETE');
    };

    //Common operations
    $scope.getTemplateManager = function () {
        return "app/partials/templates/templateFormats/standard-format.html";
    };  
    $scope.getTemplateGenerators = function () {
        return "app/partials/templates/template-generators.html";
    };  
    $scope.getMainTemplateName = function(newValue) {
       return "app/partials/templates/common/epitome-techtypes-common.html";
    };  
    $scope.createJsonDataForTechType = function(newValue) {
        var obj = {name: newValue};
        return obj;
    };  
    $scope.isTechTypeExists = function(newValue) {
      for (var index = 0; index < $scope.techTypes.length; index++) {
        if($scope.techTypes[index].name.localeCompare(newValue) == 0)
        {  
          return true;  
        }    
      }
      return false;
    };  
    $scope.isEmpty = function(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }
      return true;
    };
    $scope.addNewRow = function(section) {
      switch(section.toUpperCase()) {
        case 'CH':
            $scope.insertedCHData = {
                    id:$scope.CHData.length+1,
                    tech_types_id: $scope.techTypesObjectSelected.id,
                    content: null,
                    section_id: $scope.CH.section_id,
                    project_id: 0,
                    dirty:0,
                    added:1 //0 means Already thier, 1 means we added new record and need to send to server
                };
            $scope.CHData.push($scope.insertedCHData);
            break;
        case 'CA':
            $scope.insertedCAData = {
                    id:$scope.CAData.length+1,
                    tech_types_id: $scope.techTypesObjectSelected.id,
                    content: null,
                    section_id: $scope.CA.section_id,
                    project_id: 0,
                    dirty:0,
                    added:1 //0 means Already thier, 1 means we added new record and need to send to server
                };
            $scope.CAData.push($scope.insertedCAData);
            break;    
        case 'ORBIT':
            $scope.insertedOrbitData = {
                    id:$scope.OrbitData.length+1,
                    tech_types_id: $scope.techTypesObjectSelected.id,
                    content: null,
                    section_id: $scope.Orbit.section_id,
                    project_id: $scope.Orbit.project_id,
                    dirty:0,
                    added:1 //0 means Already thier, 1 means we added new record and need to send to server
                };
            $scope.OrbitData.push($scope.insertedOrbitData);
            break; 
        case 'FISHPOND':
            $scope.insertedFishpondData = {
                    id:$scope.FishPondData.length+1,
                    tech_types_id: $scope.techTypesObjectSelected.id,
                    content: null,
                    section_id: $scope.FishPond.section_id,
                    project_id: $scope.FishPond.project_id,
                    dirty:0,
                    added:1 //0 means Already thier, 1 means we added new record and need to send to server
                };
            $scope.FishPondData.push($scope.insertedFishpondData);
            break;        
      }  
        return -1;
    };  
    $scope.saveNewRow = function(section, data, index) {
      console.dir('INDEX===' + index);
      switch(section.toUpperCase()) {
        case 'CH':
          $scope.CHData[index].content = data['content'];
          return index;
        case 'CA':
          $scope.CAData[index].content = data['content'];
          return index;
        case 'ORBIT':
          $scope.OrbitData[index].content = data['content'];
          return index;
        case 'FISHPOND':
          $scope.FishPondData[index].content = data['content'];
          return index;
      }  
      return -1;
    };  
    
    $scope.deleteRow = function(section, index) {
      switch(section.toUpperCase()) {
        case 'CH':
          $scope.CHData.splice(index, 1);
          break;
        case 'CA':
          $scope.CAData.splice(index, 1);
          break;
        case 'ORBIT':
          $scope.OrbitData.splice(index, 1);
          break;
        case 'FISHPOND':
          $scope.FishPondData.splice(index, 1);
          break;
      }  
    }; 
    $scope.setEmpty = function(section) {
      switch(section.toUpperCase()) {
        case 'CH':
          $scope.CHData = [];
          break;
        case 'CA':
          $scope.CAData = [];
          break;
        case 'ORBIT':
          $scope.OrbitData = [];
          break;
        case 'FISHPOND':
          $scope.FishPondData = [];
          break;
      }  
    }; 
    $scope.getCleanObjectForServer = function(section, index) {
      var data = [];
      switch(section.toUpperCase()) {
        case 'CH':
          data = $scope.CHData[index];
          break;
        case 'CA':
          data = $scope.CAData[index];
          break;
        case 'ORBIT':
          data = $scope.OrbitData[index];
          break;
        case 'FISHPOND':
          data = $scope.FishPondData[index];
          break;
      } 
      var newObject = JSON.parse(JSON.stringify(data));
      delete newObject['id']; 
      delete newObject['dirty']; 
      delete newObject['added']; 
      return newObject;
    };  
    $scope.isAdded = function(section, index) {
      var data = [];
      switch(section.toUpperCase()) {
        case 'CH':
          if($scope.CHData[index].added == 1) {
            return true;
          }  
          break;
        case 'CA':
          if($scope.CAData[index].added == 1) {
            return true;
          }  
          break;
        case 'ORBIT':
          if($scope.OrbitData[index].added == 1) {
            return true;
          }  
          break;
        case 'FISHPOND':
          if($scope.FishPondData[index].added == 1) {
            return true;
          }  
          break;
      } 
      return false;
    };  
    $scope.updateAdded = function(section, index, value) {
        switch(section.toUpperCase()) {
          case 'CH':
            $scope.CHData[index].added = value;
            break;
          case 'CA':
            $scope.CAData[index].added = value;
            break;
          case 'ORBIT':
            $scope.OrbitData[index].added = value;
            break;
          case 'FISHPOND':
            $scope.FishPondData[index].added = value;
            break;
        } 
    };  
    $scope.updateID = function(section, index, value) {
        switch(section.toUpperCase()) {
          case 'CH':
            $scope.CHData[index].id = value;
            break;
          case 'CA':
            $scope.CAData[index].id = value;
            break;
          case 'ORBIT':
            $scope.OrbitData[index].id = value;
            break;
          case 'FISHPOND':
            $scope.FishPondData[index].id = value;
            break;
        } 
    };  
    $scope.updateDirty = function(section, index, value) {
      switch(section.toUpperCase()) {
        case 'CH':
          $scope.CHData[index].dirty = value;
          break;
        case 'CA':
          $scope.CAData[index].dirty = value;
          break;
        case 'ORBIT':
          $scope.OrbitData[index].dirty = value;
          break;
        case 'FISHPOND':
          $scope.FishPondData[index].dirty = value;
          break;
      } 
    }; 
    $scope.getID = function(section, index) {
      switch(section.toUpperCase()) {
        case 'CH':
          return $scope.CHData[index].id;
          break;
        case 'CA':
          return $scope.CAData[index].id;
          break;
        case 'ORBIT':
          return $scope.OrbitData[index].id;
          break;
        case 'FISHPOND':
          return $scope.FishPondData[index].id;
          break;
      } 
    }; 

    //HTTP OPerations for POST,put,DELETE
    $scope.sendRequest = function(section, method, data, index, operation) {
        var url = $scope.createURL(section, index, operation);
        $http({
              url: url,
              method: method,
              data: data,
              headers: {'Content-Type': 'application/json'}
        })
        .then(function(response) {
          if(section.localeCompare($scope.techTypeSection) == 0) {
              $scope.loadTechTypes();
          } else {  
              // success
              if(operation=='ADD') {
                $scope.updateAdded(section, index, 0); 
                $scope.updateID(section,index,parseInt(response['data']['data']['id']));
              }  
              if(operation=='EDIT') {
                console.dir('-------------------------------WE GOR RESPOINSE FOR EDIT----------------------');
                // console.dir($scope.projectsData);
                $scope.updateDirty(section, index, 1); 
              }
          }  
        }, 
        function(response) { 
            // failed
            console.dir('HTTP REQUEST ' +  method +' Failure Response');
        });
    };
    $scope.createURL = function(section, index, operation) {
      if(section.localeCompare($scope.techTypeSection) == 0) {
        return $scope.createTechTypeURL(section, index, operation);
      }
      switch(operation.toUpperCase()) {
        case 'ADD':
          return $scope.basicURL + $scope.techContentLabelURL + '.json';
          break;
        case 'EDIT':
          return $scope.basicURL + $scope.techContentLabelURL + '/' + $scope.getID(section, index) + '.json';
          break;
        case 'DELETE':
          return $scope.basicURL + $scope.techContentLabelURL + '/' + $scope.getID(section, index) + '.json';
          break;      
        case 'DELETEALL':
          return $scope.getDeleteAllUrl(section);
          break;            
      }                
    };  
    $scope.createTechTypeURL = function(section, index, operation) {
      switch(operation.toUpperCase()) {
        case 'ADD':
          return $scope.basicURL + $scope.techTypeLabelURL + '.json';
        case 'EDIT':
          return $scope.basicURL + $scope.techTypeLabelURL + '/' + $scope.techTypesObjectSelected.id + '.json';
        case 'DELETE':
          return $scope.basicURL + $scope.techTypeLabelURL + '/' + $scope.techTypesObjectSelected.id + '.json';
      }     
    };  
    $scope.getDeleteAllUrl = function(section) {
      var tmpBasicUrl = $scope.basicURL + $scope.techContentLabelURL + "/techtype/" + $scope.techTypesObjectSelected.id + "/";
      switch(section.toUpperCase()) {
        case 'CH':
          return tmpBasicUrl + $scope.CH.section_id + "/" +  "0.json";
        case 'CA':
          return tmpBasicUrl + $scope.CA.section_id + "/" +  "0.json";
        case 'ORBIT':
          return tmpBasicUrl + $scope.Orbit.section_id + "/" + $scope.Orbit.project_id  + ".json";
        case 'FISHPOND':
          return tmpBasicUrl + $scope.FishPond.section_id + "/" + $scope.FishPond.project_id  + ".json";
      } 
    }; 


    //Initialization 
    $scope.initData = function(data) {
        for (var i = 0; i < data.length; i++){
          data[i].dirty = 0; 
          data[i].added = 0; //0 means Already thier, 1 means we added new record and need to send to server
        }  
        return data;
    }; 
    $scope.loadSections = function() {
        var interUrl = $scope.techContentWithIDSLabelURL + $scope.techTypesObjectSelected.id + "/";
        //CH
        $http.get( interUrl + $scope.CH.section_id + "/" + "0.json").success(function(data) {
            $scope.CHData = $scope.initData(data['data']);
        });
        //CA
        $http.get(interUrl + $scope.CA.section_id + "/" + "0.json").success(function(data) {
            $scope.CAData = $scope.initData(data['data']);
        });
        //Orbit
        $http.get(interUrl + $scope.Orbit.section_id + "/" + $scope.Orbit.project_id + ".json").success(function(data) {
            $scope.OrbitData = $scope.initData(data['data']);
        });
        //Fishpond
        $http.get(interUrl + $scope.FishPond.section_id + "/" + $scope.FishPond.project_id + ".json").success(function(data) {
            $scope.FishPondData = $scope.initData(data['data']);
            console.dir('-----------------loadSections----------------------------');
            console.dir($scope.FishPondData);
        });
    };
    $scope.onSelected = function (selectedItem, index) {
      console.dir('----------------onSelected------------------------------');
      console.dir($scope.generateUUID());
      $scope.techTypesObjectSelected = selectedItem;
      $scope.selectedTechTypeName.name = $scope.techTypesObjectSelected.name;
      $scope.loadSections();
    }; 
    $scope.generateUUID = function() 
    {
        return $scope.s4() + $scope.s4() + '-' + $scope.s4() + '-' + $scope.s4() + '-' +
          $scope.s4() + '-' + $scope.s4() + $scope.s4() + $scope.s4();
    };
    $scope.s4 = function() 
    {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    };
     $scope.loadTechTypes = function () {
      $http.get($scope.techTypesURL).success(function(data) {
        $scope.techTypes = data['data'];
        console.dir('---------------init----------------------');
        console.dir($scope.techTypes);
      });  
    };  
    $scope.init = function () {
      $scope.loadTechTypes(); 
    };  
    $scope.init();




    $scope.randomName = "THIS IS THE RANDOM NAME FOR TESTING";

    $scope.multipleDemo = {};
    $scope.lastRemoved = {};

    $scope.removed = function (item, model) {
      console.log("we are in the removed");
      $scope.lastRemoved = {
          item: item,
          model: model
      };
    };

    $scope.people = [
      { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
      { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
      { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
      { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
      { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
      { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
      { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
      { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
      { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
      { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
    ];

    $scope.testme = function() {
      console.log('I am in the testme');
      console.dir($scope.projects);
    };
}]);
