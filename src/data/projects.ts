export interface Project {
  id: string;
  title: string;
  category: 'Medical AI & Vision' | 'Full-Stack & Systems' | 'Edge & Algorithms';
  subtitle: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics?: { label: string; value: string };
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "neuroscan",
    title: "NeuroScan: Explainable Brain Tumor MRI Diagnosis Platform",
    category: "Medical AI & Vision",
    subtitle: "End-to-end clinical AI web platform for 4-class brain tumor MRI triage with CPU inference & XAI",
    description: "Engineered an end-to-end full-stack medical diagnosis portal that ingests brain MRI DICOM/PNG scans, performs 4-class tumor classification (Glioma, Meningioma, Pituitary, Normal), and outputs visual interpretability heatmaps in under 350ms on commodity CPU hardware without GPU acceleration.",
    highlights: [
      "Trained a lightweight 500k-parameter student CNN via multi-teacher knowledge distillation to achieve 93.38% test accuracy.",
      "Integrated dual explainability layers: Grad-CAM++ for localization activation and LIME for superpixel feature perturbation validation.",
      "Built asynchronous REST endpoints using FastAPI, containerized with Docker, and configured multi-worker Uvicorn for concurrent clinical requests."
    ],
    technologies: ["Python", "PyTorch", "FastAPI", "Docker", "OpenCV", "Grad-CAM++", "LIME", "Streamlit"],
    metrics: { label: "Inference Latency", value: "<350ms on CPU" },
    links: {
      github: "https://github.com/imtiazdeepto/NeuroScan-MRI-Platform",
      demo: "https://neuroscan-demo.streamlit.app"
    },
    featured: true
  },
  {
    id: "maritime-navigation",
    title: "MaritimeSafe: ML-Based Merchant Ship Safe Navigation Tool",
    category: "Edge & Algorithms",
    subtitle: "5th National Data Science Summit Data Hackathon Winner (June 2026)",
    description: "Developed an intelligent maritime route risk estimation and collision avoidance advisory system for commercial cargo ships navigating dense maritime choke-points and harsh weather conditions.",
    highlights: [
      "Fused real-time Automatic Identification System (AIS) telemetry with sea-state meteorological data (wave height, wind vectors).",
      "Built an ensemble spatial trajectory predictor with proactive Closest Point of Approach (CPA) collision warnings.",
      "Awarded top honors at the 5th National Data Science Summit Data Hackathon."
    ],
    technologies: ["Python", "Scikit-Learn", "NumPy", "Pandas", "GeoPandas", "Matplotlib", "FastAPI"],
    metrics: { label: "Hackathon Result", value: "Top Finalist & Winner" },
    links: {
      github: "https://github.com/imtiazdeepto/MaritimeSafe-Navigation"
    },
    featured: true
  },
  {
    id: "polyp-app",
    title: "Endoscopic Polyp Segmentation & Inpainting Pipeline",
    category: "Medical AI & Vision",
    subtitle: "Real-time colonoscopy artifact removal and semantic segmentation system",
    description: "An automated clinical image processing and segmentation suite that handles real-world endoscopic challenges—including optical reflection glare and video text watermarks—before applying segmentation.",
    highlights: [
      "Integrated EasyOCR to locate textual timestamps and hospital metadata, automatically synthesizing inpainting masks.",
      "Implemented Fast Marching Telea inpainting algorithm to eliminate specular reflection glare that corrupts feature maps.",
      "Deployed ResNet-18 U-Net (14.24M params) with Dice loss scoring 92.96% Dice and 86.85% IoU on Kvasir-SEG."
    ],
    technologies: ["PyTorch", "Torchvision", "FastAPI", "Streamlit", "OpenCV", "EasyOCR", "NumPy"],
    metrics: { label: "Dice Accuracy", value: "92.96% on Kvasir-SEG" },
    links: {
      github: "https://github.com/imtiazdeepto/Polyp-Segmentation-UNet"
    },
    featured: true
  },
  {
    id: "diastack-screening",
    title: "DiaStack: Type-2 Diabetes Predictive Screening App",
    category: "Full-Stack & Systems",
    subtitle: "FastAPI-powered explainable screening tool with localized patient risk factors",
    description: "A production-ready clinical screening interface allowing medical workers to input routine non-invasive patient biometric markers and receive instant predictive probability distributions alongside personalized SHAP waterfall explanations.",
    highlights: [
      "Localized stacking ensemble trained specifically on Bangladeshi healthcare cohorts for high regional sensitivity.",
      "Generates clinician-readable force plots and summary waterfall visualizations for personalized health risk breakdowns.",
      "Designed responsive UI optimized for low-bandwidth mobile tablets in rural outpatient centers."
    ],
    technologies: ["Python", "FastAPI", "SHAP", "XGBoost", "LightGBM", "HTML5/CSS3", "Docker"],
    metrics: { label: "Validation", value: "Peer-Reviewed at IEEE" },
    links: {
      github: "https://github.com/imtiazdeepto/DiaStackBD"
    },
    featured: false
  }
];
