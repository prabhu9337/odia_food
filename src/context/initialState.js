import { fetchUser } from "../utils/fetchLocalStorageData"

// here we define all initial state of user
const userInfo = fetchUser();

export const initialState = {
    user : userInfo,
    cartShow : false
}