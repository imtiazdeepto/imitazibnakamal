export interface SkillCategory {
  title: string;
  description: string;
  skills: Array<{ name: string; level?: string; highlight?: boolean }>;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI, Deep Learning & Vision",
    description: "Architectures, medical imaging pipelines, and model optimization",
    skills: [
      { name: "Deep Learning", highlight: true },
      { name: "Computer Vision", highlight: true },
      { name: "Medical Image Analysis", highlight: true },
      { name: "Semantic Segmentation (U-Net)", highlight: true },
      { name: "Knowledge Distillation", highlight: true },
      { name: "Model Compression", highlight: true },
      { name: "Explainable AI (SHAP, LIME, Grad-CAM++)", highlight: true },
      { name: "Transfer Learning" },
      { name: "Feature Fusion" }
    ]
  },
  {
    title: "Frameworks & Scientific Computing",
    description: "ML libraries, tensor operations, and data pipelines",
    skills: [
      { name: "PyTorch", highlight: true },
      { name: "Torchvision", highlight: true },
      { name: "Scikit-Learn", highlight: true },
      { name: "OpenCV", highlight: true },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Seaborn" }
    ]
  },
  {
    title: "Backend & Systems Deployment",
    description: "Production APIs, containerization, and clinical interfaces",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Flask" },
      { name: "Streamlit", highlight: true },
      { name: "Git & GitHub", highlight: true },
      { name: "Linux / Bash" },
      { name: "REST APIs" }
    ]
  },
  {
    title: "Programming Languages",
    description: "Systems programming, rapid prototyping, and scripting",
    skills: [
      { name: "Python", highlight: true },
      { name: "C++", highlight: true },
      { name: "C" },
      { name: "Java" },
      { name: "SQL" },
      { name: "JavaScript" }
    ]
  },
  {
    title: "Core Computer Science",
    description: "Theoretical foundations and algorithmic problem solving",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "Object-Oriented Programming (OOP)", highlight: true },
      { name: "Algorithmic Complexity & Optimization", highlight: true },
      { name: "Database Management Systems (DBMS)" },
      { name: "Discrete Mathematics" }
    ]
  }
];

export const competitiveProgramming = {
  profiles: [
    { platform: "Codeforces", handle: "imtiazdeepto", rating: "1050+", badge: "Sentinel", link: "https://codeforces.com" },
    { platform: "CodeChef", handle: "imtiazdeepto", rating: "2-Star", badge: "Division 2", link: "https://codechef.com" },
    { platform: "LeetCode", handle: "imtiazdeepto", rating: "120+ Solved", badge: "Algorithms", link: "https://leetcode.com" }
  ],
  contests: [
    { name: "DIU BreakOut Algorithm Programming Contest", rank: "13th Place", term: "Spring 2025" },
    { name: "DIU CodeTrap Programming Contest", rank: "18th Place", term: "Fall 2023" },
    { name: "5th National Data Science Summit Hackathon", rank: "Finalist / Winner", term: "June 2026" },
    { name: "DIU Googling Contest", rank: "Top 5% Finalist", term: "Spring 2024" }
  ]
};
