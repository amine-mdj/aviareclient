import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://aviaire-api.onrender.com/',
    withCredentials: true,
    
  });

  axiosInstance.interceptors.response.use(response => response,
    async(error)=>{
      const originalConfig = error.config;
      console.log(error.response.status)
     if (error.response.status === 403){
     const {data} = await axiosInstance.get("/auth/refresh")
      localStorage.setItem("accesstoken", JSON.stringify(data.accesstoken))
      originalConfig.headers.Authorization = `Bearer ${JSON.stringify(data.accesstoken)}`
      return axios(originalConfig)
     }
     return Promise.reject(error)
    })

  export default axiosInstance