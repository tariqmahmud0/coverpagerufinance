# 🎓 Academic Assignment Cover Page Generator

[![Live Demo](https://img.shields.io/badge/Live-Demo%20Preview-brightgreen?style=for-the-badge&logo=github)](https://tariqmahmud.github.io/assignmnet-cover-page/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Pure Vanilla Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20TailwindCSS%20%7C%20JS-38bdf8?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Single Page PDF](https://img.shields.io/badge/Export-1--Page%20A4%20PDF-rose?style=for-the-badge&logo=adobeacrobatreader)](https://github.com/eKoopmans/html2pdf.js)

A modern, responsive, and feature-rich **Academic Assignment Cover Page Generator** built specifically for university students. It provides real-time A4 page previewing, smart course auto-fill, dynamic faculty synchronization, flexible styling, and single-click 1-page PDF export.

Specially preconfigured for the **Department of Finance, University of Rajshahi**, yet fully adaptable for any department, college, or university worldwide.

---

## 🌟 Highlights & Key Features

### 📄 1. Pixel-Perfect A4 Live Preview & 6 Layout Templates
- **Standard A4 Ratio**: Strict `210mm x 296.5mm` dimensions to prevent 2nd-page spillover.
- **6 Built-in Cover Page Layout Templates**:
  - 🎓 **Classic Academic**: Traditional centered layout with balanced typography and standard dual submission boxes.
  - 💼 **Modern Minimalist**: Left-aligned executive format with clean vertical accent bar and modern chips.
  - 📖 **Formal Thesis / Research**: Monograph style with bold Roman typography (`Cinzel`/`Playfair Display`) and thesis framing.
  - 🧪 **Lab & Project Report**: Technical grid styling with course code badge, monospace accents, and lab report formatting.
  - 🏢 **Corporate / Internship Report**: Left heavy branding strip, side-by-side header logo, and executive borders.
  - 👑 **Royal Vintage**: Ornate certificate style with decorative corners and dual-ring borders.
- **Interactive Zoom Controls**: Zoom in/out, fit-to-screen, and 100% actual print size modes.
- **Real-Time Two-Way Binding**: Any text or styling change reflects instantaneously on the preview.

### 🔄 2. Dual Page Orientation (Portrait & Landscape / লম্বালম্বি ও আড়াআড়ি)
- **Portrait Mode (লম্বালম্বি - Standard A4)**: Ideal for regular academic assignments, term papers, monographs, and formal thesis reports.
- **Landscape Mode (আড়াআড়ি - Wide A4)**: Perfect for lab projects, corporate internship reports, tabular presentations, and wide certificate layouts.
- **1-Click Switching**: Switch between Portrait and Landscape from the sidebar or directly via the live preview toolbar.
- **Dynamic 1-Page Scaling**: All 6 templates dynamically adapt typography, header spacing, and submission grids to fit strictly on 1 page without overflow.
- **Dynamic 1-Page PDF Export**: Downloads native portrait or landscape A4 PDFs seamlessly.

### 💧 3. Advanced Background Watermark (লোগো ও টেক্সট জলছাপ)
- **Watermark Toggle**: Easily enable or disable the background watermark with one click.
- **Opacity Slider**: Fine-tune transparency from 2% (ultra-subtle) to 30% (prominent) with 8% print-standard default.
- **Watermark Tones & Filters**: Grayscale (monochrome), Theme Color Tinted, and Original Full Color modes.
- **Flexible Sizes**: Small (240px), Medium (340px), Large (440px), and Full Page (540px).
- **Multiple Sources**: Use the University Logo, upload a custom watermark image, or type custom diagonal text watermark (e.g. *DRAFT, CONFIDENTIAL*).

### 📅 4. Session, Year & Semester Customization (সেশন, বছর ও সেমিস্টার)
- **Session Field**:
  - Clean text input with small quick-select buttons (`2024-2025` to `2019-2020`) below the field (no dropdown popups).
- **Separate Mode (আলাদা)**:
  - Dedicated text inputs with quick-select buttons for `Year` (`1st Year` to `MBA`) and `Semester` (`1st Sem`, `2nd Sem`).
  - Clear visual example box showing how Year & Semester appear on separate lines.
- **Combined Mode (একসাথে)**:
  - Clean text input with a full 10-button quick-select grid for combined formats (`1st Yr, 1st Sem` ... `MBA 2nd Sem`).
  - Clear visual example box showing combined formats.
  - Live auto-synchronization between separate and combined formats.

### 👤 5. 1-Click Student Profile Manager (প্রোফাইল সেভ ও ১-ক্লিক অটো-ফিল)
- **Save Multiple Student Profiles**: Click `💾 Save Profile` to store student details (Name, ID, Session, Year, Semester, Dept, Inst, and Year/Sem format preference).
- **1-Click Fill Dropdown**: Switch between saved profiles to fill all student fields with a single click.
- **Delete Profiles**: Delete old profiles easily with one click.

### ⚡ 6. Strict Input Constraints & Clean Academic Inputs
- **Strict Validation Rules**:
  - **Student Name**: Letters only (Upper & Lower case, no numbers).
  - **Student ID**: Numbers only (`0-9`).
  - **Session**: Numbers & hyphen only (`0-9` and `-`).
  - **Student Department & Institution**: Clean direct text fields (no unwanted dropdown popups).
- **Course & Department Presets**:
  - Smart presets and suggestions for Courses, Faculty, and University headers.

### 📚 7. One-Click Course Auto-Fill
- Includes **40 official courses** categorized across:
  - 📘 **1st Year** (FIN-101 to FIN-110)
  - 📗 **2nd Year** (FIN-201 to FIN-210)
  - 📙 **3rd Year** (FIN-301 to FIN-310)
  - 📕 **4th Year** (FIN-401 to FIN-410)
- Supports custom course codes and titles.

### 👨‍🏫 7. Dynamic RU Faculty Portal Sync
- Automatically syncs faculty members directly from the **RU Profile Portal** (`profile.ru.ac.bd`).
- Auto-populates teacher names, official designations (Professor, Associate Professor, Lecturer, etc.), department, and institution.
- Offline cached fallback with manual reload/sync option.

### 🎨 8. Academic Styling & Customization
- **12 Curated Academic Palettes**: Oxford Navy (`#003366`), Crimson Maroon, Royal Emerald Green, Sapphire Blue, Imperial Purple, Warm Bronze / Amber, Forest Pine Green, Slate Charcoal, Burgundy Plum, Deep Teal, Rose Crimson, and Academic Onyx Black.
- **Custom Color Picker**: Choose any hex color scheme.
- **8 Academic Border Styles**: Classic Academic, Double Line, Elegant Dashed, Modern Minimal, Ornate Royal Corners, Left Accent Stripe, Top & Bottom Bands, and Borderless.
- **6 Academic Typography Fonts**: Times New Roman, EB Garamond, Merriweather Serif, Playfair Display, Cinzel (Royal Roman), and Modern Sans-Serif (Inter/Roboto).
- **Document Type Selector**: Assignment, Lab Report, Term Paper, Project Report, Case Study, Internship Report, Thesis Proposal, or Custom Title.

### 🖼️ 9. Logo Management
- Official University of Rajshahi Logo (embedded base64 HD PNG preset).
- Vector RU Emblem (SVG format).
- Custom Logo Upload (supports JPEG, PNG, SVG with instant local preview).
- Toggle option to show or hide the logo.

### 📱 10. Universal Cross-Platform Support (Android, iOS, PC, Mac, Linux)
- **Android Support**: 1-Click PWA Native App install, offline Service Worker, and direct `.apk` packaging compatibility.
- **iOS / iPadOS (iPhone & iPad)**: Full Apple Touch Icons (76x76 to 180x180), Safari standalone status bar, auto-zoom prevention, and 1-tap `Add to Home Screen`.
- **Desktop (Windows, macOS, Linux, ChromeOS)**: Desktop PWA install, multi-resolution `favicon.ico` (16/32/48/64px), responsive split-view, and keyboard shortcuts (`Ctrl+P`).
- **Dedicated Mobile View**: Smart switcher for **Form Editor** ↔ **Live Preview** with auto-fitting zoom.

### 💾 11. Automatic Local Storage Persistence
- Automatically saves all form inputs, chosen layout, watermark settings, and selected theme in the browser's `localStorage`.
- Never lose your entered information upon page reload.
- Includes a **Sample Data Loader** for quick testing and a **Reset Form** button.

### 🖨️ 12. 1-Page PDF & Print Export
- High-resolution client-side PDF generation using `html2pdf.js`.
- Automatic multi-page prevention guarantee (strict 1-page output).
- Native browser print fallback (`Ctrl+P` / `Cmd+P` optimized with `@media print` CSS rules).

---

## 🚀 Quick Start / How to Use

### Option 1: Run Locally in Browser (No Installation Needed!)
This is a 100% client-side web application with zero dependencies.
1. **Clone or Download** the repository:
   ```bash
   git clone https://github.com/your-username/assignment-cover-page.git
   ```
2. **Open the file**:
   Double click [`index.html`](index.html) to open it in Google Chrome, Microsoft Edge, Firefox, or Safari.

---

### Option 2: Deploy to GitHub Pages (Free Hosting)
1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```
2. Go to **Settings** > **Pages** in your GitHub repository.
3. Under **Build and deployment** > **Branch**, select `main` and folder `/ (root)`.
4. Click **Save**. Your live generator and PWA app will be published at `https://<username>.github.io/<repo-name>/`.

---

## 📂 Repository Structure

```text
assignment-cover-page/
├── assets/
│   ├── icons/                  # High-resolution multi-platform PWA icons & favicons
│   │   ├── favicon.ico         # Multi-size Windows/browser favicon (16/32/48/64px)
│   │   ├── favicon.png         # High-res 512x512 PNG favicon
│   │   ├── favicon-16x16.png   # Small browser tab icon
│   │   ├── favicon-32x32.png   # Standard browser tab icon
│   │   ├── favicon-48x48.png   # Desktop shortcut icon
│   │   ├── apple-touch-icon*.png # iOS home screen icons (76x76 to 180x180)
│   │   ├── icon-192.png        # Android & PWA standard launcher icon
│   │   ├── icon-384.png        # High-DPI Android icon
│   │   └── icon-512.png        # Full-size PWA splash & store icon
│   └── images/                 # Academic branding & emblems
│       ├── RU_Official_Logo.png # Official University of Rajshahi high-res logo
│       └── deskpinslogog2.png   # Source design asset
├── index.html                  # Primary entry point for GitHub Pages
├── manifest.json               # PWA Web App Manifest
├── sw.js                       # Service Worker for 100% offline support
├── 404.html                    # GitHub Pages 404 handler
├── .gitignore                  # Git ignore rules
├── LICENSE                     # MIT Open-Source License
└── README.md                   # Full Documentation & Setup Guide
```

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic academic document structure and layout |
| **Tailwind CSS (CDN)** | Modern responsive styling, dark workspace theme, and UI components |
| **Vanilla JavaScript (ES6+)** | Dynamic DOM binding, data persistence, and RU Portal API integration |
| **html2pdf.js / html2canvas / jsPDF** | High-fidelity vector/canvas PDF rendering |
| **Google Fonts** | Standard academic typography (Cinzel, EB Garamond, Merriweather, Playfair Display, Inter) |

---

## 📋 Form Fields Supported

```text
├── University & Header Details
│   ├── University Name
│   ├── Location / Subtitle
│   └── University Logo (Official RU / Vector / Custom Upload)
├── Document & Topic Details
│   ├── Document Type (Assignment / Lab Report / Term Paper / etc.)
│   ├── Topic / Assignment Title
│   ├── Department Course Selector (Auto-fills Code & Title)
│   ├── Course Title
│   └── Course Code
├── Teacher's Information (Submitted To)
│   ├── Dynamic Teacher Dropdown (Auto-fills Designation & Dept)
│   ├── Teacher's Full Name
│   ├── Designation
│   ├── Department
│   └── Institution
├── Student's Information (Submitted By)
│   ├── Student Full Name
│   ├── Student ID / Roll
│   ├── Session (e.g. 2020-2021)
│   ├── Year & Semester Format (Separate Lines OR Combined)
│   ├── Department
│   └── Institution
└── Submission Date
    ├── Date Picker
    └── "Today" Quick Button
```

---

## 💻 Browser Compatibility

| Browser | Supported |
| :--- | :---: |
| Google Chrome | ✅ Fully Supported |
| Microsoft Edge | ✅ Fully Supported |
| Mozilla Firefox | ✅ Fully Supported |
| Safari / iOS Safari | ✅ Fully Supported |
| Mobile Browsers (Android / iOS) | ✅ Fully Supported |

---

## 🤝 Contributing

Contributions, feature suggestions, and pull requests are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👨‍💻 Author & Acknowledgements

- **Developed with ❤️ for Students**
- **Institution**: Department of Finance, University of Rajshahi
- **Official RU Logo**: University of Rajshahi Portal
