package com.dimasblack.remkuzovchasti.controller;

import com.dimasblack.remkuzovchasti.model.Product;
import com.dimasblack.remkuzovchasti.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/all")
    public Iterable<Product> allProducts(){
        return productService.findAllProducts();
    }

    @GetMapping("{id}")
    public Product oneProduct(@PathVariable("id") Product product){
        return product;
    }


    @PostMapping
    public Product createProduct(@RequestParam("productName") String productName,
                                 @RequestParam("price") int price,
                                 @RequestParam("code") int code,
                                 @RequestParam("file") MultipartFile file) throws IOException {
        return productService.createProduct(productName, price, code, file);
    }

    @PutMapping("{id}")
    public Product updateProduct(@PathVariable("id") Product productFromDb, @RequestBody Product product){
        return productService.updateProduct(productFromDb, product);
    }

    @DeleteMapping("{id}")
    public void deleteProduct(@PathVariable("id") Product product){
        productService.deleteProduct(product);
    }
}
