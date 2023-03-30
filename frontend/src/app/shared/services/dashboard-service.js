import { get, post, put, remove } from "./api-client";

const ENDPOINT = "/dashboard";

function getCount() {
    return get(ENDPOINT);
}

const DashboardService = {
    getCount
}

export default DashboardService;