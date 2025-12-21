# XtractIQ – AI-Powered Intelligent Form Data Extraction Platform

XtractIQ is an end-to-end intelligent document processing system built to automatically extract, structure, and verify data from scanned documents such as PDFs and images.  
This project was developed as part of an internship and later deployed as a fully functional web application.

---

## 🚀 Live Deployment

- **Frontend**: https://xtract-iq-frontend.onrender.com  
- **Backend API**: https://xtract-iq-backend.onrender.com  
- **Database**: Neon PostgreSQL (Cloud-hosted)

---

## 📌 Project Overview

Manual form processing is slow, error-prone, and inefficient in domains like banking, insurance, HR, healthcare, and onboarding systems.  
XtractIQ solves this problem by using **AI-driven OCR and field extraction** to convert unstructured documents into structured, verifiable data.

### Key Capabilities
- Upload scanned documents (PDF / images)
- Extract raw text using OCR
- Convert OCR text into structured fields using AI
- Display extracted data in a clean UI for verification
- Store both unverified and verified data in PostgreSQL
- Fully deployed and accessible via the web

---

## 🧠 System Architecture

XtractIQ follows a **modern three-tier architecture**:

```
React Frontend
    ↓
Node.js (Express) Backend
    ↓
AI Services (Azure OCR + Groq LLM)
    ↓
PostgreSQL Database (Neon)
```

### Architecture Highlights
- Modular and scalable design
- Clear separation of concerns
- AI services abstracted from UI
- Database supports audit-friendly workflows

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- Material UI
- Material React Table
- Axios

### Backend
- Node.js
- Express.js
- Multer (file uploads)
- PDF processing utilities

### AI & OCR
- Azure Cognitive Services (OCR)
- Groq LLM API (field extraction)

### Database
- PostgreSQL
- Neon (cloud-hosted)

### Deployment
- Render (Frontend + Backend)

---

## 🔄 Data Flow

1. User uploads a document via the web UI  
2. Backend validates and processes the file  
3. OCR extracts raw text from the document  
4. AI converts raw text into structured key-value fields  
5. Extracted data is stored as **unverified**  
6. User reviews and edits the extracted data  
7. Verified data is stored permanently in the database  

---

## 📂 Project Structure

```
Xtract-IQ-Forms-
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── extractor/
│   ├── insert_to_pg.py
│   └── uploads/
│
├── my-react-app/
│   ├── src/
│   └── build/
│
├── render.yaml
├── README.md
└── documentation/
```

---

## 🧪 Features Implemented

- Secure document upload
- OCR-based text extraction
- AI-powered field classification
- Dynamic field handling (no fixed schema)
- Editable verification table
- PostgreSQL persistence
- Cloud deployment with live access

---

## 📖 Documentation

The project includes formal internship documentation:
- **High-Level Design (HLD)** – System architecture and component overview
- **Low-Level Design (LLD)** – File-level and workflow-level implementation details

---

## 🎯 Internship Context

This project was developed as part of an internship to demonstrate:
- Full-stack development skills
- AI integration in real-world applications
- System design and documentation practices
- Cloud deployment and database integration

After the internship period, the system was extended and deployed publicly using Render and Neon DB.

---

## 🔮 Future Improvements

- Authentication and role-based access
- Batch document processing
- Retry and rollback mechanisms
- Analytics dashboard
- Improved schema normalization
- Enhanced security hardening

---

## 👤 Author

**R Santosh Kumaar**  
Computer Science Engineering  
SRM Institute of Science and Technology  

GitHub: https://github.com/Santosh7131

---

## 📜 License

This project is intended for educational and demonstration purposes.
