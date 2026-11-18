export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: 'Published' | 'Under Review';
  statusBadge: string;
  badgeColor: string;
  contribution: string;
  abstract: string;
  metrics: Array<{ label: string; value: string }>;
  tags: string[];
  links: {
    paper?: string;
    demo?: string;
    github?: string;
    bibtex?: string;
  };
  bibtex: string;
}

export const publicationsData: Publication[] = [
  {
    id: "diastackbd",
    title: "DiaStackBD: An Explainable Machine Learning Framework for Type 2 Diabetes Prediction in Bangladesh with Lightweight Web Deployment",
    authors: ["Imtiaz Ibna Kamal", "et al."],
    venue: "5th IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON 2026)",
    year: 2026,
    status: "Published",
    statusBadge: "IEEE BECITHCON 2026",
    badgeColor: "bg-emerald-950/60 text-emerald-400 border-emerald-800/60",
    contribution: "Developed a localized stacking ensemble framework for Type-2 diabetes prediction with SHAP and LIME explainability, complemented by a lightweight web-based screening application.",
    abstract: "Diabetes Mellitus is escalating rapidly in South Asia. DiaStackBD presents a tailored, localized stacking ensemble architecture combining Random Forest, LightGBM, and XGBoost with a logistic meta-classifier trained on demographic and clinical cohorts in Bangladesh. To foster clinician trust and combat black-box reluctance, the framework incorporates local interpretable model-agnostic explanations (LIME) and Shapley additive explanations (SHAP). The entire model is served via a lightweight, low-latency web application designed for resource-constrained primary healthcare clinics.",
    metrics: [
      { label: "Architecture", value: "Stacking Ensemble" },
      { label: "Explainability", value: "SHAP + LIME" },
      { label: "Deployment", value: "Lightweight Web App" }
    ],
    tags: ["Machine Learning", "Explainable AI (XAI)", "Healthcare Informatics", "Stacking Ensembles", "FastAPI"],
    links: {
      paper: "#",
      demo: "#",
      github: "https://github.com/imtiazdeepto/DiaStackBD"
    },
    bibtex: `@inproceedings{kamal2026diastackbd,
  title={DiaStackBD: An Explainable Machine Learning Framework for Type 2 Diabetes Prediction in Bangladesh with Lightweight Web Deployment},
  author={Kamal, Imtiaz Ibna and others},
  booktitle={2026 5th IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON)},
  year={2026},
  organization={IEEE}
}`
  },
  {
    id: "polyp-segmentation",
    title: "A Lightweight ResNet-18 U-Net Web Application for Colorectal Polyp Segmentation in Low-Resource Clinics",
    authors: ["Imtiaz Ibna Kamal", "et al."],
    venue: "7th International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT 2027)",
    year: 2027,
    status: "Under Review",
    statusBadge: "Submitted / Under Review – ICEEICT 2027",
    badgeColor: "bg-amber-950/60 text-amber-400 border-amber-800/60",
    contribution: "Developed a colonoscopy image enhancement and segmentation pipeline combining EasyOCR, specular reflection inpainting, and ResNet-18 U-Net (14.24M parameters). Achieved 92.96% Dice and 86.85% IoU on Kvasir-SEG. Integrated the pipeline into a FastAPI and Streamlit application.",
    abstract: "Colorectal cancer prevention relies heavily on early detection of adenomatous polyps during colonoscopy. However, edge-deployable deep segmentation models suffer from computational bottlenecks and artifact sensitivity (specular reflections, endoscopic metadata stamps). We present a clinical pre-processing and segmentation pipeline combining automated EasyOCR text-stamp removal, Telea-based specular reflection inpainting, and an efficient ResNet-18 encoder paired with a modified U-Net decoder (14.24M parameters). Evaluated on the benchmark Kvasir-SEG dataset, the system achieves 92.96% Dice and 86.85% IoU while remaining lightweight enough to deliver real-time frame rates on consumer-grade hardware via FastAPI and Streamlit.",
    metrics: [
      { label: "Dice Coefficient", value: "92.96%" },
      { label: "IoU Score", value: "86.85%" },
      { label: "Model Size", value: "14.24M Params" }
    ],
    tags: ["Computer Vision", "Semantic Segmentation", "U-Net", "ResNet-18", "Kvasir-SEG", "FastAPI"],
    links: {
      demo: "#",
      github: "https://github.com/imtiazdeepto/Polyp-Segmentation-UNet"
    },
    bibtex: `@article{kamal2027polyp,
  title={A Lightweight ResNet-18 U-Net Web Application for Colorectal Polyp Segmentation in Low-Resource Clinics},
  author={Kamal, Imtiaz Ibna and others},
  journal={Submitted to the 7th International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT)},
  year={2027}
}`
  },
  {
    id: "mammography-cancer",
    title: "Transfer Learning-Based Mammographic Cancer Detection: Performance Evaluation and Sensitivity Analysis of Pretrained CNNs",
    authors: ["Imtiaz Ibna Kamal", "et al."],
    venue: "7th International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT 2027)",
    year: 2027,
    status: "Under Review",
    statusBadge: "Submitted / Under Review – ICEEICT 2027",
    badgeColor: "bg-amber-950/60 text-amber-400 border-amber-800/60",
    contribution: "Evaluated MobileNetV2, DenseNet201, VGG19, and Xception on 10,000 RSNA mammography scans. Developed a hybrid feature-fusion architecture achieving 0.9119 ROC-AUC and 85.35% accuracy, with clinical sensitivity analysis.",
    abstract: "Early detection of breast malignancies through screening mammography is constrained by high false-positive rates and subtle tissue density variations. This work conducts an exhaustive comparative analysis of deep convolutional transfer learning backbones (MobileNetV2, DenseNet201, VGG19, and Xception) benchmarked on 10,000 standardized scans from the RSNA screening mammography cohort. We introduce a multi-backbone hybrid feature-fusion architecture that leverages dense connections and depthwise separable convolutions, achieving an empirical ROC-AUC of 0.9119 and 85.35% accuracy with rigorous sensitivity analysis across dense vs. fatty breast tissue strata.",
    metrics: [
      { label: "ROC-AUC", value: "0.9119" },
      { label: "Test Accuracy", value: "85.35%" },
      { label: "Dataset Scale", value: "10,000 RSNA Scans" }
    ],
    tags: ["Deep Learning", "Medical Imaging", "Mammography", "Transfer Learning", "Feature Fusion"],
    links: {
      github: "https://github.com/imtiazdeepto/Mammography-Cancer-Detection"
    },
    bibtex: `@article{kamal2027mammography,
  title={Transfer Learning-Based Mammographic Cancer Detection: Performance Evaluation and Sensitivity Analysis of Pretrained CNNs},
  author={Kamal, Imtiaz Ibna and others},
  journal={Submitted to the 7th International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT)},
  year={2027}
}`
  },
  {
    id: "brain-tumor-kd",
    title: "Knowledge Distillation from Multi-Teacher CNNs for Explainable and Lightweight Brain Tumor MRI Classification in Low-Resource Settings",
    authors: ["Imtiaz Ibna Kamal", "et al."],
    venue: "7th International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT 2027)",
    year: 2027,
    status: "Under Review",
    statusBadge: "Submitted / Under Review – ICEEICT 2027",
    badgeColor: "bg-amber-950/60 text-amber-400 border-amber-800/60",
    contribution: "Developed a multi-teacher knowledge distillation framework using EfficientNet-B1, MobileNetV2, and ShuffleNetV2 to train a compact student CNN (500,116 parameters). Achieved 93.38% test accuracy, with over 13× parameter reduction and integrated Grad-CAM++ and LIME explainability.",
    abstract: "Magnetic Resonance Imaging (MRI) analysis for intracranial neoplasms typically demands deep, compute-heavy neural models that cannot run on edge hospital workstations without dedicated GPUs. We propose an ensemble multi-teacher knowledge distillation (KD) methodology. Three heterogeneous teacher models (EfficientNet-B1, MobileNetV2, and ShuffleNetV2) transfer dark knowledge representations, softened logits, and intermediate feature representations into an ultra-compact custom student CNN containing only 500,116 parameters (>13× parameter reduction). The distilled student achieves 93.38% test accuracy across 4 classes (glioma, meningioma, pituitary, no tumor). To validate that representations are clinically grounded, Grad-CAM++ and LIME attention maps are extracted to show alignment with neuro-radiological landmarks.",
    metrics: [
      { label: "Test Accuracy", value: "93.38%" },
      { label: "Compression", value: "13× Reduction" },
      { label: "Student Params", value: "500,116 Params" },
      { label: "Explainability", value: "Grad-CAM++ & LIME" }
    ],
    tags: ["Knowledge Distillation", "Model Compression", "Brain Tumor MRI", "Multi-Teacher CNN", "Grad-CAM++", "Edge AI"],
    links: {
      demo: "#",
      github: "https://github.com/imtiazdeepto/Brain-Tumor-KD-Explainable"
    },
    bibtex: `@article{kamal2027braintumor,
  title={Knowledge Distillation from Multi-Teacher CNNs for Explainable and Lightweight Brain Tumor MRI Classification in Low-Resource Settings},
  author={Kamal, Imtiaz Ibna and others},
  journal={Submitted to the 7th International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT)},
  year={2027}
}`
  }
];
