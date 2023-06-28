import axios from "axios";
import { AsyncStorage } from "react-native";
import config from "../configs/index";
const { api: { url } } = config;

export const fetchMyRoom = async () => {
    try {
        // const token = await AsyncStorage.getItem("token");
        const response = await axios.get(`${url}/room/my-rooms`, {
            headers: {
                // Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const fetchRoomDetail = async (roomId) => {
    try {
        // const token = await AsyncStorage.getItem("token");
        const response = await axios.get(`${url}/room/detail/${roomId}`, {
            headers: {
                // Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const sendMessage = async (data) => {
    try {
        const response = await axios.post(`${url}/message/create_message`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        return error;
    }
}

export default {
    fetchMyRoom,
    fetchRoomDetail
};
