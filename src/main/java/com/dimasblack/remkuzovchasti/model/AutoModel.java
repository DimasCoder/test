package com.dimasblack.remkuzovchasti.model;

import com.fasterxml.jackson.annotation.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class AutoModel {

    @Id
    @GeneratedValue(generator="optimized-sequence")
    private Long id;

    private String modelName;

    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnoreProperties("models")
    private AutoBrand brand;

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public AutoBrand getBrand() {
        return brand;
    }

    public void setBrand(AutoBrand brand) {
        this.brand = brand;
    }

}
