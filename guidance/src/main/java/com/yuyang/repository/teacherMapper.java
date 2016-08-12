package com.yuyang.repository;

import com.yuyang.entity.Teacher;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by yangyu on 16/8/8.
 */
@Repository
public interface teacherMapper {
    void insertTeach(@Param(value = "teacher")Teacher teacher);

    List<Teacher> selectByName(@Param(value = "username")String username);
}
