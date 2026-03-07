package com.secondchance.controller;

import com.secondchance.model.QnAResponse;
import com.secondchance.service.ElevenLabsService;
import com.secondchance.service.GeminiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/qna")
public class QnAController {

    private final GeminiService geminiService;
    private final ElevenLabsService elevenLabsService;

    @Autowired
    public QnAController(GeminiService geminiService, ElevenLabsService elevenLabsService) {
        this.geminiService = geminiService;
        this.elevenLabsService = elevenLabsService;
    }

    @PostMapping("/send-message")
    public QnAResponse sendMessage(@RequestBody Map<String, String> request) {
        String message = request.get("message");
        
        // 1. Get Text Response from Gemini
        String aiResponse = geminiService.getResponse(message);
        
        // 2. Generate MP3 Audio file of that text from ElevenLabs
        String audioUrlStr = elevenLabsService.generateAudio(aiResponse);
        
        // 3. Return both back to the React Native App
        return new QnAResponse(aiResponse, audioUrlStr);
    }
}
