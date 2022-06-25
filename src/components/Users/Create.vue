<template>
    <div>
        <h1>Добавить пользователя</h1>
        <form @submit.prevent="createUser" class="form_new_user">
            <div class="form__group">
                <label class="form__label">Имя</label>
                <input type="text" v-model="form.first_name" class="form__input">
            </div>
            <div class="form__group">
                <label class="form__label">Фамилия</label>
                <input type="text" v-model="form.last_name" class="form__input">
            </div>
            <div class="form__group">
                <button type="submit" class="btn__add">Создать</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "CreateUser",
        data() {
          return {
              form: {
                  first_name: "",
                  last_name: "",
              }
          }
        },
        methods: {
            createUser() {
                this.$store
                    .dispatch('createUser', {
                        first_name: this.form.first_name,
                        last_name: this.form.last_name
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
