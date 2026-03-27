const backendDomain = "http://localhost:8080";

const SummaryApi = {
  SignUp: {
    url: `${backendDomain}/api/user/add`,
    method: "post",
  },
  Login: {
    url: `${backendDomain}/api/user/login`,
    method: "post",
  },
  Invest: {
    url: `${backendDomain}/api/user/invest`,
    method: "post",
  }
};

export default SummaryApi;
