const BaseResource = require('@/BaseResource');

/**
 * @author Gani Georgiev <gani.georgiev@gmail.com>
 */
module.exports = class User extends BaseResource {
    /**
     * @param  {Number} [page]
     * @param  {Number} [limit]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    getList(page = 1, limit = 20, queryParams = {}) {
        queryParams = Object.assign({
            'page':  page,
            'limit': limit
        }, queryParams);

        return this.$http({
            'method':  'get',
            'url':     '/users',
            'params':  queryParams
        });
    }

    /**
     * @param  {String} id
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    getOne(id, queryParams = {}) {
        return this.$http({
            'method':  'get',
            'url':     '/users/' + encodeURIComponent(id),
            'params':  queryParams
        });
    }

    /**
     * @param  {Object} [bodyParams]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    create(bodyParams = {}, queryParams = {}) {
        return this.$http({
            'method': 'post',
            'url':    '/users',
            'params': queryParams,
            'data':   bodyParams
        });
    }

    /**
     * @param  {String} id
     * @param  {Object} [bodyParams]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    update(id, bodyParams = {}, queryParams = {}) {
        return this.$http({
            'method': 'put',
            'url':    '/users/' + encodeURIComponent(id),
            'params': queryParams,
            'data':   bodyParams
        });
    }

    /**
     * @param  {String} id
     * @param  {Object} [bodyParams]
     * @param  {Object} [queryParams]
     * @return {Promise}
     */
    delete(id, bodyParams = {}, queryParams = {}) {
        return this.$http({
            'method': 'delete',
            'url':    '/users/' + encodeURIComponent(id),
            'params': queryParams,
            'data':   bodyParams
        });
    }
}
