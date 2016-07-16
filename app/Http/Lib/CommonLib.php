<?php

namespace App\Http\Lib;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Http\Requests;
use App\Models\Projects;
use App\Models\TemplateContents;
use App\Models\Headers;
use App\Models\Educations;
use App\Models\TechContents;

use Log;

class CommonLib
{
	public static function createMasterStruct($id)
	{
		Log::info('This is the CommonLib::createMasterStruct::id ==' . $id );
		$projects = self::createProjects();
		$headers = self::createHeaders($id);
		$educations = self::createEducations($id);
		$ca = self::createSections($id, "CA");
		$ch = self::createSections($id, "CH");
		$orbit = self::createSections($id, "ORBIT");
		$fish = self::createSections($id, "FISH");
		$total = array ("headers" => $headers, "projects" => $projects, "educations" => $educations, "ca" => $ca, "ch" => $ch, "orbit" => $orbit, "fish" => $fish);
		return $total;
	} 

	public static function createProjects()
	{
		$projects = Projects::getAll();
		Log::info('CommonLib:createProjects');
		Log::info($projects);
		return $projects;
	}

	public static function createHeaders($id)
	{
		$totalData = []; 
		$rawTemplateContents = TemplateContents::getHeaders($id);
		foreach ($rawTemplateContents as $rawTemplateContent) {
			$cleanTemplateContent = self::cloneTemplateContentObject($rawTemplateContent);
			$single = self::cleanObject(Headers::get($cleanTemplateContent->header_id));
			$cleanTemplateContent->tag_name = $single->tag_name;
			$cleanTemplateContent->value = $single->value;
			$totalData[] = $cleanTemplateContent;
		}
		return $totalData;
	}

	public static function createEducations($id)
	{
		$totalData = []; 
		$rawTemplateContents = TemplateContents::getEducations($id);
		foreach ($rawTemplateContents as $rawTemplateContent) {
			$cleanTemplateContent = self::cloneTemplateContentObject($rawTemplateContent);
			$single = self::cleanObject(Educations::get($cleanTemplateContent->education_id));
			$cleanTemplateContent->course_name = $single->course_name;
			$cleanTemplateContent->uni_name = $single->uni_name;
			$cleanTemplateContent->year = $single->year;
			$cleanTemplateContent->percentage_marks = $single->percentage_marks;
			$totalData[] = $cleanTemplateContent;
		}
		return $totalData;
	}

	public static function createSections($id, $section)
	{
		$totalData = []; 
		switch ($section) {
		    case "CA":
		        $rawTemplateContents = TemplateContents::getCA($id);
		        break;
			case "CH":
		        $rawTemplateContents = TemplateContents::getCH($id);
		        break;
		    case "ORBIT":
		        $rawTemplateContents = TemplateContents::getOrbit($id);
		        break;
		    case "FISH":
		        $rawTemplateContents = TemplateContents::getFish($id);
		        break;
		}                
		foreach ($rawTemplateContents as $rawTemplateContent) {
			$cleanTemplateContent = self::cloneTemplateContentObject($rawTemplateContent);
			$single = self::cleanObject(TechContents::get($cleanTemplateContent->tech_content_id));
			$cleanTemplateContent->content = $single->content;
			$totalData[] = $cleanTemplateContent;
		}
		return $totalData;
	}

	public static function createCH($id)
	{
		$totalData = []; 
		$rawTemplateContents = TemplateContents::getCH($id);
		foreach ($rawTemplateContents as $rawTemplateContent) {
			$cleanTemplateContent = self::cloneTemplateContentObject($rawTemplateContent);
			$single = self::cleanObject(TechContents::get($cleanTemplateContent->tech_content_id));
			$cleanTemplateContent->content = $single->content;
			$totalData[] = $cleanTemplateContent;
		}
		return $totalData;
	}

	public static function createOrbit($id)
	{
		$totalData = []; 
		$rawTemplateContents = TemplateContents::getFish($id);
		foreach ($rawTemplateContents as $rawTemplateContent) {
			$cleanTemplateContent = self::cloneTemplateContentObject($rawTemplateContent);
			$single = self::cleanObject(TechContents::get($cleanTemplateContent->tech_content_id));
			$cleanTemplateContent->content = $single->content;
			$totalData[] = $cleanTemplateContent;
		}
		return $totalData;
	}

	public static function createFish($id)
	{
		$totalData = []; 
		$rawTemplateContents = TemplateContents::getFish($id);
		foreach ($rawTemplateContents as $rawTemplateContent) {
			$cleanTemplateContent = self::cloneTemplateContentObject($rawTemplateContent);
			$single = self::cleanObject(TechContents::get($cleanTemplateContent->tech_content_id));
			$cleanTemplateContent->content = $single->content;
			$totalData[] = $cleanTemplateContent;
		}
		return $totalData;
	}

	public static function cleanObject($obj)
	{
		unset($obj->id);
		unset($obj->created_at);
		unset($obj->updated_at);
		return $obj;
	}

	public static function cloneTemplateContentObject($obj)
	{
		$dataObj = new \stdClass();	
		$dataObj->id = $obj->id;
		$dataObj->template_types_id = $obj->template_types_id;
		$dataObj->tech_content_id = $obj->tech_content_id;
		$dataObj->section_id = $obj->section_id;
		$dataObj->project_id = $obj->project_id;
		$dataObj->tech_types_id = $obj->tech_types_id;
		$dataObj->education_id = $obj->education_id;
		$dataObj->header_id = $obj->header_id;
		return $dataObj;
	}



}	