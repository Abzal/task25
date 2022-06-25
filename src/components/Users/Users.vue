<template>
    <div>
        <div class="users__header">
            <div>
                <h1>Пользователи</h1>
            </div>
            <div>
                <button type="button" class="btn__add" @click="getUsers"> Все пользователи </button>
            </div>
            <div>
                <button type="button" class="btn__add" @click="addUser"> Добавить </button>
            </div>
        </div>
        <div class="users__header">
            <div class="wrap__pagination">
                <div class="pagination">
                    <a href="#">&laquo;</a>
                    <a v-for="item in pagination" :key="item.id" @click="getUsers(item)">{{item}}</a>
                    <a href="#">&raquo;</a>
                </div>
            </div>
        </div>
        <div class="users__container">
        <table class="users__table">
            <thead>
            <tr>
                <th>№</th>
                <th>Аватар</th>
                <th>Email</th>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Действия</th>
            </tr>
            </thead>
            <tbody v-if="allUsers">
            <tr v-for="user in allUsers" :key="user.id">
                <td>{{ user.id }}</td>
                <td>
                    <img :src="user.avatar">
                </td>
                <td>{{ user.email }}</td>
                <td>{{ user.first_name }}</td>
                <td>{{ user.last_name }}</td>
                <td>
                    <button type="button" class="btn__edit" @click="editUser(user)"> Редактировать </button>
                    <button type="button" class="btn__delete"  @click="deleteUsers(user.id)"> Удалить </button>
                </td>
            </tr>
            </tbody>

        </table>
    </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "UsersPage",
        data() {
            return {
                page: 2,
                pagination: 10,
            }
        },
        computed: {
            ...mapGetters([
                'allUsers'
            ]),
        },
        methods: {
            getUsers(item) {
                if (item) {
                    this.page = item
                }
                this.$store
                    .dispatch('getUsers', {
                        page: this.page
                    })
            },
            addUser() {
                this.$router.push({ name: 'users.create'})
            },
            editUser(user) {
                this.$store.commit('setUserData', user)
                this.$router.push({ name: 'users.edit'})
            },
            deleteUsers(userId) {
                this.$store
                    .dispatch('deleteUser', {
                        userId
                    })
            },
        }
    }
</script>

<style scoped>
    .users__header {
        display: flex;
        align-items: center;
        margin: 0 50px 20px 50px;
        justify-content: space-between;
    }
    .users__container {
        background: #ffffff;
        margin: 0 50px 0 50px;
        border-radius: 8px;
        box-shadow: 0 0 20px #d5cdde;
        padding: 10px;
        width: auto;
    }
    .users__table {
        width: 100%;
    }
    .btn__add {
        height: auto;
        font-size: 14px;
        color: #ffffff;
        border-radius: 4px;
        width: auto;
        padding: 10px;
        border: none;
        background: darkgreen;
        cursor: pointer;
    }
    .btn__edit {
        height: auto;
        font-size: 14px;
        color: #ffffff;
        border-radius: 4px;
        width: auto;
        padding: 10px;
        border: none;
        background: #573b8a;
        cursor: pointer;
    }
    .btn__delete {
        margin-left: 10px;
        height: auto;
        font-size: 14px;
        color: #ffffff;
        border-radius: 4px;
        width: auto;
        padding: 10px;
        border: none;
        background: #a52020;
        cursor: pointer;
    }
    .pagination a {
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        transition: background-color .3s;
    }

    .pagination a.active {
        background-color: dodgerblue;
        color: white;
    }
    .wrap__pagination {
        width: auto;
        background: white;
        border-radius: 4px;
        box-shadow: 0 0 10px #2c3e50;
    }
    .pagination a:hover:not(.active) {background-color: #ddd;}
</style>
