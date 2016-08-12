package com.yuyang.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.yuyang.Common.UUIDGeneratorUtils;
import com.yuyang.entity.student;
import com.yuyang.service.studentService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by yangyu on 16/8/4.
 */
@Controller
@RequestMapping(value = "student")
public class studentController {
    @Autowired
    private studentService studentservice;

    @RequestMapping(value = "getstudentBydrt")
    @ResponseBody
    public JSONObject  getStudentBydrt(@RequestParam(value = "director") String director){
        List<student> students = studentservice.SelectStu(director);
        JSONObject json = new JSONObject();
        json.put("studentList",students);
        return json;
    }

    @RequestMapping(value = "getstudentByid")
    @ResponseBody
    public JSONObject getstudentByid(@RequestParam(value = "id")String id){
      student studentVal = studentservice.seletstuByid(id);
        JSONObject json = new JSONObject();
        json.put("student",studentVal);
        return json;
    }

   @RequestMapping(value = "modifystudentByid")
    @ResponseBody
    public String modifystudentByid(@ModelAttribute(value = "s") student s){

       List<student> studentList = studentservice.selestuNotusername(s);
       if (studentList.size()==0){
           studentservice.updatestuByid(s);
               return "1";
       }else {
           return "0";
       }


   }

    @RequestMapping(value = "insertStu")
    @ResponseBody
    public String insertStudent(@ModelAttribute(value = "s") student s){

        List<student> students = studentservice.selectStuByusername(s.getUsername());
        if (students.size()==0){
         String id =  UUIDGeneratorUtils.uuid32();
            s.setId(id);
        studentservice.insertStudent(s);
            return "1";
        }else{
            return "0";
        }
    }

    @RequestMapping(value = "deleteStu")
    @ResponseBody
    public String deleteStu(@RequestParam(value = "id")String id){
        if (StringUtils.isNotEmpty(id)){
            studentservice.deleteStu(id);
            return "1";
        }else{
            return "0";
        }
    }

    @RequestMapping(value = "selectStuforTrain")
    @ResponseBody
    public JSONArray getStuForTrain(@RequestParam(value = "director")String director){

      List<student> students =  studentservice.SelectStu(director);

        JSONArray jsonArray = new JSONArray();

        for (student s : students){
            JSONObject json = new JSONObject();
             json.put("value",s.getId());
            json.put("text",s.getName());

            jsonArray.add(json);
        }

        System.out.println(jsonArray.toString());

        return jsonArray;
    }
}
