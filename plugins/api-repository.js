import createRepository from '~/api/repository.js'
export default (ctx, inject) => {
    const apiRepository = createRepository(ctx.$http);

    const api = {
        getToken: apiRepository.getToken
    }

    inject('api',api)
}