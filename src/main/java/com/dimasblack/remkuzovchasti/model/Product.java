package com.dimasblack.remkuzovchasti.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Product {
    @Id
    @GeneratedValue(generator = "optimized-sequence")
    private Long id;

    private String productName;
    private int price;
    private int code;
    private boolean isAvailable;
    private int countOfSold;

    @OneToOne(cascade = CascadeType.ALL)
    private FileEntity file;

}
