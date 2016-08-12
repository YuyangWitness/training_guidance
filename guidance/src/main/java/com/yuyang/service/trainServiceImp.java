package com.yuyang.service;

import com.yuyang.entity.Train;
import com.yuyang.entity.trainVal;
import com.yuyang.repository.trainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by yangyu on 16/8/10.
 */
@Service
public class trainServiceImp implements trainService{

    @Autowired
    private trainMapper trainmapper;

    public List<trainVal> selectTrain(String director) {
        List<trainVal> trains = trainmapper.selectTrain(director);
        return trains;
    }

    public void insertTrain(Train trainVal) {
        trainmapper.insertTrain(trainVal);
    }

    public void updateTrain(Train trainVal) {
        trainmapper.updateTrain(trainVal);
    }

    public trainVal selectTrainByid(String id) {
        trainVal train = trainmapper.selectTrainByid(id);
        return train;
    }

    public void deleteTrain(String id) {
        trainmapper.deleteTrain(id);
    }
}
