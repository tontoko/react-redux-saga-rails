export default {
    create: (data) => {
        console.log(data)
        return { type: 'CREATE', data }
    }, 
    createSuccess: (data) => {
        return { type: 'CREATE_SUCCEEDED', data }
    },
    update: (id, data) => {
        console.log(id, data)
        return { type: 'UPDATE', id, data }
    },
    updateSuccess: (id, data) => {
        return { type: 'UPDATE_SUCCEEDED', id, data }
    },
    delete: (id) => {
        return { type: 'DELETE', id }
    },
    deleteSuccess: (id) => {
        return { type: 'DELETE_SUCCEEDED', id }
    },
    init: () => {
        return { type: 'INIT' }
    },
    initSuccess: (data) => {
        return { type: "INIT_SUCCEEDED", data}
    },
    test: () => {
        return { type: 'TEST' }
    }
}