import {getBaseUrl} from './../Global'
import axios from "axios";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export const onGetInternShipList = (data,setInternship,setPageLength,setLoading) => async (dispatch) => {
    let config = {
      method: "post",
      url: getBaseUrl() + "/admin_api/internships_list",
      headers: { Authorization: `Bearer ${Cookies.get("token")}` },
    data:data
    };
  
    try {
      let res = await axios(config);
      if (res.data.status) {
        let data = res.data.results;
        let calPageLength =  Math.ceil(res.data.count / 8);
        setPageLength(calPageLength)
        setInternship(data)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
      return error.response;
    }
  };

  export const onGetDashboardData=(setDashboard , setLoading,navigate)=>async(dispatch)=>{
    let config = {
        method:"post",
        url:getBaseUrl() + "/admin_api/home_data",
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },

    };
    try{
        let res = await axios(config);
        if (res.data.status){
            let data =  res.data;
            setDashboard(data)
        }
        else{
        navigate("/")
        toast.warning("Login required");
        }
        setLoading(false)
    } catch(error){
        setLoading(false)
        console.log(error)
        // toast.warning("Login required");
        return error.response;
    }
  }

  export const onGetAnalyticsData=(setAnalytics , setLoading)=>async(dispatch)=>{
    let config = {
        method:"post",
        url:getBaseUrl() + "",
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },

    };
    try{
        let res = await axios(config);
        if (res.data.status){
            let data =  res.data;
            setAnalytics(data)
        }
        setLoading(false)
    } catch(error){
        setLoading(false)
        console.log(error)
        return error.response;
    }
  }

  export const onGetJobtype=(setJobType)=>async(dispatch)=>{
    let config = {
        method:"post",
        url:getBaseUrl() + "/admin_api/job_title_list",
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },

    };
    try{
        let res = await axios(config);
        if (res.data.status){
            let data =  res.data.results;
            setJobType(data)
        }
    } catch(error){      
        console.log(error)
        return error.response;
    }
  }

  export const onGetSkill=(setSkill)=>async(dispatch)=>{
    let config = {
        method:"post",
        url:getBaseUrl() + "/admin_api/skill_list",
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },

    };
    try{
        let res = await axios(config);
        if (res.data.status){
            let data =  res.data.results;
            setSkill(data)
        }
    } catch(error){
        console.log(error)
        return error.response;
    }
  }
