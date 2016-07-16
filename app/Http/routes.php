<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/rand', function () {
    return 'WElCOME TO THE RAND';
});


Route::get('getBetas', 'HtmlController@getBetas');
Route::get('getSingle', 'HtmlController@getSingle');
Route::get('testMultiParams/{firstId}/{secondId}', 'HtmlController@testMultiParams');
Route::get('getDoc', 'HtmlController@getDoc');

Route::get('testAngular', 'AngularController@testAngular');
Route::get('testAngularUi', 'AngularController@testAngularUi');
Route::get('welcome', 'AngularController@welcome');
Route::get('testAngularGrid', 'AngularController@testAngularGrid');
Route::get('getTestJson', 'AngularController@getTestJson');


//CRUD Headers (Read - GET, Create - POST, Update - PUT, Delete - DELETE)
//Educations @@@@@
Route::get('educations.json', 'EducationsController@index');
Route::get('educations/{id}.json', 'EducationsController@get');
Route::post('educations.json', 'EducationsController@add');
Route::put('educations/{id}.json', 'EducationsController@edit');
Route::delete('educations/{id}.json', 'EducationsController@delete');
Route::delete('educations.json', 'EducationsController@deleteAll');

//Headers @@@@@
Route::get('headers.json', 'HeadersController@index');
Route::get('headers/{id}.json', 'HeadersController@get');
Route::post('headers.json', 'HeadersController@add');
Route::put('headers/{id}.json', 'HeadersController@edit');
Route::delete('headers/{id}.json', 'HeadersController@delete');
Route::delete('headers.json', 'HeadersController@deleteAll');


//Projects @@@@@
Route::get('projects.json', 'ProjectsController@index');
Route::get('projects/{id}.json', 'ProjectsController@get');
Route::post('projects.json', 'ProjectsController@add');
Route::put('projects/{id}.json', 'ProjectsController@edit');
Route::delete('projects/{id}.json', 'ProjectsController@delete');
Route::delete('projects.json', 'ProjectsController@deleteAll');

//Sections @@@@@
Route::get('sections.json', 'SectionsController@index');
Route::get('sections/{id}.json', 'SectionsController@get');
Route::post('sections.json', 'SectionsController@add');
Route::put('sections/{id}.json', 'SectionsController@edit');
Route::delete('sections/{id}.json', 'SectionsController@delete');
Route::delete('sections.json', 'SectionsController@deleteAll');

//EpitomeTypes @@@@@
Route::get('epitometypes.json', 'EpitomeTypesController@index');
Route::get('epitometypes/{id}.json', 'EpitomeTypesController@get');
Route::post('epitometypes.json', 'EpitomeTypesController@add');
Route::put('epitometypes/{id}.json', 'EpitomeTypesController@edit');
Route::delete('epitometypes/{id}.json', 'EpitomeTypesController@delete');

//TechTypes @@@@@
Route::get('techtypes.json', 'TechTypesController@index');
Route::get('techtypes/{id}.json', 'TechTypesController@get');
Route::post('techtypes.json', 'TechTypesController@add');
Route::put('techtypes/{id}.json', 'TechTypesController@edit');
Route::delete('techtypes/{id}.json', 'TechTypesController@delete');

//TemplateTypes @@@@@
Route::get('templatetypes.json', 'TemplateTypesController@index');
Route::get('templatetypes/{id}.json', 'TemplateTypesController@get');
Route::post('templatetypes.json', 'TemplateTypesController@add');
Route::put('templatetypes/{id}.json', 'TemplateTypesController@edit');
Route::delete('templatetypes/{id}.json', 'TemplateTypesController@delete');


//TechContents 
Route::get('techcontents.json', 'TechContentsController@index');
Route::get('techcontents/{id}.json', 'TechContentsController@get');
Route::get('techcontents/techtype/{id}.json', 'TechContentsController@getAllOnTechTypeId');
Route::get('techcontents/techtype/{techtypeId}/{sectionId}/{projectId}.json', 'TechContentsController@getAllOnIds');
Route::post('techcontents.json', 'TechContentsController@add');
Route::put('techcontents/{id}.json', 'TechContentsController@edit');
Route::delete('techcontents/{id}.json', 'TechContentsController@delete');
Route::delete('techcontents/techtype/{techtypeId}/{sectionId}/{projectId}.json', 'TechContentsController@deleteAll');

// http://epitome.dev/techcontents/techtype/1/4.json
//TemplateContent 
Route::get('templatecontents/getTemplateContentByTemplateTypeId/{id}.json', 'TemplateContentsController@getTemplateContentByTemplateTypeId');
Route::post('templatecontents.json', 'TemplateContentsController@add');
Route::delete('templatecontents/{id}.json', 'TemplateContentsController@delete');
Route::delete('templatecontents/delAllWithTemplateTypeId/{id}.json', 'TemplateContentsController@delAllWithTemplateTypeId');