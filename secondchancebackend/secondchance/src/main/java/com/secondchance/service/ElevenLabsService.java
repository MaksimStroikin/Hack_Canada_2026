package com.secondchance.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class ElevenLabsService {

    @Value("${elevenlabs.api.key}")
    private String apiKey;

    // We will use "Rachel", a calm and pleasant voice
    private static final String VOICE_ID = "21m00Tcm4TlvDq8ikWAM"; 
    private static final String ELEVENLABS_API_URL = "https://api.elevenlabs.io/v1/text-to-speech/" + VOICE_ID;

    // We will save the generated MP3s to an external folder so we can serve them dynamically
    private static final String AUDIO_DIR = "generated_audio/";

    public String generateAudio(String text) {
        RestTemplate restTemplate = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("xi-api-key", apiKey);

        Map<String, Object> body = new HashMap<>();
        body.put("text", text);
        // Using "turbo" model to generate audio blazing fast
        body.put("model_id", "eleven_turbo_v2_5");
        
        Map<String, Object> voiceSettings = new HashMap<>();
        voiceSettings.put("stability", 0.5);
        voiceSettings.put("similarity_boost", 0.5);
        body.put("voice_settings", voiceSettings);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

        try {
            ResponseEntity<byte[]> response = restTemplate.exchange(ELEVENLABS_API_URL, HttpMethod.POST, entity, byte[].class);
            if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
                return saveMp3File(response.getBody());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return "error_generating_audio.mp3";
    }

    private String saveMp3File(byte[] audioData) throws IOException {
        Path path = Paths.get(AUDIO_DIR);
        if (!Files.exists(path)) {
            Files.createDirectories(path);
        }

        String fileName = UUID.randomUUID().toString() + ".mp3";
        String filePath = AUDIO_DIR + fileName;

        try (FileOutputStream fos = new FileOutputStream(filePath)) {
            fos.write(audioData);
        }

        // Return the API path that Spring Boot will use to serve this file
        return "/api/audio/" + fileName;
    }
}
