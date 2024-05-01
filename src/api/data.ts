import http from "@/utils/axios/index";

export const getData = async () => {
    return await http.get("/Navigation-Websites/data/data.json");
};