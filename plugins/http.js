export default function ({ $http, $store }) {
    $http.onRequest((config) => {
        if ($store.auth.isLogedIn) {
            config.headers.set('Authorization', `Bearer ${$sotre.auth.authorization}`)
        }
        return config
    })

    $http.onError((config)

    )
}