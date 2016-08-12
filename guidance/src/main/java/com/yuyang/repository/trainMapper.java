package com.yuyang.repository;

import com.yuyang.entity.Train;
import com.yuyang.entity.trainVal;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by yangyu on 16/8/10.
 */
@Repository
public interface trainMapper {

    List<trainVal> selectTrain(@Param(value = "director") String director);

    void insertTrain(@Param(value = "trainVal")Train trainVal);

    void updateTrain(@Param(value = "trainVal")Train trainVal);

    trainVal selectTrainByid(@Param(value = "id")String id);

    void deleteTrain(@Param(value = "id")String id);
}
