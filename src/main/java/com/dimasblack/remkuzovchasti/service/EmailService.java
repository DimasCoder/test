package com.dimasblack.remkuzovchasti.service;

import com.dimasblack.remkuzovchasti.model.Email;
import com.dimasblack.remkuzovchasti.model.FlatDoor;
import com.dimasblack.remkuzovchasti.repo.EmailRepo;
import com.dimasblack.remkuzovchasti.repo.FlatDoorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    EmailRepo emailRepo;

    public Iterable<Email> findAllEmails(){
        return emailRepo.findAll();
    }

    public Email createEmail(Email email){
        return emailRepo.save(email);
    }

}
