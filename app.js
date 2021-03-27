Vue.component('item-row', {
  props: ['item'],
  data() {
    return {
      timerInterval: null,
      editing: false,
    };
  },
  methods: {
    toggle() {
      if (!this.item.run) {
        this.timerInterval = setInterval(() => (this.item.sec += 1), 1000)}
      else {
        clearInterval(this.timerInterval);
      }
      this.item.run = !this.item.run;
    },
  },
  template: `
    <tr>
      <td v-show="editing">
        <input v-model="item.name"></input>
      </td>
      <td v-show="!editing">
        <span v-on:click="editing=!editing">
          {{ item.name }}</span>
      </td>
      <!-- <td>{{ item.name }}</td> -->
      <td>{{ item.sec }}</td>
      <td>{{ editing }}</td>
      <td>
        <span v-on:click="toggle()">
        <v-btn v-if="this.item.run">Pause</v-btn>
        <v-btn v-else>Play</v-btn>
        </span>
      </td>
    </tr>`
});


new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  methods: {
    add(task) {self.items.push({name:"task",sec:0,run:false});}
  },
  data () {
    return {
      titles: ['Item','Total Time(s)','Tracking','Action'],
      items: [
        {
          name: 'try out',
          sec: 10,
          run: false,
        },
        {
          name: 'tracking app for Li',
          sec: 237,
          run: false,
        },
        
      ],
    }
  },
})
