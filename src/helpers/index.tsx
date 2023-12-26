import AsyncStorage from "@react-native-async-storage/async-storage";
import moment, { MomentInput } from "moment";

import { Item } from '../types'

export const generateUniqueId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const filterIsToday = (Date: MomentInput, currentData: MomentInput): boolean => {
    return moment(currentData).format('YYYY-MM-DD') === moment(Date).format('YYYY-MM-DD');
}

export const setLocalStorage = async (list: Item[]) => {
    const jsonValue = JSON.stringify(list)
    await AsyncStorage.setItem('@listItems', jsonValue)
    return;
}

export const getLocalStorage = async () => {
    const jsonValue = await AsyncStorage.getItem('@ListItem')
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
}