package com.dimasblack.remkuzovchasti.repo;

import com.dimasblack.remkuzovchasti.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {
    Product getProductByProductName(String productName);
}
