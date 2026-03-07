package com.secondchance.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/sos")
public class SosController {

    @PostMapping("/emergency-call")
    public void emergencyCall() {
        // Trigger emergency call logic (Twilio/etc.)
        System.out.println("Emergency call triggered!");
    }
}
