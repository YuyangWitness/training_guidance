package com.yuyang.repository;

import com.yuyang.entity.student;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by yangyu on 16/8/4.
 */
public  interface  studentMapper {

    List<student> SelectStu(@Param("directorname")String directorname);

    student seletstuByid(@Param("id")String id);

    void updatestuByid(@Param("studentVal")student studentVal);

    List<student> selestuNotusername(@Param("studentVal")student studentVal);

    void insertStudent(@Param("studentVal")student studentVal);

    List<student> selectStuByusername(@Param("username")String username);

    void deleteStu(@Param(value = "id")String id);

}
