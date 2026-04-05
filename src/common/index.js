// Remove this line entirely
// const backendDomain = "https://backend-theta-six-55.vercel.app"

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
    url: `https://investmentbackend-7nzl.onrender.com/api/user/verify`,
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
  getAllUsers: {
    url: `/api/user/all-users`,
    method: "get",
  },
  verifyKyc: {
    url: `/api/user/verify-kyc`,
    method: "post",
  },
  logout: {
    url: `/api/user/logout`,
    method: "post",
  },
};

export default SummaryApi;