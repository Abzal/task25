<template>
    <div>
        <h3>Рекдактировать пользователя / {{form.id}}</h3>
        <form @submit.prevent="update" class="form_new_user">
            <div class="form__group">
                <label class="form__label">Имя</label>
                <input type="text" v-model="form.first_name" class="form__input">
            </div>
            <div class="form__group">
                <label class="form__label">Фамилия</label>
                <input type="text" v-model="form.last_name" class="form__input">
            </div>
            <div class="form__group">
                <label class="form__label">Аватар</label>
                <img :src="form.avatar" :alt="form.first_name">
                <input type="text" v-model="form.avatar" class="form__input">
            </div>
            <div class="form__group">
                <button type="submit" class="btn__add">Обновить</button>
            </div>
        </form>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "CreateUser",
        computed: {
            ...mapGetters([
                'getUser'
            ]),
        },
        data() {
            return {
                form: {
                    id: this.$store.getters.getUser.id,
                    first_name: this.$store.getters.getUser.first_name,
                    last_name: this.$store.getters.getUser.last_name,
                    email: this.$store.getters.getUser.email,
                    avatar: this.$store.getters.getUser.avatar,
                }
            }
        },
        methods: {
            update() {
                this.$store
                    .dispatch('updateUser', {
                        id: this.form.id,
                        first_name: this.form.first_name,
                        last_name: this.form.last_name,
                        email: this.form.email,
                        avatar: this.form.avatar
                    })
                    .then(() => {
                        this.$router.push({ name: 'users' })
                    })
                    .catch(err => {
                        if (err.response.status === 422) {
                            alert ("Ошибка!")
                        }

                    })
            }
        }
    }
</script>

<style scoped>
    .form_new_user {
        max-width: 500px;
        border-radius: 8px;
        box-shadow: 0 0 10px #cfc7db;
        padding: 10px;
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
    .form__group {
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
    }
    .form__label {
        font-size: 16px;
        font-weight: bold;
        width: 100%;
    }
    .form__input {
        margin-top: 10px;
        font-size: 16px;
        width: 100%;
        border-radius: 4px;
        height: 25px;
        border-color: rgba(18,17,55,0.31);
    }
</style>
