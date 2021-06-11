package com.dimasblack.remkuzovchasti.repo;

import com.dimasblack.remkuzovchasti.model.FlatDoor;
import com.dimasblack.remkuzovchasti.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlatDoorRepo extends JpaRepository<FlatDoor, Long> {

    FlatDoor getDoorByDoorName(String doorName);

    Iterable<FlatDoor> getFlatDoorByDoorType(String doorType);

    Iterable<FlatDoor> getFlatDoorsByAvailableTrue();
}
