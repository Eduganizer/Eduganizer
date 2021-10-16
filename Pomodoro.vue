<template> 
    <h1 style = "padding:10px;margin:0px">Countdown productivity timer</h1>
    <div style = "position:relative; left:100px; top:10px; height:400px; width:500px;" id = "frame">
        <div class="column items-start" style="height: 10px">
            <div class="col">
            </div>
        </div>
        <div style="list-style-type:none; justify-content: space-between;">
        <div>
        <p>Please, select your duration of pomodoro:</p>
        <q-select  style = "width:150px;" square standout v-model="model1" :options="options" suffix = "minutes" label="Select timespan" />
        <p>Please, select your timespan of breaks</p>
        <q-select  style = "width:150px;" square standout v-model="model" :options="options1" suffix = "minutes" label="Select timespan" />
        </div>
        bruh
        </div>
    </div>
</template>

<script lang = "ts">
import { ref } from 'vue'

export default {
  setup () {
    return {
      options1:
      [
          '5','10'
      ],
      model1: ref(null),
      model: ref(null),
      options: [
        '10', '15', '20', '25'
      ]
    }
  }
}
</script>