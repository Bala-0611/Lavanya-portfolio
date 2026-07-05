export interface SkillItem {
  name: string;
  level: string; // e.g. "Basics", "Intermediate", "Advanced"
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
  icon: string; // Lucide icon name mapping
}

export interface EducationItem {
  degree: string;
  institution: string;
  metric: string; // e.g. "CGPA: 7.5", "92.83%"
  period: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badgeType: string;
  credentialUrl?: string;
  description: string;
}

export const PERSONAL_DETAILS = {
  name: "Lavanya D",
  title: "Cloud Computing Student | Aspiring Cloud Engineer",
  email: "iamlavanya0312@gmail.com",
  linkedin: "https://www.linkedin.com/in/lavanya-d312/",
  location: "Bangalore, India",
  description: "Highly motivated BCA Cloud Computing student with a strong foundation in cloud technologies, programming, and database management. Passionate about learning modern cloud solutions and eager to apply technical skills to real-world challenges while contributing to organizational growth and innovation.",
  aboutLines: [
    "BCA Cloud Computing student",
    "Passionate about Cloud Technologies",
    "Interested in AWS, Linux, Docker, Databases, and Programming",
    "Quick learner",
    "Problem solver",
    "Team player",
    "Always eager to learn emerging technologies"
  ]
};

export const STATS = [
  { label: "Education", value: "BCA Cloud Computing", detail: "CGPA: 7.5", icon: "GraduationCap" },
  { label: "Certifications", value: "5+ Completed", detail: "SnowPro, Oracle & MongoDB", icon: "Award" },
  { label: "Technical Skills", value: "10+ Technologies", detail: "Cloud, DBs & DevOps", icon: "Cpu" },
  { label: "Languages", value: "4 Languages", detail: "English, Tamil, Kannada, Hindi", icon: "Globe" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Cloud Computing",
    icon: "Cloud",
    items: [
      { name: "AWS", level: "Basics" },
      { name: "Azure", level: "Basics" }
    ]
  },
  {
    title: "Programming",
    icon: "Code2",
    items: [
      { name: "Python", level: "Intermediate" },
      { name: "Java", level: "Basics" }
    ]
  },
  {
    title: "Databases",
    icon: "Database",
    items: [
      { name: "MySQL", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" }
    ]
  },
  {
    title: "DevOps & OS",
    icon: "Terminal",
    items: [
      { name: "Docker", level: "Basics" },
      { name: "Linux", level: "Intermediate" }
    ]
  },
  {
    title: "Networking",
    icon: "Network",
    items: [
      { name: "Computer Networks", level: "Intermediate" }
    ]
  },
  {
    title: "Other",
    icon: "Layers",
    items: [
      { name: "Database Management System", level: "Intermediate" },
      { name: "Canva", level: "Creative Design" }
    ]
  }
];

export const EDUCATION_TIMELINE: EducationItem[] = [
  {
    degree: "BCA – Cloud Computing",
    institution: "Kristu Jayanti College (Autonomous)",
    metric: "CGPA: 7.5",
    period: "2024–2027"
  },
  {
    degree: "Pre-University Course",
    institution: "St. Charles Women's PU College",
    metric: "Score: 92.83%",
    period: "2022–2024"
  },
  {
    degree: "Higher Secondary",
    institution: "Immanuel HR Sec School",
    metric: "Score: 83.84%",
    period: "2021–2022"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "SnowPro Associate Platform Certification",
    issuer: "Snowflake",
    badgeType: "Cloud Platform",
    description: "Validates comprehensive knowledge of Snowflake cloud platform architectures, data loading, unloading, and performance optimization."
  },
  {
    title: "Oracle APEX Developer Professional Certification",
    issuer: "Oracle",
    badgeType: "Low-code Dev",
    description: "Demonstrates expertise in building secure, scalable, and responsive database-centric enterprise web applications using Oracle APEX."
  },
  {
    title: "Digital Engineering (NASSCOM)",
    issuer: "NASSCOM",
    badgeType: "Engineering",
    description: "Certified program covering primary digital transformation trends, software architectures, IoT, and cloud systems foundations."
  },
  {
    title: "MongoDB Database Admin Path (Self-Managed)",
    issuer: "MongoDB Academy",
    badgeType: "NoSQL Database",
    description: "Validates capability to run, monitor, maintain, and secure large scale self-managed MongoDB database clusters."
  },
  {
    title: "Git & GitHub Mastery (Udemy)",
    issuer: "Udemy Certified",
    badgeType: "Version Control",
    description: "Comprehensive training in distributed version control systems, branch strategies, collaborative pull requests, and Git workflows."
  }
];

export const LANGUAGES = [
  { name: "English", level: "Professional" },
  { name: "Tamil", level: "Native/Bilingual" },
  { name: "Kannada", level: "Conversational" },
  { name: "Hindi", level: "Basic" }
];
