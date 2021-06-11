package com.dimasblack.remkuzovchasti.model;

import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class StreetDoor {

    @Id
    @GeneratedValue(generator="optimized-sequence")
    private Long id;

    private String doorName;

    private boolean isAvailable;

    private String code;

    private int price;

    private String date;

    private int count;

    private double canvasMetal;

    private double frameMetal;

    private double canvasThickness;

    private double frameThickness;

    private String canvasFrameFilling;

    private String externalInternalFinishing;

    private int hinges;

    private int antiRemovableLedgers;

    private int sealant;

    private String mainLock;

    private String additionalLock;

    private boolean doorSill;

    private String image;

    @OneToOne(cascade = CascadeType.ALL)
    private FileEntity file;


}
