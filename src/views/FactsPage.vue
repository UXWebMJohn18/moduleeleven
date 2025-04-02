<template>
  <div class="facts">
    <h1>Random Fact:</h1>
    <button @click="fetchData">Click Me!</button>
    <p v-if="fact">{{ fact }}</p>
    <GoBack />
  </div>
</template>

<script>
import GoBack from '@/components/GoBack.vue';

export default {
  components: {
    GoBack,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      fact: "",
    };
  },
  methods: {
    fetchData() {
      fetch('https://facts-by-api-ninjas.p.rapidapi.com/v1/facts', {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": '5f1c149ed6mshfec5de03ae704f3p1b8336jsnf8b6071ec999',
          "X-RapidAPI-Host": 'facts-by-api-ninjas.p.rapidapi.com',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.fact = data[0].fact;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
button {
  padding: 12px 32px;
  font-size: 16px;
  border-radius: 8px;
}
</style>
