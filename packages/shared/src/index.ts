export const APP_NAME = "RENOA";

export const COMPANY_NAME = "RENOA by Treeblock";

export const SITE_URL = "https://renoa.in";

export const PROJECT_ID_PREFIX = "RENOA";

export const SUPPORTED_PROJECT_TYPES = [
  "residential",
  "commercial",
  "office",
  "retail",
  "restaurant",
  "cafe",
  "gym",
  "club",
  "kitchen",
  "bathroom",
  "bedroom",
  "living-room",
] as const;

export type ProjectType = (typeof SUPPORTED_PROJECT_TYPES)[number];