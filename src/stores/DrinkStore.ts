import {defineStore} from 'pinia';
import {Beverage} from '../types';

export const useDrinkStore = defineStore("DrinkStore", {
    state: () => {
        return { beverages: {} as Beverage[] };
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