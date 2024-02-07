import { intialdata } from "./Store";

export const reducer = (state = intialdata,action) =>
{
    switch(action.type)
    {
       case "Add" :
        return [...state,action.payload];
        case "Get":
            return state;
            default :
            return state; 
    }
}
