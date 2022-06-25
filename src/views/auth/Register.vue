<template>
    <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true">

        <div class="signup">
            <form @submit.prevent="handleSubmit">
                <label for="chk" aria-hidden="true">Регистрация</label>
                <input type="email" v-model="email" placeholder="Логин">
                <input type="password" v-model="password" placeholder="Пароль">
                <button type="submit">Загеристрировать</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RegisterPage",
        data() {
            return {
                email:"eve.holt@reqres.in",
                password:"pistol"
            }
        },
        methods:{
            handleSubmit() {
                this.$store
                    .dispatch('register', {
                        email: this.email,
                        password: this.password
                    })
                    .then(() => {
                        this.$router.push({ name: 'login' })
                    })
                    .catch(err => {
                        if (err.response.status === 422) {
                            alert ("Пароль не верно!")
                        }

                    })
            },

        }
    }
</script>

<style scoped>
    .main{
        width: 350px;
        height: 450px;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 5px 20px 50px #000;
    }
    #chk{
        display: none;
    }
    .signup{
        position: relative;
        width:100%;
        height: 100%;
    }
    .form_url {
        color: #ffffff;
        text-decoration: none;
        cursor: pointer;
    }
    label{
        color: #fff;
        font-size: 2.3em;
        justify-content: center;
        display: flex;
        margin: 60px;
        font-weight: bold;
        cursor: pointer;
        transition: .5s ease-in-out;
    }
    input{
        width: 60%;
        height: 20px;
        background: #e0dede;
        justify-content: center;
        display: flex;
        margin: 20px auto;
        padding: 10px;
        border: none;
        outline: none;
        border-radius: 5px;
    }
    button{
        width: 60%;
        height: 40px;
        margin: 10px auto;
        justify-content: center;
        display: block;
        color: #fff;
        background: #573b8a;
        font-size: 1em;
        font-weight: bold;
        margin-top: 20px;
        outline: none;
        border: none;
        border-radius: 5px;
        transition: .2s ease-in;
        cursor: pointer;
    }
    button:hover{
        background: #6d44b8;
    }
    .login{
        height: 460px;
        background: #eee;
        border-radius: 60% / 10%;
        transform: translateY(-180px);
        transition: .8s ease-in-out;
    }
    .login label{
        color: #573b8a;
        transform: scale(.6);
    }

    #chk:checked ~ .login{
        transform: translateY(-500px);
    }
    #chk:checked ~ .login label{
        transform: scale(1);
    }
    #chk:checked ~ .signup label{
        transform: scale(.6);
    }


</style>
