
export default {
  state: {
    name: 'key',
    age: 25,
    sex: 'man'
  },
  mutations: {
    foo(state, obj) {
      state.age += obj.num;
    }
  },
  actions: {
    chuFaFoo(context, obj) {
      context.commit('foo', obj);
    }
  },
  getters: {
    getName(state) {
      return state.name;
    },
    getAge(state) {
      return state.age;
    }
  }
}
