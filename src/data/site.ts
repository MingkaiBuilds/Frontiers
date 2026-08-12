export const SITE_NAME = 'Physical Extremes';
export const SITE_MARK = 'Physical Extremes™';
export const CREATOR_NAME = 'Mingkai';
export const COPYRIGHT_YEAR = 2026;
export const GITHUB_REPOSITORY_URL = 'https://github.com/MingkaiBuilds/Frontiers';
export const DISCUSSIONS_URL = `${GITHUB_REPOSITORY_URL}/discussions`;

export const DISCUSSION_URLS = {
  reportQuestions: `${DISCUSSIONS_URL}/new?category=report-q-a`,
  technicalCritique: `${DISCUSSIONS_URL}/new?category=technical-critique`,
  investigationProposal: `${DISCUSSIONS_URL}/new?category=investigation-proposals`,
  buildLog: `${DISCUSSIONS_URL}/new?category=build-logs`,
} as const;
