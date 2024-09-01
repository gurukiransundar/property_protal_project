import { useEffect, useState } from "react";
import { AppartmentData, CommercialData, PentData, PlotData, RowData, VillaData, VillamentData } from "../../dummy/dummy";

export function usePropertyData(propertyType) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            switch (propertyType) {
                case "apartment":
                    setData(AppartmentData);
                    break;
                case "commercial":
                    setData(CommercialData);
                    break;
                case "pent":
                    setData(PentData);
                    break;
                case "plot":
                    setData(PlotData);
                    break;
                case "row":
                    setData(RowData);
                    break;
                case "villa":
                    setData(VillaData);
                    break;
                case "villament":
                    setData(VillamentData);
                    break;
                default:
                    setData([]);
            }
        };

        fetchData();
        return () => {
        };
    }, [propertyType]);
    return data;
}
