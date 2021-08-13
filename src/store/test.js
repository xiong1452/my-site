export default {
    namespace: true,
    state: {
        data: 1
    },
    mutations: {
        setData(state, payload){
            this.state = payload
        }
    }
}