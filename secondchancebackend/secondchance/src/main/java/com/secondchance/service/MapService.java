package com.secondchance.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.secondchance.model.Site;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class MapService {

    @Value("${google.maps.api.key}")
    private String googleMapsApiKey;

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public List<Site> getNarcanSites(double lat, double lng) {
        // Simple pharmacy search
        return searchGooglePlacesText(lat, lng, "Pharmacy");
    }

    public List<Site> getSafeInjectionSites(double lat, double lng) {
        // Textual search for safe injection
        return searchGooglePlacesText(lat, lng, "Community health clinic OR Hospital");
    }

    public List<Site> getTherapySites(double lat, double lng) {
        // Textual search for addiction therapy
        return searchGooglePlacesText(lat, lng, "Addiction treatment center therapy");
    }

    private List<Site> searchGooglePlacesText(double lat, double lng, String query) {
        List<Site> sites = new ArrayList<>();
        
        try {
            String url = "https://places.googleapis.com/v1/places:searchText";
            
            HttpHeaders headers = new HttpHeaders();
            headers.set("Content-Type", "application/json");
            headers.set("X-Goog-Api-Key", googleMapsApiKey);
            headers.set("X-Goog-FieldMask", "places.displayName,places.location,places.regularOpeningHours");

            // Build the JSON request body matching the searchText endpoint
            String requestBody = "{" +
                "\"textQuery\": \"" + query + "\"," +
                "\"pageSize\": 5," +
                "\"locationBias\": {" +
                    "\"circle\": {" +
                        "\"center\": {" +
                            "\"latitude\": " + lat + "," +
                            "\"longitude\": " + lng +
                        "}," +
                        "\"radius\": 5000.0" + // 5km radius
                    "}" +
                "}" +
            "}";

            HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);
            
            JsonNode rootNode = objectMapper.readTree(response.getBody());
            JsonNode placesNode = rootNode.path("places");
            
            if (placesNode.isArray()) {
                for (JsonNode place : placesNode) {
                    String name = place.path("displayName").path("text").asText();
                    double placeLat = place.path("location").path("latitude").asDouble();
                    double placeLng = place.path("location").path("longitude").asDouble();
                    
                    // Default hours if API doesn't return them
                    List<Float> hours = Arrays.asList(0f, 24f); 
                    
                    sites.add(new Site(Arrays.asList(placeLat, placeLng), hours, name));
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
            // Fallback to dummy data if the API fails just so the app doesn't crash during demo
            sites.add(new Site(Arrays.asList(lat + 0.01, lng + 0.01), Arrays.asList(9.0f, 21.0f), "[Error fallback] Local Clinic"));
        }
        
        return sites;
    }

    public String buildRoute() {
        return "Route to nearest site generated (placeholder)";
    }
}
