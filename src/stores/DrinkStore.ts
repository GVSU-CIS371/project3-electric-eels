import {defineStore} from 'pinia';
import {Drink} from '../types';

export const useDrinkStore = defineStore("DrinkStore", {
    state: () => {
        /*
        Drink is a type that looks like this:
        type Drink {
            isIced: boolean;
            creamer: string;
            syrup: string;
            beverage: string;
            name: string;
        }
        */
        return { drinks: [] as Drink[] };
    },
    
    actions: {
        addBeverage(beverage: Drink) {
            this.drinks.push(beverage);
        },
        removeBeverage(index: number) {
            this.drinks.splice(index, 1);
        },
    },
});