

//const backendDomain = "http://localhost:8080" //"http://localhost:8080";//https://backend-theta-six-55.vercel.app

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
    url: `${backendDomain}/api/admin/all-users`,
    method: "get",
  },
  verifyKyc: {
    url: `${backendDomain}/api/admin/verify-kyc`,
    method: "post",
  },
  logout: {
    url: `${backendDomain}/api/user/logout`,
    method: "post",
  },
  uploadId: {
    url: `${backendDomain}/api/user/upload-id`,
    method: "post",
  },
  getAllTransactions: {
    url: `${backendDomain}/api/admin/all-transactions`,
    method: "post",
  },
  verifyTransaction: {
    url: `${backendDomain}/api/admin/verify-transaction`,
    method: "post",
  },
  fetchUsers: {
    url: `${backendDomain}/api/admin/fetch-users`,
    method: "post",
  },
  changeRole: {
    url: `${backendDomain}/api/admin/change-role`,
    method: "post",
  },
  calculator: { //Not utilised, login user and send { email, userId } to the body
    url: `${backendDomain}/api/user/amount-details`,
    method: "post",
  },


};

export default SummaryApi;
