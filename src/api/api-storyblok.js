import axios from "axios";

export const axiosInstance = () => {
    return axios.create({
        baseURL: "https://api.storyblok.com/v1/cdn/stories",
        params: {
            token: "ZcGuARBViiKT6zqTnI943gtt",
            version: "draft"
        },
        timeout: 5000
    })
}

export const fetchAllBlogPosts = async (page = 1, per_page = 10) => {
    try {
        const { data } = await axiosInstance().get("/", {
            params: {
                page,
                per_page
            }
        });
        return data;
    } catch (error) {
        return null;
    }
}

export const fetchPost = async (slug) => {
    try {
        const { data } = await axiosInstance().get("/blogs/" + slug);
        return data;
    } catch (error) {
        return null;
    }
}