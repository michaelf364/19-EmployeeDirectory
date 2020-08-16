import axios from "axios";

export default function getEmployeeName() {
    const BASEURL = "https://randomuser.me/api/?results=200&nat=us";
    return axios.get(BASEURL);
}