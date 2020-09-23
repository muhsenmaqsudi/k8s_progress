<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>
      Data coming from spring boot
    </h2>
    <p>Data coming from spring boot {{ spring }}</p>
    <h2>
      Data coming from laravel
    </h2>
    <p>Data coming from laravel {{ laravel }}</p>
    <h2>
      Data coming from nest
    </h2>
    <p>Data coming from nest {{ nest }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "About",
  data() {
    return {
      spring: null,
      laravel: null,
      nest: null,
    };
  },
  created() {
    axios
      .get("http://k8s.me/api/spring/user")
      .then((res) => {
        this.spring = res.data;
      })
      .catch((err) => console.log(err));
    axios
      .get("http://k8s.me:8000/api/user")
      .then((res) => {
        this.laravel = res.data;
      })
      .catch((err) => console.log(err));
    axios
      .get("http://k8s.me/api/nest/user")
      .then((res) => {
        this.nest = res.data;
      })
      .catch((err) => console.log(err));
  },
});
</script>
