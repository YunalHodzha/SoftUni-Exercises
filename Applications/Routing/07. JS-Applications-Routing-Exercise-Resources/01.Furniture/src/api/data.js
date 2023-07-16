import * as api from "./api.js";

const endpoints = {
    allFurniture: "/data/catalog",
};

export async function getAllFurniture() {
    return api.get(endpoints.ideas);
}

