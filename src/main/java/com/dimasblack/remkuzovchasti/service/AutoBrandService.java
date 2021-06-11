package com.dimasblack.remkuzovchasti.service;

import com.dimasblack.remkuzovchasti.model.AutoBrand;
import com.dimasblack.remkuzovchasti.model.FileEntity;
import com.dimasblack.remkuzovchasti.repo.AutoBrandRepo;
import com.dimasblack.remkuzovchasti.repo.AutoModelRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class AutoBrandService {
    @Autowired
    AutoBrandRepo autoBrandRepo;

    @Autowired
    AutoModelRepo autoModelRepo;

    @Value("${upload.path}")
    private String uploadPath;

    public Iterable<AutoBrand> findAllBrands(){
        return autoBrandRepo.findAll(Sort.by(Sort.Direction.ASC, "brandName"));
    }

    public AutoBrand createBrand(String brand, MultipartFile file) throws IOException {
        AutoBrand autoBrand = new AutoBrand();
        if(autoBrandRepo.getAutoBrandByBrandName(brand) == null ) {
            autoBrand.setBrandName(brand);
        }else{
            return null;
        }
        FileEntity fileEntity = new FileEntity();
        fileEntity.setName(StringUtils.cleanPath(file.getOriginalFilename()));
        fileEntity.setContentType(file.getContentType());
        fileEntity.setData(file.getBytes());
        fileEntity.setSize(file.getSize());
        autoBrand.setFile(fileEntity);
        autoBrand.setImage(file.getOriginalFilename());

        return autoBrandRepo.save(autoBrand);
    }

    public AutoBrand updateBrand(AutoBrand brandFromDb, AutoBrand brand){
        BeanUtils.copyProperties(brand, brandFromDb, "id");
        return brand;
    }

    public void deleteBrand(AutoBrand brand){
        autoModelRepo.deleteAll(brand.getModels());
        autoBrandRepo.delete(brand);
    }
}
