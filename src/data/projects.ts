export interface CaseStudy {
  challenge: string;
  architectureDetails: string[];
  tradeoffs: string;
  codeSnippet: {
    language: string;
    title: string;
    code: string;
  };
  results: Array<{ label: string; value: string; detail: string }>;
}

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
  caseStudy?: CaseStudy;
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
    featured: true,
    caseStudy: {
      challenge: "Diagnostic MRI models are typically huge (>100M parameters) and rely on expensive dedicated GPUs unavailable in resource-constrained rural clinics in South Asia. Furthermore, clinicians distrust 'black-box' predictions without visual proof of lesion localization.",
      architectureDetails: [
        "Ensemble teacher distillation: Unified knowledge transfer from 3 heterogeneous architectures (EfficientNet-B1, MobileNetV2, ShuffleNetV2).",
        "Temperature-scaled KL-divergence loss for dark knowledge transfer paired with Cross-Entropy hard-label supervision.",
        "Grad-CAM++ gradient backpropagation layer targeting the final convolutional feature maps to generate high-resolution attention heatmaps."
      ],
      tradeoffs: "Chose multi-teacher Knowledge Distillation over post-training 8-bit quantization because distillation preserved 93.38% classification accuracy while cutting parameter count by 13×, avoiding the accuracy degradation typical of INT8 rounding on small tumor boundaries.",
      codeSnippet: {
        language: "python",
        title: "distillation_loss.py",
        code: `def distillation_loss(student_logits, labels, teacher_logits_list, T=4.0, alpha=0.7):
    # Standard cross-entropy with true patient ground truth
    hard_loss = F.cross_entropy(student_logits, labels)
    
    # Soft target distillation across heterogeneous teacher models
    soft_loss = 0.0
    student_soft = F.log_softmax(student_logits / T, dim=-1)
    
    for t_logits in teacher_logits_list:
        teacher_soft = F.softmax(t_logits / T, dim=-1)
        soft_loss += F.kl_div(student_soft, teacher_soft, reduction='batchmean') * (T ** 2)
        
    soft_loss = soft_loss / len(teacher_logits_list)
    return (1.0 - alpha) * hard_loss + alpha * soft_loss`
      },
      results: [
        { label: "Model Size", value: "500,116 Params", detail: "Over 13× parameter reduction compared to baseline" },
        { label: "Test Accuracy", value: "93.38%", detail: "Across 4 distinct tumor classes" },
        { label: "CPU Latency", value: "320 ms", detail: "Real-time triage on standard dual-core CPU" }
      ]
    }
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
    featured: true,
    caseStudy: {
      challenge: "Endoscopy feeds in developing countries frequently contain hospital watermarks, text timestamps, and severe specular reflection glare from mucosa fluids. Feeding uncleaned frames into deep U-Net models causes false-positive polyp boundaries.",
      architectureDetails: [
        "Automated OCR detection bounding boxes generated via EasyOCR to locate hospital metadata.",
        "Specular reflection luminance thresholding followed by Fast Marching Telea inpainting to restore mucosal textures.",
        "ResNet-18 pre-trained encoder paired with lightweight decoder blocks, skip connections, and hybrid BCE + Soft-Dice loss."
      ],
      tradeoffs: "Selected ResNet-18 as the encoder rather than ResNet-50. This yielded only a 0.4% difference in Dice score (92.96% vs 93.36%), while reducing model size from 32.5M to 14.24M parameters, enabling 28 FPS inference on standard hardware.",
      codeSnippet: {
        language: "python",
        title: "telea_inpainting_pipeline.py",
        code: `def preprocess_endoscopy_frame(frame_bgr):
    # 1. Specular reflection luminance mask
    hsv = cv2.cvtColor(frame_bgr, cv2.COLOR_BGR2HSV)
    _, _, v = cv2.split(hsv)
    glare_mask = cv2.threshold(v, 235, 255, cv2.THRESH_BINARY)[1]
    
    # 2. Inpaint reflection artifacts using Telea fast marching
    inpainted = cv2.inpaint(frame_bgr, glare_mask, inpaintRadius=3, flags=cv2.INPAINT_TELEA)
    
    # 3. Normalized tensor transform for ResNet-18 U-Net
    tensor = torchvision.transforms.functional.to_tensor(inpainted)
    return torchvision.transforms.functional.normalize(tensor, mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])`
      },
      results: [
        { label: "Dice Coefficient", value: "92.96%", detail: "Evaluated on Kvasir-SEG benchmark" },
        { label: "IoU Score", value: "86.85%", detail: "High spatial overlap with expert annotations" },
        { label: "Model Size", value: "14.24M Params", detail: "Lightweight edge deployment profile" }
      ]
    }
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
    featured: true,
    caseStudy: {
      challenge: "Commercial vessels operating in high-density waterways like the Malacca Strait face complex collision risks where human navigators struggle to calculate non-linear trajectory drift under severe sea-state wind and wave dynamics.",
      architectureDetails: [
        "AIS telemetry parsing engine ingesting MMSI, SOG (Speed Over Ground), COG (Course Over Ground), and heading.",
        "Spatial trajectory Kalman filtering paired with Gradient Boosting regressors for drift vector estimation.",
        "Proactive dynamic CPA (Closest Point of Approach) alert horizon calculation in real time."
      ],
      tradeoffs: "Utilized localized LightGBM models over recurrent neural networks (LSTM) to prioritize sub-50ms inference times on low-power onboard shipboard navigational edge terminals.",
      codeSnippet: {
        language: "python",
        title: "cpa_collision_estimator.py",
        code: `def calculate_dynamic_cpa(ship_a, ship_b, horizon_minutes=30):
    # Relative position and velocity vectors
    rel_pos = ship_b.coords - ship_a.coords
    rel_vel = ship_b.velocity_vector - ship_a.velocity_vector
    
    # Time to Closest Point of Approach (TCPA)
    tcpa = -np.dot(rel_pos, rel_vel) / (np.linalg.norm(rel_vel)**2 + 1e-8)
    if tcpa < 0 or tcpa > horizon_minutes * 60:
        return None  # Vessels diverging or outside risk horizon
        
    # Distance at Closest Point of Approach (DCPA)
    dcpa = np.linalg.norm(rel_pos + rel_vel * tcpa)
    risk_level = "CRITICAL" if dcpa < 0.5 else "WARNING" if dcpa < 1.5 else "SAFE"
    return {"tcpa_min": tcpa / 60.0, "dcpa_nm": dcpa, "risk": risk_level}`
      },
      results: [
        { label: "Hackathon Honor", value: "National Winner", detail: "Ranked #1 at 5th National Data Science Summit" },
        { label: "Latency", value: "<45ms", detail: "Real-time trajectory prediction per AIS packet" },
        { label: "False Alarm Rate", value: "<3.2%", detail: "Empirically validated on historical AIS logs" }
      ]
    }
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
