# 📷 Google Image Search Clone – React.js + Capacitor

A **pixel-perfect clone** of **Google’s Image Search and Lens interface** built using **React.js** and **CapacitorJS**, replicating core features and sleek aesthetics of the official web app, optimized for mobile and web platforms.

## 🌐 Live Demo

📁 [GitHub Repository](https://github.com/r1tikpatil/shoppin-assignment)
🔗 [APK Link](https://drive.google.com/file/d/1_0EwN__JBoSh2LhFsCovybGtdA7obUJX/view?usp=sharing)  
🎥 [Application Video](https://drive.google.com/file/d/1DnD5jJtFGIZwEQzv6nTHRRX8cngZVdz6/view?usp=sharing)

---

## 📄 Project Overview

This project faithfully recreates two primary interfaces:

1. **Google App Homepage**
2. **Google Lens Search & Results Page**

All visuals, animations, and interactions closely match the original, offering a modern, responsive, and interactive user experience.

---

## 🚀 Features

### 🔍 Google Homepage Clone

- ✅ Clean, responsive Google-style homepage
- ✅ Search bar with:
  - Microphone support (voice-to-text)
  - Camera icon for image search
- ✅ Real-time search feed (mock API)

### 🧠 Text Search

- 📤 Text search input with instant results
- 🧪 Google custom search API integration to simulate search results
- 🎤 Voice search support using microphone

### 📸 Image Search / Google Lens Clone

- 📷 Clickable camera icon in the search bar launches:

  - Option to upload an image from gallery
  - Use phone camera via Capacitor plugin

- 🧠 Lens-style visual results with:
  - Similar product cards
  - All using google vision API

---

## 🛠️ Tech Stack

| Tech                 | Description                                    |
| -------------------- | ---------------------------------------------- |
| ⚛️ React.js          | Frontend framework                             |
| ⚡ CapacitorJS       | Native runtime for accessing camera/microphone |
| 📦 Styled Components | (Optional) For component-based styling         |

---

## 📁 Folder Structure

```bash
src/
├── assets/
│   ├── images/
│   └── lottieFile/
│
├── components/
│   ├── LensSearch/
│   ├── Loader/
│   ├── Micoff/
│   ├── MicOn/
│   ├── MicroPhone/
│   ├── NewsCard/
│   ├── SearchInputBar/
│   ├── SearchItem/
│   └── SearchList/
│
├── pages/
│   ├── home/
│   └── SearchBarPage/
│
├── services/
│   ├── apiCall.js
│   └── services.js
│
└── utils/
    ├── constant.js
    └── utils.js
```

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/r1tikpatil/shoppin-assignment.git
```

### 2. Navigate into the project directory

```bash
cd shoppin-assignment
```

### 3. Install dependencies

```bash
npm install
```

### 4. Set up environment variables

Create a .env file in the root directory and add the following keys:

```bash
REACT_APP_REACT_APP_NEWS_API_KEY=
REACT_APP_GOOGLE_API_KEY=
REACT_APP_SEARCH_ENGINE_ID=
```

### **Run on Web**

### 1. Start the development server

```bash
npm start
```

### **Run on Android**

### 1. Build the project

```bash
npm run build
```

### 2. Initialize Capacitor

If not already initialized, run this once to set up Capacitor with your app:

```bash
npx cap init
```

### 3. Add Android Platform

```bash
npx cap add android
```

### 4. Sync Your Build

```bash
npx cap sync android
```

### 5. Run on Android device/emulator

```bash
npx cap run android
```
