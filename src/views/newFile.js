import { collection, addDocs } from "firebase/firestore";
import { db } from "/Users/ichidakeiji/webex/anualincome-100milion/src/firebase.js";

export default (await import("vue")).defineComponent({
  data() {
    return {
      textInput: "",
    };
  },
  methods: {
    pushinput() {
      if (this.textInput === "") {
        return;
      } else {
        var todo = {
          text: this.textInput,
          isDone: false,
        };
        this.textInput = "";
        addDocs(collection(db, "tweets"), {
          text: todo,
        });
      }
    },
  },
});
