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
    <!--
    text input field labeled “Name” 
      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" v-model="count" min="0" max="5" />
    and a button labeled “Make Beverage”. Bind the button with a click event that uses the $patch method to add the user’s selections as a named recipe in the Pinia store.
      <button @click="$emit('addToCart', count), (count = 0)">Add to Cart</button>
    -->

    <!--
      Display Recipes: 
      Show all the recipes currently stored in the Pinia Store In App.vue. 
      Implement a click function, showBeverage, 
      to allow users to click on a recipe name, 
      which will then visually display the corresponding beverage in the mug.
        <div class="cart">
          <h2>Cart Items</h2>
          <ul>
            <li v-for="(item, idx) in cartStore.products" :key="`cart-item-${idx}`">
              {{ item.name }}
            </li>
          </ul>
        </div>
    -->
    
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";
// Define reactive data
const temps = ref(["Hot", "Cold"]);
const creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const syrups = ref(["None", "Vanilla", "Caramel", "Hazelnut"]);
const beverages = ref(["Coffee", "Green Tea", "Black Tea"]);

const currentTemp = ref("Hot");
const currentCream = ref("None");
const currentSyrup = ref("None");
const currentBeverage = ref("Coffee");
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
