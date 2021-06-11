package com.dimasblack.remkuzovchasti.service;

import com.dimasblack.remkuzovchasti.model.FileEntity;
import com.dimasblack.remkuzovchasti.repo.AutoBrandRepo;
import com.dimasblack.remkuzovchasti.repo.FileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class FileService {
    @Autowired
    private FileRepo fileRepo;

    @Autowired
    private AutoBrandRepo autoBrandRepo;


    public FileEntity save(MultipartFile file, String brandName) throws IOException {
        FileEntity fileEntity = new FileEntity();
        fileEntity.setName(StringUtils.cleanPath(file.getOriginalFilename()));
        fileEntity.setContentType(file.getContentType());
        fileEntity.setData(file.getBytes());
        fileEntity.setSize(file.getSize());
        fileEntity.setAutoBrand(autoBrandRepo.getAutoBrandByBrandName(brandName));
        return fileRepo.save(fileEntity);
    }

    public Optional<FileEntity> getFile(String id) {
        return fileRepo.findById(id);
    }

    public List<FileEntity> getAllFiles() {
        return fileRepo.findAll();
    }
}