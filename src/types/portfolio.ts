export interface NavItem {
  id: string;
  label: string;
}

export interface InfoCardItem {
  icon: string;
  title: string;
  subtitle: string;
}

export interface EducationItem {
  degree: string;
  badge?: string;
  school: string;
  meta: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  year: string;
  company: string;
  bullets: string[];
}

export interface ProjectItem {
  id: string;
  badge?: string;
  type: string;
  title: string;
  objective: string;
  description?: string;
  summaryLabel: string;
  summaryText: string;
  expandLabel: string;
  highlights: string[];
  tags: string[];
  tools?: string[];
  linkUrl?: string;
  linkLabel?: string;
}

export interface FeaturedCertification {
  label: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  skills: string[];
  imageUrl: string;
}

export interface CertificationItem {
  icon: string;
  title: string;
  organization?: string;
  skillsLabel?: string;
  skillsList?: string[];
  certificateImage?: string;
}

export interface AchievementItem {
  year: string;
  icon: string;
  title: string;
  organization: string;
  description: string;
}

export interface ContactLinkItem {
  icon: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}
