package com.secondchance.model;

public class QnAResponse {
    private String responseMessage;
    private String voiceover; // mp3 file path/url/base64

    public QnAResponse() {}

    public QnAResponse(String responseMessage, String voiceover) {
        this.responseMessage = responseMessage;
        this.voiceover = voiceover;
    }

    public String getResponseMessage() { return responseMessage; }
    public void setResponseMessage(String responseMessage) { this.responseMessage = responseMessage; }

    public String getVoiceover() { return voiceover; }
    public void setVoiceover(String voiceover) { this.voiceover = voiceover; }
}
