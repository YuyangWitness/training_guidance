package com.yuyang.service;

import com.yuyang.entity.Teacher;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by yangyu on 16/8/8.
 */
public interface teacherService {
    void insertTeach(Teacher teacher);

    List<Teacher> selectByName(String username);

}
