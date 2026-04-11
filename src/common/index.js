const SummaryApi = {
  SignUp: {
    url: `/api/user/add`,
    method: "post",
  },

  signIn: {
    url: `/api/user/login`,
    method: "post",
  },

  current_user: {
    url: `/api/user/details`,
    method: "get",
  },

  Invest: {
    url: `/api/user/invest`,
    method: "post",
  },

  verifyEmail: {
    url: `/api/user/verify`,
    method: "post",
  },

  verifyCode: {
    url: `/api/user/verify-code`,
    method: "post",
  },

  fetchInvestment: {
    url: `/api/user/investments`,
    method: "post",
  },

  investMore: {
    url: `/api/user/invest-more`,
    method: "post",
  },

  getTransactions: {
    url: `/api/user/transactions`,
    method: "post",
  },

  logout: {
    url: `/api/user/logout`,
    method: "post",
  },

  uploadId: {
    url: `/api/user/upload-id`,
    method: "post",
  },

  calculator: {
    url: `/api/user/amount-details`,
    method: "post",
  },

  // ======================
  // ADMIN ROUTES
  // ======================

  getAllUsers: {
    url: `/api/admin/all-users`,
    method: "get",
  },

  verifyKyc: {
    url: `/api/admin/verify-kyc`,
    method: "post",
  },

  getAllTransactions: {
    url: `/api/admin/all-transactions`,
    method: "post",
  },

  verifyTransaction: {
    url: `/api/admin/verify-transaction`,
    method: "post",
  },

  fetchUsers: {
    url: `/api/admin/fetch-users`,
    method: "post",
  },

  changeRole: {
    url: `/api/admin/change-role`,
    method: "post",
  },
};

export default SummaryApi;