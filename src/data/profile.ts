export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  socials: {
    github: string;
    linkedin: string;
    researchgate: string;
    email: string;
  };
  education: Array<{
    degree: string;
    major: string;
    institution: string;
    location: string;
    period: string;
    cgpa: string;
    details: string[];
    courses: string[];
  }>;
  honors: Array<{
    title: string;
    organization: string;
    date: string;
    description: string;
  }>;
  leadership: Array<{
    role: string;
    organization: string;
    period: string;
    location: string;
    highlights: string[];
  }>;
  stats: Array<{
    value: string;
    label: string;
    sublabel: string;
  }>;
}

export const profileData: ProfileData = {
  name: "Imtiaz Ibna Kamal",
  role: "Software Engineer / Medical AI Researcher",
  headline: "Specializing in Medical Image Analysis, Explainable AI & Model Compression",
  location: "Dhaka, Bangladesh",
  email: "imtiazibnakamal@gmail.com",
  phone: "+880 1864-645608",
  bio: "Undergraduate Software Engineering student majoring in Data Science at Daffodil International University. Passionate about bridging advanced deep learning with real-world clinical software. My research focuses on developing lightweight, interpretable, and computationally efficient diagnostic architectures (knowledge distillation, semantic segmentation, and explainability frameworks) for resource-constrained clinical settings.",
  socials: {
    github: "https://github.com/imtiazdeepto", // common handle from CP
    linkedin: "https://linkedin.com/in/imtiazibnakamal",
    researchgate: "https://researchgate.net/profile/Imtiaz-Kamal",
    email: "mailto:imtiazibnakamal@gmail.com"
  },
  stats: [
    { value: "4", label: "Research Papers", sublabel: "IEEE & ICEEICT" },
    { value: "3.80", label: "Undergrad CGPA", sublabel: "Consecutive 4.00 Terms" },
    { value: "13×", label: "Model Compression", sublabel: "500k-param Student CNN" },
    { value: "1050+", label: "Codeforces Rating", sublabel: "Sentinel & 2-Star CodeChef" },
  ],
  education: [
    {
      degree: "B.Sc. in Software Engineering",
      major: "Major: Data Science",
      institution: "Daffodil International University",
      location: "Dhaka, Bangladesh",
      period: "Expected July 2027",
      cgpa: "3.80 / 4.00",
      details: [
        "Achieved perfect 4.00/4.00 GPA in consecutive recent semesters.",
        "Recipient of Academic Excellence Scholarship (up to 50% tuition waiver for academic distinction)."
      ],
      courses: [
        "Machine Learning",
        "Data Structures and Algorithms",
        "Probability and Statistics",
        "Database Management Systems",
        "Discrete Mathematics"
      ]
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      major: "Science",
      institution: "Companigonj Govt College",
      location: "Noakhali, Bangladesh",
      period: "2022",
      cgpa: "GPA: 5.00 / 5.00",
      details: [
        "Graduated with highest academic distinction."
      ],
      courses: ["Physics", "Chemistry", "Higher Mathematics", "Biology"]
    }
  ],
  honors: [
    {
      title: "Academic Excellence Scholarship",
      organization: "Daffodil International University",
      date: "2024 – 2026",
      description: "Awarded up to 50% tuition waiver for consistent top-tier academic performance."
    },
    {
      title: "5th National Data Science Summit – Data Hackathon",
      organization: "National Data Science Summit",
      date: "June 2026",
      description: "Developed an ML-based safe navigation and collision-avoidance intelligence tool for merchant ships."
    },
    {
      title: "13th Place, DIU BreakOut Algorithm Programming Contest",
      organization: "Daffodil International University",
      date: "Spring 2025",
      description: "Ranked 13th university-wide in competitive algorithmic problem solving."
    },
    {
      title: "18th Place, DIU CodeTrap Programming Contest",
      organization: "Daffodil International University",
      date: "Fall 2023",
      description: "Demonstrated advanced problem solving under strict timing constraints."
    },
    {
      title: "Top 5% Finalist, DIU Googling Contest",
      organization: "Daffodil International University",
      date: "Spring 2024",
      description: "Fast-retrieval information verification and technical investigative search."
    }
  ],
  leadership: [
    {
      role: "Deputy Executive Member, ACM Wing",
      organization: "Software Engineering Club, Daffodil International University",
      period: "2024 – Present",
      location: "Dhaka, Bangladesh",
      highlights: [
        "Coordinated programming contest logistics, problem setting, test case coordination, and automated judging environments for DIU BreakOut and DIU CodeTrap.",
        "Mentored 50+ junior students in C++, object-oriented design, fundamental data structures, graph algorithms, and competitive programming techniques."
      ]
    }
  ]
};
