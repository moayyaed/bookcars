export default {
  create: '/api/create-user',
  checkToken: '/api/check-token/:type/:userId/:email/:token',
  deleteTokens: '/api/delete-tokens/:userId',
  activate: '/api/activate',
  resend: '/api/resend/:type/:email/:reset',
  signup: '/api/sign-up',
  adminSignup: '/api/admin-sign-up',
  confirmEmail: '/api/confirm-email/:email/:token',
  resendLink: '/api/resend-link',
  validateEmail: '/api/validate-email',
  signin: '/api/sign-in/:type',
  pushToken: '/api/push-token/:userId',
  createPushToken: '/api/create-push-token/:userId/:token',
  deletePushToken: '/api/delete-push-token/:userId',
  validateAccessToken: '/api/validate-access-token',
  getUser: '/api/user/:id',
  update: '/api/update-user',
  updateLanguage: '/api/update-language',
  updateEmailNotifications: '/api/update-email-notifications',
  changePassword: '/api/change-password',
  createAvatar: '/api/create-avatar',
  updateAvatar: '/api/update-avatar/:userId',
  deleteAvatar: '/api/delete-avatar/:userId',
  deleteTempAvatar: '/api/delete-temp-avatar/:avatar',
  getUsers: '/api/users/:page/:size',
  delete: '/api/delete-users',
  checkPassword: '/api/check-password/:id/:password',
}
