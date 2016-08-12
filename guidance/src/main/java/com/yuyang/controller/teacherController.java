package com.yuyang.controller;

import com.yuyang.Common.UUIDGeneratorUtils;
import com.yuyang.entity.Teacher;
import com.yuyang.service.teacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by yangyu on 16/8/8.
 */
@RequestMapping(value = "teacher")
@Controller
public class teacherController {

    @Autowired
    private teacherService teacherservice;

    @RequestMapping(value = "addTeacher")
    @ResponseBody
    public String InsertTeacher(@ModelAttribute(value = "teacher")Teacher teacher){

        if (teacher!=null) {
           List<Teacher> teachers = teacherservice.selectByName(teacher.getTeaName());
            if (teachers.size()==0) {
                teacher.setId(UUIDGeneratorUtils.uuid32());

                teacherservice.insertTeach(teacher);

                return "1";
            }else{
                return "2";
            }
        }else{
            return "0";
        }

    }

    @RequestMapping(value = "selectByname")
    @ResponseBody
    public String selectByname(@ModelAttribute(value = "teacher")Teacher teacher){

        if (teacher!=null){
            List<Teacher> teachers = teacherservice.selectByName(teacher.getTeaName());
            if (teachers.size()==0){
                return "0";
            }else{
                if(teachers.get(0).getTeaPassword().equals(teacher.getTeaPassword())){
                    return "1";
                }else {
                    return "2";
                }
            }
        }

        return "3";
    }
}
