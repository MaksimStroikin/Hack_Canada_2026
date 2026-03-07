package com.secondchance.service;

import com.secondchance.model.Site;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class MapService {

    public List<Site> getNarcanSites() {
        List<Site> sites = new ArrayList<>();
        sites.add(new Site(Arrays.asList(43.6532, -79.3832), Arrays.asList(9.0f, 21.0f), "Shoppers Drug Mart - Downtown"));
        sites.add(new Site(Arrays.asList(43.6644, -79.4144), Arrays.asList(8.0f, 22.0f), "Pharmacy - West End"));
        return sites;
    }

    public List<Site> getSafeInjectionSites() {
        List<Site> sites = new ArrayList<>();
        sites.add(new Site(Arrays.asList(43.6572, -79.3789), Arrays.asList(0.0f, 24.0f), "Safe Injection Clinic - Central"));
        return sites;
    }

    public List<Site> getTherapySites() {
        List<Site> sites = new ArrayList<>();
        sites.add(new Site(Arrays.asList(43.6425, -79.4000), Arrays.asList(10.0f, 18.0f), "Therapy Center"));
        return sites;
    }
    
    public String buildRoute() {
        return "Route to nearest site generated (placeholder)";
    }
}
