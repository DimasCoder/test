package com.dimasblack.remkuzovchasti.repo;

import com.dimasblack.remkuzovchasti.model.AutoBrand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AutoBrandRepo extends JpaRepository<AutoBrand, Long> {

    AutoBrand getById(Long id);

    AutoBrand getAutoBrandByBrandName(String brandName);
}