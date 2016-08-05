package com.yuyang.service;

import com.yuyang.entity.student;
import com.yuyang.repository.studentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yangyu on 16/8/4.
 */
@Service
public class studentServiceImp implements studentService {

    @Autowired
    private studentMapper studentmapper;

    public List<student> SelectStu(String directorname) {

        List<student> students = studentmapper.SelectStu(directorname);


        return students;
    }

    public student seletstuByid(String id) {
      student studentVal =  studentmapper.seletstuByid(id);
        return studentVal;
    }

    public void updatestuByid(student studentVal) {
        studentmapper.updatestuByid(studentVal);

    }

    public List<student> selestuNotusername(student studentVal) {
        return studentmapper.selestuNotusername(studentVal);
    }

    public void insertStudent(student studentVal) {
        studentmapper.insertStudent(studentVal);
    }

    public List<student> selectStuByusername(String username) {
        return studentmapper.selectStuByusername(username);
    }
}
