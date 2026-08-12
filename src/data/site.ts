export const SITE_NAME = 'Physical Extremes';
export const GITHUB_REPOSITORY_URL = 'https://github.com/MingkaiBuilds/Frontiers';
export const DISCUSSIONS_URL = `${GITHUB_REPOSITORY_URL}/discussions`;

export const DISCUSSION_URLS = {
  reportQuestions: `${DISCUSSIONS_URL}/new?category=report-q-a`,
  technicalCritique: `${DISCUSSIONS_URL}/new?category=technical-critique`,
  investigationProposal: `${DISCUSSIONS_URL}/new?category=investigation-proposals`,
  buildLog: `${DISCUSSIONS_URL}/new?category=build-logs`,
} as const;
