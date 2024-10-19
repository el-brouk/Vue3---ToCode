<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type ur note" />
      <TagsList @onItemClick="handleTagClick" :items="tags" />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'
import tags from '@/seeders/tags'
export default {
  components: { TagsList },
  data() {
    return {
      value: '',
      tags: tags.tags
    }
  },
  methods: {
    getActiveTags() {
      let tags = []
      document
        .querySelectorAll('div.tag-item.isActive')
        .forEach(e => tags.push({ alias: e.textContent, title: e.textContent }))
      console.log(tags)
      return tags
    },

    cleanActiveTags() {
      document
        .querySelectorAll('div.tag-item.isActive')
        .forEach(e => e.classList.toggle('isActive'))
    },

    onSubmit() {
      this.$emit('onSubmit', {
        title: this.value,
        tags: this.getActiveTags()
      })
      this.value = ''
      this.cleanActiveTags()
    },

    handleTagClick(event) {
      if (event.currentTarget) {
        event.currentTarget.classList.toggle('isActive')
      } else {
        console.error('Target is null') // Логируем ошибку для отладки
      }
    }
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
}
</style>
