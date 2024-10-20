import { createStore } from 'vuex'

export const store = createStore({
  state: {
    notes: [
      {
        title: 'Learn Vue 3',
        tags: [
          {
            isActive: false,
            title: 'work'
          }
        ]
      },
      {
        title: 'Finish course',
        tags: [
          {
            isActive: false,
            title: 'work'
          },
          {
            isActive: false,
            title: 'home'
          }
        ]
      }
    ]
  },
  mutations: {
    removeNote(state, index) {
      state.notes.splice(index, 1)
    },
    addNote(state, note) {
      state.notes.push(note)
    }
  },
  actions: {
    removeNote(context, index) {
      context.commit('removeNote', index)
    },
    addNote(context, note) {
      context.commit('addNote', note)
    }
  },
  getters: {
    // getUser(state) {
    //   return state.user
    // },
    // isUserLogged(state) {
    //   return state.user ? true : false
    // },
    // getAllUsers(state) {
    //   return state.users
    // },
    getNotesList(state) {
      return state.notes
    }
    // getUserById: state => id => state.users.find(user => user.id == id),
    // getUsersLength(state, getters) {
    //   const suffix = 'Кол-во пользователей:'
    //   return `${suffix} ${getters.getAllUsers.length}`
    // }
  }
})
