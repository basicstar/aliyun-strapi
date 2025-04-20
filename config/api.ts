export default {
  responses: {
    privateAttributes: ['createdAt', 'updatedAt', 'publishedAt'],
  },
  rest: {
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
};
