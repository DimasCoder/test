package com.dimasblack.remkuzovchasti.service;

import com.dimasblack.remkuzovchasti.model.AutoModel;
import com.dimasblack.remkuzovchasti.model.FileEntity;
import com.dimasblack.remkuzovchasti.model.FlatDoor;
import com.dimasblack.remkuzovchasti.model.Product;
import com.dimasblack.remkuzovchasti.repo.FlatDoorRepo;
import com.dimasblack.remkuzovchasti.repo.ProductRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class FlatDoorService {
    @Autowired
    FlatDoorRepo flatDoorRepo;

    public Iterable<FlatDoor> findAllDoors(){
        return flatDoorRepo.findAll(Sort.by(Sort.Direction.ASC, "id"));
    }

    public Iterable<FlatDoor> findFlatDoor(String doorType){
        return flatDoorRepo.getFlatDoorByDoorType(doorType);
    }

    public Iterable<FlatDoor> findWarehouseDoors(){
        return flatDoorRepo.getFlatDoorsByAvailableTrue();
    }

    public FlatDoor createDoor(String doorName,
                                  String doorType,
                                  int price,
                                  String code,
                                  int count,
                                  String deviator,
                                  double canvasMetal,
                                  double frameMetal,
                                  double canvasThickness,
                                  double frameThickness,
                                  String canvasFrameFilling,
                                  String externalInternalFinishing,
                                  String nightValve,
                                  int hinges,
                                  int antiRemovableLedgers,
                                  int sealant,
                                  String mainLock,
                                  String additionalLock,
                                  String doorSill,
                                  String series,
                                  String burglaryResistance,
                                  MultipartFile file) throws IOException {
        FlatDoor door = new FlatDoor();
        if(flatDoorRepo.getDoorByDoorName(doorName) == null ) {
            door.setDoorName(doorName);
        }else{
            return null;
        }

        door.setDoorType(doorType);
        door.setPrice(price);
        door.setCount(count);
        door.setAvailable(count > 0);
        door.setDeviator(deviator.length() > 0 ? deviator : null);
        door.setCanvasMetal(canvasMetal > 0 ? canvasMetal : null);
        door.setFrameMetal(frameMetal > 0 ? frameMetal : null);
        door.setCanvasThickness(canvasThickness > 0 ? canvasThickness : null);
        door.setFrameThickness(frameThickness > 0 ? frameThickness : null);
        door.setCanvasFrameFilling(canvasFrameFilling.length() > 0 ? canvasFrameFilling : null);
        door.setExternalInternalFinishing(externalInternalFinishing.length() > 0 ? externalInternalFinishing : null);
        door.setNightValve(Boolean.parseBoolean(nightValve));
        door.setHinges(hinges > 0 ? hinges : null);
        door.setAntiRemovableLedgers(antiRemovableLedgers > 0 ? antiRemovableLedgers : null);
        door.setSealant(sealant > 0 ? sealant : null);
        door.setMainLock(mainLock.length() > 0 ? mainLock : null);
        door.setAdditionalLock(additionalLock.length() > 0 ? additionalLock : null);
        door.setDoorSill(Boolean.parseBoolean(doorSill));
        door.setSeries(series);
        door.setBurglaryResistance(burglaryResistance);

        Date dateNow = new Date();
        SimpleDateFormat formatForDateNow = new SimpleDateFormat("dd MMMM HH:mm");
        String date = String.format(formatForDateNow.format(dateNow));
        door.setDate(date);

        FileEntity fileEntity = new FileEntity();
        fileEntity.setName(StringUtils.cleanPath(file.getOriginalFilename()));
        fileEntity.setContentType(file.getContentType());
        fileEntity.setData(file.getBytes());
        fileEntity.setSize(file.getSize());
        door.setFile(fileEntity);
        return flatDoorRepo.save(door);
    }


    public FlatDoor updateDoor(FlatDoor doorFromDb, FlatDoor door){
        BeanUtils.copyProperties(door, doorFromDb, "id");
        return door;
    }

    public void deleteDoor(FlatDoor door){
        flatDoorRepo.delete(door);
    }
}
