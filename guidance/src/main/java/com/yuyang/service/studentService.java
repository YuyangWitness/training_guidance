package com.yuyang.service;

import com.yuyang.entity.student;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by yangyu on 16/8/4.
 */

public interface studentService {

    List<student> SelectStu(String directorname);

    student seletstuByid(String id);

    void updatestuByid(student studentVal);

    List<student> selestuNotusername(student studentVal);

    void insertStudent(student studentVal);

    List<student> selectStuByusername(String username);


}
