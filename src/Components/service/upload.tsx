import { axiosservice } from "../config/API";

export const upload = async(file:any) => {
    try {
        const { data } = await axiosservice.post('/upload', file)
        return data
} catch (error) {
    console.log(error);
    
}
}