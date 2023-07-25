import {getBaseUrl} from './../Global'
import axios from "axios";
import Cookies from 'js-cookie';

export const onGetEventDetails = (data,step,setStep,setLoader) =>async(dispatch)=>{
    dispatch({type:"EVENT_DETAILS",payload:data})
    setLoader(false)
         setStep(step+1)
}

export const onGetEventType = (setEventType) => async (dispatch) => {
    let config = {
      method: "post",
      url: getBaseUrl() + "/admin_api/category_list",
      headers: { Authorization: `Bearer ${Cookies.get("token")}` },
    
    };
  
    try {
      let res = await axios(config);
      if (res.data.status) {
        let data = res.data.results;
        setEventType(data)
      }
    } catch (error) {
      console.log(error);
      return error.response;
    }
  };
  

  export const onSaveEvent = (data,setLoader) => async (dispatch) => {
    let config = {
      method: "post",
      url: getBaseUrl() + "/admin_api/add_event",
      headers: { Authorization: `Bearer ${Cookies.get("token")}` },
       data:data
    };
  
    try {
      let res = await axios(config);
      if (res.data.status) {
        let data = res.data.results;
        dispatch({type:"SAVE_EVENT_DETAILS",payload:data})
        
      }
      setLoader(false)
    } catch (error) {
      console.log(error);
      return error.response;
      setLoader(false)
    }
  };

  export const onGetEventList = (data,setEvent,setPageLength,setLoading) => async (dispatch) => {
    let config = {
      method: "post",
      url: getBaseUrl() + "/admin_api/event_list",
      headers: { Authorization: `Bearer ${Cookies.get("token")}` },
    data:data
    };
  
    try {
      let res = await axios(config);
      if (res.data.status) {
        let data = res.data.results;
        let calPageLength =  Math.ceil(res.data.count / 6);
        setPageLength(calPageLength)
        setEvent(data)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
      return error.response;
    }
  };

  export const onGetEventIdDetails = (id,setEvent,setLoading) => async (dispatch) => {
    let config = {
      method: "post",
      url: getBaseUrl() + "/admin_api/edit_event",
      headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      data:id
    };
  
    try {
      let res = await axios(config);
      if (res.data.status) {
        let data = res.data.results;
        setEvent(data)
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
      return error.response;
    }
  };
