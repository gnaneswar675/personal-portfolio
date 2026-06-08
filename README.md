# 🌟 Gnaneswar Thavva's Personal Portfolio

A premium, highly interactive, and responsive portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**. It features smooth animations, clean typography, responsive layouts for all device sizes, and a modern dark/light-inspired dark-mode-first aesthetic.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

---

## ✨ Key Features

- **📱 Fully Responsive Design**: Seamless viewing experience across mobile, tablet, and desktop viewports.
- **✨ Fluid Animations**: Smooth page transitions, hover effects, and scroll triggers built using **Framer Motion**.
- **💬 Auto-Typing Hero Title**: Dynamic titles list rendering with auto-typing animations powered by `react-typed`.
- **📂 Project Showcase**: Filterable and card-based project section presenting live links, github repositories, and tags.
- **📊 Experience & Education Timelines**: Chronological details of professional internships, community roles, and academic achievements.
- **📜 Certifications Carousel/Grid**: Interactive view of professional achievements and badges.
- **📨 Contact Form**: Built-in functional contact form allowing seamless communication.
- **⚙️ Data-Driven Content**: Completely modular. Changing text or media in a single data file updates the entire website.

---

## 🛠️ Tech Stack & Dependencies

### **Core**
- **React 18** — Component-based UI library
- **JavaScript (ES6+)** — Application logic
- **HTML5 & CSS3** — Base markup and fallbacks

### **Styling & Animation**
- **Tailwind CSS** — Utility-first styling framework
- **Framer Motion** — Production-ready motion library for advanced React animations
- **Lucide React & React Icons** — Modern, clean icons
- **Tailwindcss Animate** — Tailwind-based CSS animations

### **Components & Helpers**
- **Radix UI** — Accessible unstyled primitives (Accordion, Avatar, Dialog, Tooltip, Switch, Navigation Menu)
- **React Typed** — Typing animations
- **React Scroll** — Smooth page navigation
- **React Helmet Async** — SEO tags and dynamic document title updates
- **React Toastify / Radix Toast** — Elegant notification systems

---

## 📂 Directory Structure

Here's an overview of the key directories and files:

```bash
gnaneswar/
├── public/                 # Static assets, index.html, favicon
├── src/
│   ├── Assets/             # Images, project screenshots, logos
│   ├── components/         # Reusable React components
│   │   ├── ui/             # Core UI components (Skeleton, etc.)
│   │   ├── About.js        # Hero section & bio
│   │   ├── Experience.js   # Work experience timeline
│   │   ├── Projects.js     # Project showcase with filtering
│   │   ├── Skills.js       # Dynamic skills list categorized
│   │   ├── Education.js    # Academic history Cards
│   │   ├── Certifications.js # Professional credentials list
│   │   ├── Contact.js      # Contact details & form
│   │   ├── Header.js       # Navigation bar (mobile-responsive)
│   │   └── Footer.js       # Footer section with links
│   ├── data/               # Configuration files (JSON-like JS exports)
│   │   ├── profile.js      # Profile details (name, bio, social links)
│   │   ├── experience.js   # Timeline data
│   │   ├── projects.js     # Projects data
│   │   ├── skills.js       # List of skills & devicon URLs
│   │   └── certifications.js # Certification details & credentials
│   ├── index.css           # Global CSS variables & Tailwind directives
│   ├── App.js              # Application root & lazy loaded sections
│   └── index.js            # Entry point
├── tailwind.config.js      # Tailwind design tokens & customization
└── package.json            # Scripts & project dependencies
```

---

## ⚙️ Getting Started & Local Setup

Follow these steps to run the portfolio locally on your machine:

### **1. Prerequisites**
Ensure you have [Node.js](https://nodejs.org/) installed (recommended version 16.x or 18.x) and `npm` (packaged with Node.js).

### **2. Clone the Repository**
```bash
git clone https://github.com/gnaneswar675/personal-portfolio.git
cd personal-portfolio
```

### **3. Install Dependencies**
```bash
npm install
```

### **4. Run Development Server**
Launch the interactive web server locally:
```bash
npm start
```
Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### **5. Build for Production**
Build the optimized application bundle inside the `build/` directory:
```bash
npm run build
```

---

## ✏️ How to Customize

This portfolio is built to be easily customizable. You only need to edit files inside the `src/data/` folder to personalize all content:

1. **Personal Information & Bios**: Edit [profile.js](./src/data/profile.js) to update your name, title, bio, email, and social profiles.
2. **Work Experience**: Edit [experience.js](./src/data/experience.js) to add or modify internships, roles, and descriptions.
3. **Projects**: Edit [projects.js](./src/data/projects.js) to show your custom software applications, screenshots, and live demo / source code URLs.
4. **Skills**: Edit [skills.js](./src/data/skills.js) to update programming languages, developer tools, and framework lists.
5. **Certifications**: Edit [certifications.js](./src/data/certifications.js) to show your verified credentials and achievement badges.

---

## 🤝 Connect with Me

Feel free to reach out for collaboration opportunities, code questions, or just a friendly chat!

- **Email**: [thavvagnaneswar675@gmail.com](mailto:thavvagnaneswar675@gmail.com)
- **LinkedIn**: [linkedin.com/in/gnaneswarthavva675](https://www.linkedin.com/in/gnaneswarthavva675/)
- **GitHub**: [github.com/gnaneswar675](https://github.com/gnaneswar675)
- **LeetCode**: [leetcode.com/u/gnaneswarthavva675](https://leetcode.com/u/gnaneswarthavva675/)
- **CodeChef**: [codechef.com/users/gnaneswar675](https://www.codechef.com/users/gnaneswar675)
- **Codeforces**: [codeforces.com/profile/gnaneswar_675](https://codeforces.com/profile/gnaneswar_675)

---
*Created by [Gnaneswar Thavva](https://github.com/gnaneswar675).*
