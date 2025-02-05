# 🏋️‍♂️ Fitness Hub

**Fitness Hub** is an interactive platform designed to help users achieve their fitness goals through structured workout plans, expert guidance, and community support. With an intuitive interface, secure authentication, and personalized features, it provides a seamless experience for fitness enthusiasts of all levels.

## 🌐 Live Demo

[🔗 Fitness Hub Live Website](https://career-hub-5a647.web.app/)

---

## 📜 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## 🔑 Features

✔️ **Secure Authentication** – Firebase-based login system for user security.  
✔️ **Protected Routes** – Only authorized users can access certain pages.  
✔️ **Personalized Dashboard** – Users can track workouts and progress.  
✔️ **Workout Plans & Tips** – Curated exercise routines and fitness guidance.  
✔️ **Community Engagement** – Users can connect and share fitness goals.  
✔️ **Responsive UI** – Built with TailwindCSS and DaisyUI for a modern design.  

---

## 🛠️ Technologies Used

- **React.js** – Frontend framework  
- **Vite** – Fast development build tool  
- **TailwindCSS** – Utility-first styling  
- **DaisyUI** – Prebuilt TailwindCSS components  
- **Firebase** – Authentication & database  
- **React Router** – Dynamic routing  
- **Swiper.js** – Smooth image carousels  
- **SweetAlert2** – Elegant notifications  

---

## 🛠️ How to Run Locally  

1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/HiYasin/career-hub.git
cd career-hub
```

2️⃣ **Install Dependencies**  
```sh
npm install
```

3️⃣ **Set Up environment file**  
Here’s the `.env` configuration formatted in Markdown:

# Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_apiKey=your_firebase_apiKey
VITE_authDomain=your_firebase_authDomain
VITE_projectId=your_firebase_projectId
VITE_storageBucket=your_firebase_storageBucket
VITE_messagingSenderId=your_firebase_messagingSenderId
VITE_appId=your_firebase_appId
```
> **Note:** Replace `your_firebase_apiKey`, `your_imageUploadKey`, etc., with your actual keys.

Make sure to add `.env` to your `.gitignore` file to keep your credentials secure.

4️⃣ **Run the Application**  
```sh
npm run dev
```

---

## 📦 Dependencies

The project utilizes the following libraries:

**Core Dependencies:**
```json
{
  "@smastrom/react-rating": "^1.5.0",
  "@tailwindcss/vite": "^4.0.0",
  "firebase": "^11.2.0",
  "localforage": "^1.10.0",
  "lucide-react": "^0.474.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-helmet-async": "^2.0.5",
  "react-hook-form": "^7.54.2",
  "react-icons": "^5.4.0",
  "react-rating": "^2.0.5",
  "react-router-dom": "^7.1.3",
  "react-tooltip": "^5.28.0",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.15.10",
  "swiper": "^11.2.1",
  "tailwindcss": "^4.0.0"
}
```

**Development Dependencies:**
```json
{
  "@eslint/js": "^9.17.0",
  "@types/react": "^18.3.18",
  "@types/react-dom": "^18.3.5",
  "@vitejs/plugin-react": "^4.3.4",
  "daisyui": "^5.0.0-beta.2",
  "eslint": "^9.17.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "globals": "^15.14.0",
  "vite": "^6.0.5"
}
```

---

## 📖 Usage

- Browse fitness plans and exercise tutorials.  
- Create an account and securely log in.  
- Track your progress and maintain fitness logs.  
- Engage with the community for motivation.  

---

Let me know if you need further refinements! 🚀
