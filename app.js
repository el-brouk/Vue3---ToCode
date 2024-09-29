const App = {
  data() {
    return {
      title: "Notes",
      input: {
        value: "",
        placeholder: "Type ur note",
      },
      notes: [
        {
          id: 11,
          name: "task 1",
          isEdited: false,
        },
        {
          id: 12,
          name: "task 2",
          isEdited: false,
        },
        {
          id: 13,
          name: "task 3",
          isEdited: false,
        },
      ],
    }
  },
  mounted() {
    localStorage.clear()
    this.getNotes()
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList))
      },
      deep: true,
    },
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem("notes")
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    },
    onSubmit() {
      let newNote = {
        id: this.notes.at(-1).id++,
        name: this.input.value,
        isEdited: false,
      }
      this.notes.push(newNote)

      // reset
      this.input.value = ""
    },
    remove(index) {
      console.log(`note: ${index} has been removed`)
      this.notes.splice(index, 1)
    },

    openEditNote(i) {
      this.notes.find((item) => item.id === i).isEdited = true
    },

    onEdit(i) {
      this.notes.find((item) => item.id === i).name = this.input.value
      // reset
      this.input.value = ""
      this.notes.find((item) => item.id === i).isEdited = false
    },
  },
}

Vue.createApp(App).mount("#app")
