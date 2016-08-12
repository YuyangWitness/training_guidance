package com.yuyang.controller;

import com.yuyang.Common.UUIDGeneratorUtils;
import com.yuyang.entity.Train;
import com.yuyang.entity.trainVal;
import com.yuyang.service.trainService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by yangyu on 16/8/10.
 */
@Controller
@RequestMapping(value = "train")
public class trainController {

    @Autowired
    private trainService trainservice;

    @RequestMapping(value = "getTrainInfo")
    @ResponseBody
    public List<trainVal> getTrainInfo(@RequestParam(value = "director")String director){

        if (StringUtils.isNotEmpty(director)){
        List<trainVal> trains = trainservice.selectTrain(director);
            return trains;

    }
        return null;
    }

    @RequestMapping(value = "insertTrain")
    @ResponseBody
    public String insertTrain(@ModelAttribute(value = "train")Train train){

        if (train != null){
            String id = UUIDGeneratorUtils.uuid32();
            train.setId(id);
            trainservice.insertTrain(train);
            return "1";
        }


        return null;
    }

    @RequestMapping(value = "updateTrain")
    @ResponseBody
    public String updateTrain(@ModelAttribute(value = "train")Train train){

        if(train !=null){
            trainservice.updateTrain(train);

            return "1";
        }

        return "0";
    }

    @RequestMapping(value = "selectTrainByid")
    @ResponseBody
    public trainVal getTrainByid(@RequestParam(value = "id")String id){
        trainVal train = new trainVal();
        if (StringUtils.isNotEmpty(id)){
          train =  trainservice.selectTrainByid(id);

            return train;
        }

        return null;
    }

    @RequestMapping(value = "deleteTrain")
    @ResponseBody
    public String deleteTrain(@RequestParam(value = "id")String id){

        if (StringUtils.isNotEmpty(id)){
            trainservice.deleteTrain(id);
            return "1";
        }
        return "0";
    }

}
