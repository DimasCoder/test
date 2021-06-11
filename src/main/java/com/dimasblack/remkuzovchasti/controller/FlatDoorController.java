package com.dimasblack.remkuzovchasti.controller;

import com.dimasblack.remkuzovchasti.model.FlatDoor;
import com.dimasblack.remkuzovchasti.service.FlatDoorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/doors/")
@CrossOrigin(origins = "*", maxAge = 3600)
public class FlatDoorController {

    @Autowired
    FlatDoorService flatDoorService;

    @GetMapping("/all")
    public Iterable<FlatDoor> allDoors(){
        return flatDoorService.findAllDoors();
    }

    @GetMapping("{id}")
    public FlatDoor oneDoor(@PathVariable("id") FlatDoor door){
        return door;
    }

    @GetMapping("/filter/{doorType}")
    public Iterable<FlatDoor> flatDoors(@PathVariable("doorType") String doorType){return flatDoorService.findFlatDoor(doorType);}

    @GetMapping("/filter/warehouse")
    public Iterable<FlatDoor> warehouseDoors(){
        return flatDoorService.findWarehouseDoors();
    }



    @PostMapping
    public FlatDoor createDoor(@RequestParam("doorName") String doorName,
                               @RequestParam("doorType") String doorType,
                                 @RequestParam("price") int price,
                                 @RequestParam("code") String code,
                                 @RequestParam("count") int count,
                                 @RequestParam("deviator") String deviator,
                                 @RequestParam("canvasMetal") double canvasMetal,
                                 @RequestParam("frameMetal") double frameMetal,
                                 @RequestParam("canvasThickness") double canvasThickness,
                                 @RequestParam("frameThickness") double frameThickness,
                                 @RequestParam("canvasFrameFilling") String canvasFrameFilling,
                                 @RequestParam("externalInternalFinishing") String externalInternalFinishing,
                                 @RequestParam("nightValve") String nightValve,
                                 @RequestParam("hinges") int hinges,
                                 @RequestParam("antiRemovableLedgers") int antiRemovableLedgers,
                                 @RequestParam("sealant") int sealant,
                                 @RequestParam("mainLock") String mainLock,
                                 @RequestParam("additionalLock") String additionalLock,
                                 @RequestParam("doorSill") String doorSill,
                                 @RequestParam("series") String series,
                                 @RequestParam("burglaryResistance") String burglaryResistance,
                                 @RequestParam("file") MultipartFile file) throws IOException {
        return flatDoorService.createDoor(doorName, doorType, price, code, count, deviator, canvasMetal, frameMetal, canvasThickness, frameThickness, canvasFrameFilling, externalInternalFinishing, nightValve, hinges, antiRemovableLedgers, sealant, mainLock, additionalLock, doorSill, series, burglaryResistance, file);
    }

    @PutMapping("{id}")
    public FlatDoor updateDoor(@PathVariable("id") FlatDoor doorFromDb, @RequestBody FlatDoor door){
        return flatDoorService.updateDoor(doorFromDb, door);
    }

    @DeleteMapping("{id}")
    public void deleteDoor(@PathVariable("id") FlatDoor door){
        flatDoorService.deleteDoor(door);
    }
}
