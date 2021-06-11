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
public class FlatDoor {

    @Id
    @GeneratedValue(generator="optimized-sequence")
    private Long id;

    private String doorName;

    private String doorType;

    private boolean available;

    private int price;

    private String date;

    private int count;

    private String deviator;

    private double canvasMetal;

    private double frameMetal;

    private double canvasThickness;

    private double frameThickness;

    private String canvasFrameFilling;

    private String externalInternalFinishing;

    private boolean nightValve;

    private int hinges;

    private int antiRemovableLedgers;

    private int sealant;

    private String mainLock;

    private String additionalLock;

    private boolean doorSill;

    private String series;

    private String burglaryResistance;

    private String image;

    private String image1;

    private String video;

    @Column(columnDefinition="TEXT")
    private String doorConstruction;

    @Column(columnDefinition="TEXT")
    private String descBurglaryResistance;

    @Column(columnDefinition="TEXT")
    private String heatSoundIsolation;

    @Column(columnDefinition="TEXT")
    private String glazedWindow;

    @Column(columnDefinition="TEXT")
    private String design;

    @OneToOne(cascade = CascadeType.ALL)
    private FileEntity file;

    @OneToOne(cascade = CascadeType.ALL)
    private FileEntity file1;
}
