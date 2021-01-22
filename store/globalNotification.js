export const state = () => ({

    // notification
    isNotificationActive: false,
    notification: 'We need more coffe',
    notificationDuration: 4000,

    // error
    isErrorActive: false,
    error: 'We need more coffe',
    errorDuration: 4000,
})

export const getters = {

    // notification
    isNotificationActive: state => state.isActive,

    notification: state => state.notification,
    // error
    isErrorActive: state => state.isErrorActive,

    error: state => state.error
}

export const mutations = {

    // notification
    updateNotification: (state, { notification }) => {
        state.isActive = false;
        state.notification = notification;
        state.isActive = true;
    },

    clearNotification: (state) => {
        state.isActive = false;
        state.notification = ""
    },

    // error
    updateError: (state, { error }) => {
        state.isErrorActive = false;
        state.error = error;
        state.isErrorActive = true;
    },

    clearError: (state) => {
        state.isErrorActive = false;
        state.error = ""
    }

}

export const actions = {

    // notification
    fireNotification({ commit, state }, { notification }) {
        return new Promise((resolve, reject) => {
            commit('updateNotification', { notification })
            const TID = setTimeout(
                () => {
                    clearTimeout(TID)
                    commit('clearNotification', { notification })
                    resolve()
                },
                state.notificationDuration || 4e3
            )
        })
    },

    // error
    fireError({ commit, state }, { error }) {
        return new Promise((resolve, reject) => {
            commit('updateError', { error })
            const TID = setTimeout(
                () => {
                    clearTimeout(TID)
                    commit('clearError', { error })
                    resolve()
                },
                state.errorDuration || 4e3
            )
        })
    }
}