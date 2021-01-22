export default ({ route, store, redirect }) => {





    // case not active user
    if (!store.state.auth.isLogedIn) {
        // redirect just in case it's goin to a path other then login
        if (!route.path.startsWith('/login')) {
            redirect('/login')
        }

    } else {

        // console.log({ path: route.path, role: store.state.auth.role })

        // case a client user
        if (store.state.auth.role == 'CLIENT') {

            // redirect just in case it's goin to a path other then client
            if (!route.path.startsWith('/client')) {
                redirect('/client')
            }

        }


        // case a admin user
        if (store.state.auth.role == 'ADMIN') {

            // redirect just in case it's goin to a path other then admin
            if (!route.path.startsWith('/admin')) {
                redirect('/admin')
            }

        }


    }


}