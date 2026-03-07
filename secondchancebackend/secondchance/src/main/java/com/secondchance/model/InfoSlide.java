package com.secondchance.model;

public class InfoSlide {
    private String text;
    private String voiceover; // mp3
    private String image; // jpeg

    public InfoSlide() {}

    public InfoSlide(String text, String voiceover, String image) {
        this.text = text;
        this.voiceover = voiceover;
        this.image = image;
    }

    public String getText() { return text; }
    public void setText(String text) { this.text = text; }

    public String getVoiceover() { return voiceover; }
    public void setVoiceover(String voiceover) { this.voiceover = voiceover; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }
}
