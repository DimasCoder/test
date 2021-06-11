package com.dimasblack.remkuzovchasti.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Email {

    @Id
    @GeneratedValue(generator="optimized-sequence")
    private Long id;

    private String email;

}
