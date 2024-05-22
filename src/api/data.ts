import http from "@/utils/axios/index";

export const get_usually = async () => {
    return await http.get("/Navigation-Websites/data/usually.json");
};

export const get_web = async () => {
    return await http.get("/Navigation-Websites/data/web.json");
};

export const get_ui = async () => {
    return await http.get("/Navigation-Websites/data/ui.json");
};

export const get_python = async () => {
    return await http.get("/Navigation-Websites/data/python.json");
};

export const get_codeware = async () => {
    return await http.get("/Navigation-Websites/data/codeware.json");
};

export const get_database = async () => {
    return await http.get("/Navigation-Websites/data/database.json");
};

export const get_ai_soft = async () => {
    return await http.get("/Navigation-Websites/data/aisoft.json");
};

export const get_email = async () => {
    return await http.get("/Navigation-Websites/data/email.json");
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

export const get_api = async () => {
    return await http.get("/Navigation-Websites/data/api.json");
};

export const get_picture = async () => {
    return await http.get("/Navigation-Websites/data/picture.json");
};

export const get_works = async () => {
    return await http.get("/Navigation-Websites/data/works.json");
};

export const get_bottools = async () => {
    return await http.get("/Navigation-Websites/data/bottools.json");
};

export const get_other = async () => {
    return await http.get("/Navigation-Websites/data/other.json");
};