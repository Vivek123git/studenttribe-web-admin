import {getBaseUrl} from './../Global'
import axios from "axios";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export const onSignIn = (data,navigate,setLoader) =>async(dispatch)=>{
    let config = {
        method: "post",
        url: getBaseUrl()+"/admin_api/admin_login",
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        data: data,
      };

    try{
        let res = await axios(config);
        if(res.data.status){
        const token = res.data.token;
        Cookies.set("token", token, { secure: true }, { sameSite: "strict" }, { expires: 365 });
        Cookies.set("auth", true, { secure: true }, { sameSite: "strict" }, { expires: 365 });

        let data = res.data
         dispatch({type:"USER_LOGIN",payload:data})
         toast.success('Login successfully!');
         navigate('/dashboard')
        }else{
            setLoader(false)
            console.log(res.data.message)
            toast.warning(res.data.message);
        }
        
    }catch (error){
    console.log(error);
    setLoader(false)
    toast.warning("Login failed");
    return error.response;
    }
}

export const getProfile = (token) =>async(dispatch)=>{
    let config = {
        method: "get",
        url: getBaseUrl()+"/admin_api/get_admin_profile",
        headers: { Authorization: `Bearer ${token}` },
      };

    try{
        let res = await axios(config);
        if(res.data.status){
        // const token = res.data.token;
        // Cookies.set("token", token, { secure: true }, { sameSite: "strict" }, { expires: 365 });
        // Cookies.set("auth", true, { secure: true }, { sameSite: "strict" }, { expires: 365 });

        let data = res.data
         dispatch({type:"USER_LOGIN",payload:data})
        }
    }catch (error){
    console.log(error);
    return error.response;
    }
}


export const onEditProfileDetails=(data,setLoader)=>async(dispatch)=>{
  let config = {
    method:"post",
    url:getBaseUrl()+"/admin_api/edit_admins",
    headers:{ Authorization: `Bearer ${Cookies.get("token")}` },
    data:data
  };
  try{
    let res = await axios(config);
  if (res.data.status){
    toast.success('Update successfully!');
  }
  setLoader(false)
  }
  catch(error){
    console.log(error);
    setLoader(false)
    return error.response;
  }
}

export const onGetCompanyDetails=(company,setCompany)=>async(dispatch)=>{
    let config = {
      method:"get",
      url:getBaseUrl()+"/admin_api/get_company_details",
      headers:{ Authorization: `Bearer ${Cookies.get("token")}` },
    };
    try{
      let res = await axios(config);
    if (res.data.status){
      let data = res.data.result;
      setCompany({
        ...company,
        name: data.organization_name,
        number: data.contact_number,
        address: data.address,
        location: data.location_organization,
        email: data.email_address,
        website: data.Website,
        gst: data.GST_number,
        cinNo: data.CIN_number,
        cinDocument: data.CIN_image,
        pocName: data.name_POC,
        pocMobile: data.mobile_number_POC,
        pocDesignation: data.designation_POC,
      })
    }
    }
    catch(error){
      console.log(error);
      return error.response;
    }
  }

  export const onUpdateComapnyDetails=(data,setLoader,company,setCompany)=>async(dispatch)=>{
    let config = {
      method:"post",
      url:getBaseUrl()+"/admin_api/add_company_details",
      headers:{ Authorization: `Bearer ${Cookies.get("token")}` },
      data:data
    };
    try{
      let res = await axios(config);
    if (res.data.status){
      toast.success('Update successfully!');
      dispatch(onGetCompanyDetails(company,setCompany))
    }
    setLoader(false)
    }
    catch(error){
      console.log(error);
      setLoader(false)
      return error.response;
    }
  }