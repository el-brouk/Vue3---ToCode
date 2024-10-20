<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="getNotesList" />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'
import localStorageUpdateNotes from '@/utils/utils'

export default {
  components: { Form, List },
  mounted() {
    this.getNotes()
  },
  watch: {
    getNotesList: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    // * get / set notes
    getNotes() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.getNotesList = JSON.parse(localNotes)
      }
    },
    // * submit note
    handleSubmit({ title, tags }) {
      const note = {
        title: title,
        tags: tags
      }
      this.$store.dispatch('addNote', note)
    },
    // * remove note
    handleRemove(index) {
      this.$store.dispatch('removeNote', index)
    }
  },
  computed: {
    getNotesList() {
      return this.$store.getters.getNotesList
    }
  }
}
</script>
