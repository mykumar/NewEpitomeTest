app.controller('EpitomeTechtypesCtrl', ['$scope', '$filter', '$http', 'editableOptions', 'editableThemes', 
  function($scope, $filter, $http, editableOptions, editableThemes) {
    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
    editableOptions.theme = 'bs3';

    $scope.basicURL = "http://epitome.dev/";
    $scope.projectsURL = $scope.basicURL + 'projects.json';
    $scope.sectionsURL = $scope.basicURL + 'sections.json';
    $scope.techContentURL = $scope.basicURL + 'techcontents.json';
    $scope.projectsData = [];
    $scope.sectionsData = [];
    $scope.techContentData = [];
    $scope.insertedTechContentData = {};
    //{ tabId : 1, tabName:"TAB 1", sectionID: 1, projectID:1 }
    $scope.tabsData = [];    
    $scope.tabIDCounter = 0;
    $scope.isEmpty = function(obj) {
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              return false;
      }
      return true;
    };

    $scope.myName = "OHH BABY I AM HERE";
    $scope.sections = [ ];
    $scope.tabs = [ 
                    { tabId : 1, tabName:"TAB 1", sectionID: 1, projectID:1 },
                    { tabId : 2, tabName:"TAB 2", sectionID: 2, projectID:2 },
                    { tabId : 3, tabName:"TAB 3", sectionID: 3, projectID:3 },
                    { tabId : 4, tabName:"TAB 4", sectionID: 4, projectID:4 },
                    { tabId : 5, tabName:"TAB 5", sectionID: 5, projectID:5 },
                    { tabId : 6, tabName:"TAB 6", sectionID: 6, projectID:6 },
                  ];

        // {id:2, name: "Career Highlights", type: "single", smallname: "CH"},
        // {id:3, name: "Career Achievements", type: "single", smallname: "CA"}
        // {id:4, name: "Professional Experience", type: "projects"}
    // ];

    $scope.projects = [];
        // {id:1, name: "FishPond Limited", desc: "Asjkdjskad asjdjsakd", duration: "Oct 2014 to Present", clients: "", outsourced:"", smallname: "FISH"},
        // {id:2, name: "GE", desc: "Asjkdjskad asjdjsakd", duration: "Oct 2014 to Present", clients: "", outsourced:"", smallname: "GE"},
        // {id:3, name: "Value Labs", desc: "Asjkdjskad asjdjsakd", duration: "Oct 2014 to Present", clients: "", outsourced:"", smallname: "VLABS"},
        // {id:3, name: "RANDOM", desc: "Asjkdjskad asjdjsakd", duration: "Oct 2014 to Present", clients: "", outsourced:"", smallname: "RAN"},
        // {id:3, name: "ORBITREMIT", desc: "Asjkdjskad asjdjsakd", duration: "Oct 2014 to Present", clients: "", outsourced:"", smallname: "ORBIT"},
        // {id:3, name: "FISHER", desc: "Asjkdjskad asjdjsakd", duration: "Oct 2014 to Present", clients: "", outsourced:"", smallname: "SECO"},
        // {id:3, name: "wiki", desc: "Asjkdjskad asjdjsakd", duration: "Oct 2014 to Present", clients: "", outsourced:"", smallname: "WIKI"}
    // ];
    $scope.techTypesObjectSelected = {};
    $scope.techTypesObject = {};
    $scope.techTypes = [ 
      {id:1, name: "ReactJS"} 
    ];

    // $scope.techContentTmp = [];

    $scope.getMainTemplateName = function () {
        return "app/partials/templates/epitome-techtypes.html";
    };  

    $scope.getTemplateName = function (smallName) {
        return "app/partials/templates/" + smallName + ".html";
    };  

    $scope.getTemplateData = function (smallName) {
        var result = [];
        for (var counter = 0; counter < $scope.techContentTmp.length; counter++) {
            if($scope.techContentTmp[counter].smallName === smallName){
              return $scope.techContentTmp[counter].data;              
            }
        } 
        return result; 
    };  

    $scope.onSelected = function (selectedItem) {
        $http.get('app/data/epitome/techcontent.json').success(function(data) {
          $scope.techContentTmp = data;
        });
        
        $scope.techTypesObjectSelected = selectedItem;

        $http.get($scope.techContentURL).success(function(data) {
           $scope.techContentData = data['data'];
           console.dir('--------------------------------TECH CONTENT------------------------------');
           console.dir($scope.techContentData); 
           $scope.tabsData = [];
           if (!$scope.$$phase) $scope.$apply();
           //get Projects
            $http.get($scope.projectsURL).success(function(data) {
              $scope.projectsData = data['data'];
              //get Sections
              $http.get($scope.sectionsURL).success(function(data) {
                $scope.sectionsData = data['data'];

                //create the Tabs Data
                $scope.createTabsDataInDetail();              
              });
            });
           
        });  
    };    
    $scope.deleteContent = function(index, smallName) {
      for (var counter = 0; counter < $scope.techContentTmp.length; counter++) {  
        if($scope.techContentTmp[counter].smallName === smallName) { 
            $scope.techContentTmp[counter].data.splice(index, 1);
        }
      }  
    };
    $scope.addSingleRow = function(sectionId, projectId=null,smallName) {
      var tech_types_id = $scope.techTypesObjectSelected.id;
      var insertedRow = 
      {
        "id": 1,
        "tech_types_id": tech_types_id,
        "content": "",
        "section_id": sectionId,
        "project_id": projectId
      };
      for (var counter = 0; counter < $scope.techContentTmp.length; counter++) {  
          if($scope.techContentTmp[counter].smallName === smallName) { 
            $scope.techContentTmp[counter].data.push(insertedRow);
            // $scope.projects.push(insertedRow);
          }  
      }    
    };

    $scope.init = function () {  

      // //get Projects
      // $http.get($scope.projectsURL).success(function(data) {
      //     $scope.projectsData = data['data'];
      //     //get Sections
      //     $http.get($scope.sectionsURL).success(function(data) {
      //       $scope.sectionsData = data['data'];

      //       //create the Tabs Data
      //       $scope.createTabsData();              
      //     });
      // });
    };  
    $scope.createTabsData = function () {  

      //get Projects
      $http.get($scope.projectsURL).success(function(data) {
          $scope.projectsData = data['data'];
          //get Sections
          $http.get($scope.sectionsURL).success(function(data) {
            $scope.sectionsData = data['data'];

            //create the Tabs Data
            $scope.createTabsDataInDetail();              
          });
      });
    };  
    $scope.createTabsDataInDetail = function () {  
          //Load the sections CH and CA into tabs
          $index = $scope.searchArrayOfObjects('short_name', 'CH', $scope.sectionsData);
          $scope.pushToTabsData($scope.sectionsData[$index].short_name, $scope.sectionsData[$index].id , null);

          $index = $scope.searchArrayOfObjects('short_name', 'CA', $scope.sectionsData);
          $scope.pushToTabsData($scope.sectionsData[$index].short_name, $scope.sectionsData[$index].id, null);

          //Load the projects into tabs
          $scope.insertProjectsIntoTab();      
    };
    $scope.insertProjectsIntoTab = function () {  
        $projectSectionId =  $scope.searchArrayOfObjects('type', 'projects', $scope.sectionsData);
        for (var index = 0; index < $scope.projectsData.length; index++) {
          $scope.pushToTabsData($scope.projectsData[index].short_name, $projectSectionId, $scope.projectsData[index].id);
        }
    };  
    $scope.pushToTabsData = function (tabNameParam, sectionIDParam, projectIDParam ) {  
        $scope.tabIDCounter  = $scope.tabIDCounter + 1;
        var singleTab  = { tabId : $scope.tabIDCounter, tabName: tabNameParam, sectionID: sectionIDParam , projectID: projectIDParam, data: [{id: 1, number:23456}]};
        $scope.tabsData.push(singleTab);    
    };  
    $scope.searchArrayOfObjects = function (columnName, searchValue, arrayToSearchIn) {
      for (var index=0; index < arrayToSearchIn.length; index++) {
          if(arrayToSearchIn[index][columnName].localeCompare(searchValue) == 0) {
              return index;
          }
      }
    };  
    
    $scope.init();
}]);
