package com.yuyang.service;

import com.yuyang.entity.Train;
import com.yuyang.entity.trainVal;

import java.util.List;

/**
 * Created by yangyu on 16/8/10.
 */
public interface trainService {

    List<trainVal> selectTrain(String director);

    void insertTrain(Train trainVal);

    void updateTrain(Train trainVal);

    trainVal selectTrainByid(String id);

    void deleteTrain(String id);

}
