import http from "@/utils/axios/index";

export const getData = async () => {
    return await http.get("/navigation-websites/data/data.json");
};