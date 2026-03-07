# Second Chance Backend API Documentation

Welcome to the backend! This Spring Boot application handles all the APIs for the Second Chance opioid prevention app.

## How to connect from React Native (Mobile App)
Because you are running this backend on your local computer, the mobile app (which runs on a phone or emulator) cannot simply call `localhost`. It must use the **IP Address** of the computer running the backend.

1. Ensure the person running the backend and the person running the frontend are on the **same Wi-Fi network**.
2. The person running the backend must find their IPv4 Address (open Windows Command Prompt and type `ipconfig`). It usually looks like `192.168.1.something` or `10.0.0.something`.
3. In the React Native app, replace all instances of `localhost` with that IP Address. For example, use `http://192.168.1.5:8080/api/info/overdose`.

---

## 🌍 GET Requests (Fetch Data)
These URLs return hardcoded JSON data for the application.

### 1. Overdose Information Slides
**Endpoint:** `GET /api/info/overdose`
**Returns:** Array of `InfoSlide` objects representing steps to help someone suffering an overdose.

### 2. External Help Slides
**Endpoint:** `GET /api/info/external-help`
**Returns:** Array of `InfoSlide` objects representing therapy groups and helplines.

### 3. Narcan Sites (Hardcoded Map Locations)
**Endpoint:** `GET /api/map/narcan-sites`
**Returns:** Array of `Site` objects representing Narcan availability locations.

### 4. Safe Injection Sites (Hardcoded Map Locations)
**Endpoint:** `GET /api/map/safe-injection-sites`
**Returns:** Array of `Site` objects representing safe injection clinics.

### 5. Therapy Sites (Hardcoded Map Locations)
**Endpoint:** `GET /api/map/therapy-sites`
**Returns:** Array of `Site` objects representing therapy centers.

---

## 📤 POST Requests (Trigger Actions)
These URLs accept data from the frontend and trigger a backend response or action.

### 1. Gemini AI Q&A Chat + ElevenLabs Voiceover
**Endpoint:** `POST /api/qna/send-message`
**Description:** Sends a user question to Google's Gemini 1.5 Flash AI to generate medical advice. The backend then immediately passes that advice to ElevenLabs to generate an MP3 voiceover.
**How to call from React Native:**
```javascript
fetch('http://YOUR_IP_ADDRESS:8080/api/qna/send-message', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: "What are the signs of an overdose?" })
})
.then(response => response.json())
.then(data => {
    console.log(data);
    // data.responseMessage -> The text response from Gemini
    // data.voiceover -> The URL path to the generated MP3 file (e.g. "/audio/123abc456.mp3")

    // To play the audio in React Native (using the backend IP):
    const audioUrl = `http://YOUR_IP_ADDRESS:8080${data.voiceover}`;
    // Feed `audioUrl` into expo-av or react-native-sound!
});
```

### 2. Trigger SOS Emergency Call
**Endpoint:** `POST /api/sos/emergency-call`
**Description:** Triggers the big red "I need help now" phone call logic. (Twilio integration coming soon).
**How to call from React Native:**
```javascript
fetch('http://YOU_IP_ADDRESS:8080/api/sos/emergency-call', {
  method: 'POST'
})
```

### 3. Build a Route
**Endpoint:** `POST /api/map/build-route`
**Description:** Generates navigation routing logic.
**How to call from React Native:**
```javascript
fetch('http://YOU_IP_ADDRESS:8080/api/map/build-route', {
  method: 'POST'
})
```
