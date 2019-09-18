import * as baseService from './base';

function all() {
    return baseService.get('/api/users');
}

function one(id) {
    return baseService.get(`/api/users/${id}`);
}

function insert(data) {
    return baseService.post('/api/users', data);
}

function update(id, data) {
    return baseService.put(`/api/users/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/users/${id}`);
}

export { all, one, insert, update, destroy };