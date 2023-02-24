<template>
    <v-main>
        <v-container class="d-flex fill-height justify-start align-center">
            <v-row class="d-flex align-center justify-center">
                <v-col cols="12" sm="12" md="6" lg="7">
                    <v-form>
                        <v-card
                            style="
                                background: rgba(255, 255, 255, 0.75);
                                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
                                backdrop-filter: blur(4.5px);
                                -webkit-backdrop-filter: blur(4.5px);
                                border-radius: 10px;
                                border: 1px solid rgba(255, 255, 255, 0.18);
                            "
                        >
                            <v-card-text>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        prepend-inner-icon="mdi-account"
                                        autofocus
                                        density="compact"
                                        variant="outlined"
                                        label="Email"
                                        required
                                        v-model="formData.email"
                                        :error-messages="errors.email"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <v-text-field
                                        type="password"
                                        prepend-inner-icon="mdi-lock"
                                        density="compact"
                                        variant="outlined"
                                        label="Heslo"
                                        required
                                        v-model="formData.password"
                                        :error-messages="errors.password"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <v-btn
                                        :loading="loading"
                                        @click="login()"
                                        variant="flat"
                                        color="green"
                                        block
                                        type="submit"
                                        class="rounded-md font-size-bold text-h6 my-2 text-white"
                                        ><strong>Přihlásit se</strong></v-btn
                                    >
                                </v-col>
                            </v-card-text>
                        </v-card>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            loading: false,
            formData: [],
            errors: [],
            serverResponse: [],
        };
    },

    components: {},
    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("user/logged").then((response) => {
                this.$router.push("/");
            });
        },

        login() {
            this.loading = true;
            axios
                .post("login", {
                    email: this.formData.email,
                    password: this.formData.password,
                })
                .then((response) => {
                    this.loading = false;
                    this.serverResponse = response.data;
                    if (response.data.status == "success") {
                        this.$router.push("/");
                    } else {
                        this.formData = [];
                    }
                })
                .catch((error) => {
                    this.loading = false;
                    this.errors = error.response.data.errors;
                });
        },
    },
    watch: {},
};
</script>
