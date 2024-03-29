import {defineStore} from 'pinia';
import {Beverage} from '../types';

export const useDrinkStore = defineStore("DrinkStore", {
    state: () => {
        /*
        Beverage is a type that looks like this:
        type Beverage {
            name: string;
            price: number;
            quantity: number;
        }
        */
        return { beverages: [] as Beverage[] };
    },
    actions: {
        addBeverage(beverage: Beverage) {
            this.beverages.push(beverage);
        },
        removeBeverage(index: number) {
            this.beverages.splice(index, 1);
        },
    },
});