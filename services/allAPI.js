import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"


//upload new videos
export const uploadVideosAPI = async (video) => {
    return await commonAPI("POST", `${SERVER_URL}/allVideos`,video)
}

//get all uploaded video

export const getAlluplaodedVideosAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/allVideos`, "")
}

// get a single video 

export const getAVideosAPI = async (id) => {
    return await commonAPI("GET", `${SERVER_URL}/allVideos/${id}`, "")
}

//upload videos to the history
export const AddVideosHistoryAPI = async (video) => {
    return await commonAPI("POST", `${SERVER_URL}/history`, video)
}

//get video from history
export const getAVideosFrmHistoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/history`, "")
}

// delete History

export const deleteHistoryAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/history/${id}`, {})
}

//delete a video
export const deleteVideoAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/allVideos/${id}`, {})
}

// add Videos to category

export const addCategoryAPI = async (category) => {
    return await commonAPI("POST", `${SERVER_URL}/category`, category)
}

//get category

export const getAllCategoryAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/category`, "")
}

//delete category
export const deleteCategoryAPI = async (id) => {
    return await commonAPI("DELETE", `${SERVER_URL}/category/${id}`, {})
}

//update video to category
export const updateCategoryAPI = async (id,categoryDetails) => {
    return await commonAPI("PUT", `${SERVER_URL}/category/${id}`, categoryDetails)
}