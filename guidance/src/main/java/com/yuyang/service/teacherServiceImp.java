package com.yuyang.service;

import com.yuyang.entity.Teacher;
import com.yuyang.repository.teacherMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yangyu on 16/8/8.
 */
@Service
public class teacherServiceImp implements teacherService {
    @Autowired
    private teacherMapper teachermapper;
    public void insertTeach(Teacher teacher) {

        teachermapper.insertTeach(teacher);

    }

    public List<Teacher> selectByName(String username) {
      return teachermapper.selectByName(username);
    }
}
