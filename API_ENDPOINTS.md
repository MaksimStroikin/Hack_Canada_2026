# Second Chance Backend API Endpoints

This document details all existing endpoints in the project, their methods, and the exact input and output JSON structures based on the backend data models.

## 1. SOS / Emergency (`SosController`)
**Endpoint:** `POST /api/sos/emergency-call`
**Description:** Triggers an emergency SOS call using Twilio with a dynamically generated ElevenLabs voiceover containing the user's live GPS coordinates.

**Input JSON (`SosRequest`):**
```json
{
  "latitude": 43.6532,  // Double (required)
  "longitude": -79.3832 // Double (required)
}
```

**Output JSON:**
```json
{
  "status": "SOS Call Initiated successfully.", // String
  "audioUrl": "generated_audio_path.mp3"        // String
}
```

## 2. Q&A / Gemini Chat (`QnAController`)
**Endpoint:** `POST /api/qna/send-message`
**Description:** Sends a user question to Google's Gemini AI to generate medical advice, which is then immediately passed to ElevenLabs to generate an MP3 voiceover.

**Input JSON:**
```json
{
  "message": "What are the signs of an overdose?" // String (required)
}
```

**Output JSON (`QnAResponse`):**
```json
{
  "responseMessage": "The signs of an overdose include...", // String
  "voiceover": "/audio/generated_audio.mp3"                 // String
}
```

## 3. Map Locations (`MapController`)
### Narcan Sites
**Endpoint:** `GET /api/map/narcan-sites`
**Description:** Retrieves the 5 closest Narcan availability locations.
**Input Query Parameters:** 
- `lat` (Double, default: `43.6532`)
- `lng` (Double, default: `-79.3832`)

### Safe Injection Sites
**Endpoint:** `GET /api/map/safe-injection-sites`
**Description:** Retrieves the 5 closest safe injection clinics.
**Input Query Parameters:** 
- `lat` (Double, default: `43.6532`)
- `lng` (Double, default: `-79.3832`)

### Therapy Sites
**Endpoint:** `GET /api/map/therapy-sites`
**Description:** Retrieves the 5 closest therapy centers.
**Input Query Parameters:** 
- `lat` (Double, default: `43.6532`)
- `lng` (Double, default: `-79.3832`)

**Output JSON for map locations (Array of `Site` objects):**
```json
[
  {
    "geolocation": [43.6532, -79.3832],       // Array of Doubles (latitude, longitude)
    "hoursOfOperation": [9.0, 17.5],          // Array of Floats (e.g. opens 9:00, closes 17:30)
    "siteName": "Toronto General Hospital"    // String
  }
]
```

### Build Route
**Endpoint:** `POST /api/map/build-route`
**Description:** Generates navigation routing logic.
**Input:** None
**Output:** Simple Text String.

## 4. Important Information (`InfoController`)
### Overdose Info
**Endpoint:** `GET /api/info/overdose`
**Description:** Provides steps and resources to help someone suffering an overdose.
**Input:** None

### External Help Info
**Endpoint:** `GET /api/info/external-help`
**Description:** Provides contact information for therapy groups and helplines.
**Input:** None

**Output JSON for Info Endpoints (Array of `InfoSlide` objects):**
```json
[
  {
    "text": "Call 911 immediately.",  // String
    "voiceover": "call_911.mp3",      // String
    "image": "image_url.jpg"          // String
  }
]
```

## 5. Audio File Retrieval (`AudioController`)
**Endpoint:** `GET /api/audio/{fileName}`
**Description:** Streams the generated `.mp3` voiceover files from the server's local `generated_audio/` directory.
**Input URL Path Variable:** `fileName` (String)
**Output:** `audio/mpeg` byte stream.
