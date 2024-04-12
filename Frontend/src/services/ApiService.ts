import axios, { AxiosResponse } from "axios";
import { ResponseAPI } from "./types";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export const apiPost = async (rota: string, dados: any): Promise<ResponseAPI> => {
    try{
        const resposta: AxiosResponse = await axios.post(rota, dados);
        const retornoAPI: ResponseAPI = {
            success:resposta.data.success,
            message:resposta.data.message,
            data:resposta.data.data,
        }; 
        return retornoAPI;
    }catch(error: any){
        const retornoAPIError: ResponseAPI = {
          success: error.response.data.success,
          message: error.response.data.message,
          data: error.response.data.data,
        };

        return retornoAPIError;
    }
}

export const apiGet = async (rota: string): Promise<ResponseAPI> => {
  try {
    const resposta: AxiosResponse = await axios.get(rota);

    const retornoAPI: ResponseAPI = {
      success: resposta.data.success,
      message: resposta.data.message,
      data: resposta.data.data,
    };
    return retornoAPI;
  } catch (error: any) {
    const retornoAPIError: ResponseAPI = {
      success: error.response.data.success,
      message: error.response.data.message,
      data: error.response.data.data,
    };

    return retornoAPIError;
  }
};

export const apiDelete = async (rota: string, params?:any) => {
  try {
    const resposta: AxiosResponse = await axios.delete(rota,{params});

    const retornoAPI: ResponseAPI = {
      success: resposta.data.success,
      message: resposta.data.message,
      data: resposta.data.data,
    };

    return retornoAPI;
  } catch (error: any) {
    const retornoAPIError: ResponseAPI = {
      success: error.response.data.success,
      message: error.response.data.message,
      data: error.response.data.data,
    };

    return retornoAPIError;
  }
};

export const apiPut = async (rota: string, dados: any) => {
  try {
    const resposta: AxiosResponse = await axios.put(rota, dados);

    const retornoAPI: ResponseAPI = {
      success: resposta.data.success,
      message: resposta.data.message,
      data: resposta.data.data,
    };

    return retornoAPI;
  } catch (error: any) {
    const retornoAPIError: ResponseAPI = {
      success: error.response.data.success,
      message: error.response.data.message,
      data: error.response.data.data,
    };

    return retornoAPIError;
  }
};