import React, { createContext, useContext, useState, useEffect } from "react";
import { Item, DataProviderData } from "../../types";

import moment, { MomentInput } from "moment";

import { filterIsToday, getLocalStorage, setLocalStorage } from '../../helpers'

const DataContext = createContext<DataProviderData>({} as DataProviderData)


export const DataProvider: React.FC = ({ children }: React.PropsWithChildren<{}>) => {

    const [currentDate, setCurrentDate] = useState<MomentInput>(moment())
    const [currentKcal, setCurrentKcal] = useState(0)
    const [currentList, setCurrentList] = useState<Item[]>([])

    const [listAllItem, setListAllItem] = useState<Item[]>([])

    useEffect(() => {
        getStorageData()
    }, [])

    useEffect(() => {
        updateCurrentDay()

    }, [currentDate, listAllItem])

    const getStorageData = async () => {
        const response = await getLocalStorage()
        setListAllItem(response)
    }

    const addItem = async (item: Item) => {
        if (listAllItem) {
            const newList = [...listAllItem, item]
            setListAllItem(newList)
            await setLocalStorage(newList)
            updateCurrentDay()
        } else {
            setListAllItem([item])
            await setLocalStorage([item])
            updateCurrentDay()
        }
        setCurrentDate(moment())
    }

    const updateCurrentDay = () => {
        let filteredList: Item[] = [];

        if (listAllItem) {
            filteredList = listAllItem.filter((item) =>
                filterIsToday(item.date, currentDate)
            );
        }

        const countKcal = filteredList.reduce((acc, currentValue) => {
            return acc + currentValue.kcal;
        }, 0);

        setCurrentList(filteredList);
        setCurrentKcal(countKcal);
    };


    const handleChangeDate = async (Date: MomentInput) => {
        setCurrentDate(Date)
    }


    return (
        <DataContext.Provider value={{ currentDate, currentKcal, currentList, addItem, handleChangeDate }}>{children}</DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) throw new Error('useData must be used within a DataProvider');

    return context;
};