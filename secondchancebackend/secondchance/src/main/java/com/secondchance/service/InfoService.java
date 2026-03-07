package com.secondchance.service;

import com.secondchance.model.InfoSlide;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InfoService {

    public List<InfoSlide> getOverdoseInfo() {
        List<InfoSlide> slides = new ArrayList<>();
        slides.add(new InfoSlide("Check for breathing and responsiveness.", "voice_check.mp3", "img_check.jpeg"));
        slides.add(new InfoSlide("Administer Narcan nasal spray.", "voice_narcan.mp3", "img_narcan.jpeg"));
        slides.add(new InfoSlide("Call 911 immediately.", "voice_call911.mp3", "img_call911.jpeg"));
        slides.add(new InfoSlide("Perform rescue breathing if necessary.", "voice_breathe.mp3", "img_breathe.jpeg"));
        slides.add(new InfoSlide("Stay with the person until help arrives.", "voice_stay.mp3", "img_stay.jpeg"));
        return slides;
    }

    public List<InfoSlide> getExternalHelpInfo() {
        List<InfoSlide> slides = new ArrayList<>();
        slides.add(new InfoSlide("Crisis Helpline: 1-800-662-HELP", null, "img_helpline.jpeg"));
        slides.add(new InfoSlide("Local Therapy Groups", null, "img_therapy.jpeg"));
        return slides;
    }
}
