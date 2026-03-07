package com.secondchance.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private static final String GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=";

    public String getResponse(String prompt) {
        RestTemplate restTemplate = new RestTemplate();
        
        // Prepare headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Prepare body
        Map<String, Object> requestBody = new HashMap<>();
        List<Map<String, Object>> contents = new ArrayList<>();
        Map<String, Object> content = new HashMap<>();
        List<Map<String, String>> parts = new ArrayList<>();
        Map<String, String> part = new HashMap<>();
        
        // Context instruction for the prompt
        String engineeredPrompt = "You are a crisis and medical information AI assistant specialized in opioid overdose prevention. " +
                "Provide a brief, clear, and reassuring answer for this user facing an emergency context: " + prompt;
        
        part.put("text", engineeredPrompt);
        parts.add(part);
        content.put("parts", parts);
        contents.add(content);
        requestBody.put("contents", contents);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<Map> response = restTemplate.postForEntity(GEMINI_API_URL + apiKey, entity, Map.class);
            Map<String, Object> responseBody = response.getBody();
            if (responseBody != null && responseBody.containsKey("candidates")) {
                List<Map<String, Object>> candidates = (List<Map<String, Object>>) responseBody.get("candidates");
                if (!candidates.isEmpty()) {
                    Map<String, Object> firstCandidate = candidates.get(0);
                    Map<String, Object> contentObj = (Map<String, Object>) firstCandidate.get("content");
                    List<Map<String, String>> partsList = (List<Map<String, String>>) contentObj.get("parts");
                    return partsList.get(0).get("text");
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            return "I apologize, but I couldn't reach the AI service right now. Please seek immediate human medical assistance or call emergency services if needed.";
        }
        
        return "I couldn't generate a response. Please try again or seek help immediately.";
    }
}
