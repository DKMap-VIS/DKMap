import { fetchHello} from "../service/module/dataService";
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDataStore = defineStore("dataStore", {
  state: () => {
    return {
      msg: 'Hello, Vue SQ',
      imgFile: '',
      imgSet: [],
    }
  },
  actions: {
    fetchHello() {
      const st = new Date();
      fetchHello({}, resp => {
        this.msg = resp;
        console.log("Fetch Hello Time: ", st - new Date());
      })
    },

  }
})