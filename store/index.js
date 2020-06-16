export const state = () => ({
    docs: [],
});

export const mutations = {
    setdocs(state, list) {
        state.docs = list;
    },
};

export const actions = {
    async nuxtServerInit({ commit }) {
        let files = await require.context('~/docs/', false, /\.json$/);
        let docs = files.keys().map(key => {
            let res = files(key);
            res.slug = key.slice(2, -5);
            return res;
        });
        await commit('setdocs', docs);
    },
};