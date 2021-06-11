package com.dimasblack.remkuzovchasti.controller;

import com.dimasblack.remkuzovchasti.model.Email;
import com.dimasblack.remkuzovchasti.model.FlatDoor;
//import com.dimasblack.remkuzovchasti.service.EmailSenderService;
import com.dimasblack.remkuzovchasti.service.EmailSenderService;
import com.dimasblack.remkuzovchasti.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/emails/")
@CrossOrigin(origins = "*", maxAge = 3600)
public class EmailController {

    @Autowired
    EmailService emailService;

    @Autowired
    EmailSenderService emailSenderService;

    @GetMapping("/all")
    public Iterable<Email> allDoors(){
        return emailService.findAllEmails();
    }

    @PostMapping
    public Email createNewEmail(@RequestBody Email email){
        return emailService.createEmail(email);
    }

    @PostMapping("/send")
    public void sendEmails(@RequestParam("subject") String subject, @RequestParam("text") String text){
        Iterable<Email> emails = emailService.findAllEmails();
        for(Email e: emails){
            try {
                emailSenderService.sendToClient(subject, text, e);
            } catch (Exception exception) {
                exception.printStackTrace();
            }
        }
    }
}
