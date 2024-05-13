import http from "@/utils/axios/index";

export const get_ai_soft = async () => {
    return await http.get("/Navigation-Websites/data/aisoft.json");
};


export const get_api = async () => {
    return await http.get("/Navigation-Websites/data/api.json");
};


export const get_cloud_dist = async () => {
    return await http.get("/Navigation-Websites/data/disk.json");
};


export const get_msg_notif = async () => {
    return await http.get("/Navigation-Websites/data/msg.json");
};


export const get_notes = async () => {
    return await http.get("/Navigation-Websites/data/notes.json");
};


export const get_other = async () => {
    return await http.get("/Navigation-Websites/data/other.json");
};


export const get_picture = async () => {
    return await http.get("/Navigation-Websites/data/picture.json");
};


export const get_python = async () => {
    return await http.get("/Navigation-Websites/data/python.json");
};


export const get_usually = async () => {
    return await http.get("/Navigation-Websites/data/usually.json");
};


export const get_web = async () => {
    return await http.get("/Navigation-Websites/data/web.json");
};