const state = {
    list: [],
    isShowMask: false
}

const mutations = {
    updateList(state, payload) {
        state.list = state.list.concat(payload);
        console.log(payload);
    },
    hideMask(state) {
        state.isShowMask = false
    },
    showMask(state) {
        state.isShowMask = true
    },
    change(state, payload) {
        state.list.forEach((item, index) => {
            if (payload == index) {
                if (!item.changeStatus) {
                    item.zan++;
                    item.changeStatus = true;
                } else {
                    item.zan--;
                    item.changeStatus = false;
                }
            }
        })
    },
    addData(state, payload) {
        console.log(payload);
        state.list.unshift(payload);
    }

}

const actions = {
    getList({ commit }, payload) {
        fetch('https://www.easy-mock.com/mock/5b8cd49b76d0775c5c873187/example/list')
            .then(res => res.json())
            .then(body => {
                commit('updateList', body)
            })
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}