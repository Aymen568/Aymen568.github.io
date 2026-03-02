const base = import.meta.env.BASE_URL;

interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  description: string;
  logoPath: string;
  universityLink: string;
}

interface Experience {
  id: number;
  role: string;
  company: string;
  year: string;
  description: string;
  logoPath: string;
  companyLink: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Telecommunications Degree",  
    institution: "Higher School of Communication of Tunis (SUP'COM)",
    year: " Sep 2021 - Oct 2024",
    description: "ICT Engineering Diploma specializing in Applications of Multimodal Information",
    logoPath: `${base}assets/Supcom.png`,
    universityLink: "https://www.supcom.tn/"
  },
  {
    id: 2,
    degree: "Undergraduate University Degree",
    institution: "Preparatory Institute for Engineering of Monastir (IPEIM)",
    year: " Sep 2019 - Jun 2021",
    description: "Preparatory classes for engineering studies in Mathematics and Physics (MP)",
    logoPath: `${base}assets/Ipeim.jpg`,
    universityLink: "https://ipeim.rnu.tn/",
 },
];

export const experience: Experience[] = [
  {
    id: 1,
    role: "Full-stack Software Engineer",
    company: "Thunders",
    year: "Mar 2025 - Oct 2025",
    description: "I developed automated workflows to integrate third-party tools (Notion, Linear, Jira, etc.) into Thunders, enabling one-click ticket creation. I also developed full-stack features related to the recorder, test automation, user management, and project control. I also helped ensure code quality by creating and maintaining unit, integration, and E2E tests.",
    logoPath: `${base}assets/Thunders.png`,
    companyLink: "https://www.thunders.ai/"
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Luceor",
    year: "Feb 2024 - Oct 2024",
    description: "I built a full-stack network planning simulator that processes XML/CSV data and generates optimized network topology visualizations using Google Maps. The tool handles complex networks with 1,000+ nodes in under 5 minutes, enabling users to analyze connections and export configurations.",
    logoPath: `${base}assets/Luceor.jpg`,
    companyLink: "https://www.luceor.com/"
  },
  {
    id: 3,
    role: "Machine Learning Intern",
    company: "SAGEMCOM",
    year: "Sep 2023 - Jan 2024",
    description: "I analyzed electricity and gas consumption data, applying down-sampling techniques to handle class imbalance and fine-tuning LightGBM, CatBoost, and XGBoost models with Optuna to achieve 86.62% accuracy and 87.59% precision through ensemble learning. I trained an OCR model using Mindee on electricity invoices to accurately extract relevant billing data. I also integrated the OCR pipeline into a Flask application with MongoDB and deployed it on an Azure VM for production access.",
    logoPath: `${base}assets/Sagemcom.png`,
    companyLink: "https://www.sagemcom.com/"
  },
  {
    id: 4,
    role: "Software Engineer Intern",
    company: "Luceor",
    year: "Jul 2023 - Aug 2023",
    description: "I extended the OpenWisp backend to manage network models and enhance the Network Management System. I also Developed and deployed lightweight node agents for cross-platform network data collection.",
    logoPath: `${base}assets/Luceor.jpg`,
    companyLink: "https://www.luceor.com/"
  },
];