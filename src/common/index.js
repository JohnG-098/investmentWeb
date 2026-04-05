

const backendDomain = "http://localhost:8080";

const SummaryApi = {
  SignUp: {
    url: `${backendDomain}/api/user/add`,
    method: "post",
  },
  signIn: {
    url: `${backendDomain}/api/user/login`,
    method: "post",
  },
  current_user : {
        url : `${backendDomain}/api/user/details`,
        method : "get"
    },
  Invest: {
    url: `${backendDomain}/api/user/invest`,
    method: "post",
  },
  verifyEmail: {
    url: `${backendDomain}/api/user/verify`,
    method: "post",
  },
  verifyCode: {
    url: `${backendDomain}/api/user/verify-code`,
    method: "post",
  },
  fetchInvestment: {
    url: `${backendDomain}/api/user/investments`,
    method: "post",
  },
  investMore: {
    url: `${backendDomain}/api/user/invest-more`,
    method: "post",
  },
  getTransactions: {
    url: `${backendDomain}/api/user/transactions`,
    method: "post",
  },
  getAllUsers: {
    url: `${backendDomain}/api/user/all-users`,
    method: "get",
  },
  verifyKyc: {
    url: `${backendDomain}/api/user/verify-kyc`,
    method: "post",
  },
  logout: {
    url: `${backendDomain}/api/user/logout`,
    method: "post",
  },


};

export default SummaryApi;
