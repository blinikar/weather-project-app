import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City } from "models/City";

const getInitialState = () => {
    const data = localStorage.getItem("starredCities");
    if (data) return JSON.parse(data) as City[];

    return [new City("Innopolis", "/innopolis")] as City[];
}

const starredCitiesSlice = createSlice({
    name: "Starred cities",
    initialState: getInitialState(),
    reducers: {
        toggleCity: (state, action: PayloadAction<City>) => {

            for (const e of state) {
                if (e.name === action.payload.name) {
                    state.splice(state.indexOf(e), 1);
                    return state;
                }
            }

            state = [...state, action.payload];
            return state;
        }
    }
});

export default starredCitiesSlice.reducer;
export const starredCitiesActions = starredCitiesSlice.actions;