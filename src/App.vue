<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" :creamer="currentCream" :syrup="currentSyrup" :beverage="currentBeverage" /> 
    <ul>
      <li>
        <span>Temperature:</span>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>

      <li>
        <span>Creamer:</span>
        <template v-for="creamer in creamers" :key="creamer">
          <label>
            <input
              type="radio"
              name="Creamer"
              :id="`r${creamer}`"
              :value="creamer"
              v-model="currentCream"
            />
            {{ creamer }}
          </label>
        </template>
      </li>

      <li>
        <span>Syrup:</span>
        <template v-for="syrup in syrups" :key="syrup">
          <label>
            <input
              type="radio"
              name="Syrup"
              :id="`r${syrup}`"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup }}
          </label>
        </template>
      </li>

      <li>
        <span>Base Beverage:</span>
        <template v-for="beverage in beverages" :key="beverage">
          <label>
            <input
              type="radio"
              name="Beverage"
              :id="`r${beverage}`"
              :value="beverage"
              v-model="currentBeverage"
            />
            {{ beverage }}
          </label>
        </template>
      </li>
    </ul>
    <label>Name:</label>
    <input type="string" id="name" v-model="name"/>
    <button @click="addToDrinks">Make Drink!</button>

    <div class="Drinks">
          <h2>Drinks:</h2>
          <!-- <template>
            <v-app>
              <v-main>
                <v-radio-group label="Drinks:" v-model="bevdrink">
                  <v-radio v-for="(drink,opt) in DrinkStore.drinks" :label="drink.name" :value="opt" @click=""/>
                </v-radio-group>
              </v-main>
            </v-app>
          </template> -->

          <ul>
            <template v-for="(drink, idx) in DrinkStore.drinks" :key="idx">
              <p>
                <input v-model="bevdrink" :id="`r${idx}`" type="radio" :value="drink" @click="showBeverage">
                <label :for="`r${idx}`">{{ drink.name }}</label>
              </p>
              </template>
          </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDrinkStore } from "./stores/DrinkStore";
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";

import { Drink } from "./types";

const DrinkStore = useDrinkStore();


// Define reactive data
const temps = ref(["Hot", "Cold"]);
const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const beverages = ref(["Coffee", "Green Tea", "Black Tea"]);

const currentTemp = ref("Hot");
const currentCream = ref("None");
const currentSyrup = ref("None");
const currentBeverage = ref("Coffee");

const name = ref("");
const bevdrink = ref();

const addToDrinks = () => {
  const drink:Drink = {
    isIced: currentTemp.value == "Cold",
    creamer: currentCream.value,
    syrup: currentSyrup.value,
    beverage: currentBeverage.value,
    name: name.value
  };
  DrinkStore.$patch((state) => {
    state.drinks.push(drink);
    console.log("Pushed drink to store");
  });
};

const showBeverage = () => {
  currentBeverage.value = bevdrink.value.beverage;
  currentCream.value = bevdrink.value.creamer;
  currentSyrup.value = bevdrink.value.syrup;
  currentTemp.value = bevdrink.value.isIced ? "Cold" : "Hot";
  name.value = bevdrink.value.name;
};

</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
