package com.secondchance.controller;

import com.secondchance.model.SosRequest;
import com.secondchance.service.ElevenLabsService;
import com.secondchance.service.TwilioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/sos")
public class SosController {

    @Autowired
    private ElevenLabsService elevenLabsService;

    @Autowired
    private TwilioService twilioService;

    @PostMapping("/emergency-call")
    public ResponseEntity<Map<String, String>> emergencyCall(@RequestBody SosRequest request) {
        
        // 1. Generate the dynamic text string containing the user's live GPS coordinates.
        // We repeat the coordinates 3 times so the receiver has time to write them down.
        String crisisText = String.format(
            "Emergency. This is an automated medical SOS call from the Second Chance application. " +
            "A suspected opioid overdose is in progress. The patient is located at GPS coordinates: " +
            "Latitude %.4f, Longitude %.4f. " +
            "I repeat. The patient is at Latitude %.4f, Longitude %.4f. " +
            "One more time. Latitude %.4f, Longitude %.4f. " +
            "Please send medical assistance immediately.",
            request.getLatitude(), request.getLongitude(),
            request.getLatitude(), request.getLongitude(),
            request.getLatitude(), request.getLongitude()
        );

        // 2. Pass this string into ElevenLabs to dynamically generate a new voice MP3
        String audioUrlPath = elevenLabsService.generateAudio(crisisText);

        // 3. Command Twilio to call the teammate's phone and play the MP3!
        twilioService.makeEmergencyCall(audioUrlPath);

        // 4. Return success to the mobile app
        Map<String, String> response = new HashMap<>();
        response.put("status", "SOS Call Initiated successfully.");
        response.put("audioUrl", audioUrlPath);
        return ResponseEntity.ok(response);
    }
}
