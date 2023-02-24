<template>
    <div>
        <v-container fluid>
            <v-card
                rounded="lg"
                class="overflow-hidden rounded-xl blur shadow-blur"
                elevation-12
                color="white"
            >
                <v-card-text>
                    <v-col v-if="serverResponse.length != 0" cols="12">
                        <v-alert
                            :color="serverResponse.status"
                            :title="serverResponse.message"
                        >
                        </v-alert>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            class="pt-4"
                            type="password"
                            prepend-inner-icon="mdi-lock"
                            variant="outlined"
                            label="Nové heslo"
                            required
                            v-model="formData.password"
                            :error-messages="errors.password"
                        ></v-text-field>
                    </v-col>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        @click="changePassword()"
                        variant="outlined"
                        rounded="xl"
                        color="green"
                    >
                        Změnit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </div>
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
            user: [],
        };
    },

    components: {},
    created() {
        this.index();
    },
    methods: {
        index() {
            axios.get("user/logged").then((response) => {
                this.user = response.data;
            });
        },

        changePassword() {
            axios
                .patch("users/password", {
                    password: this.formData.password,
                })
                .then((response) => {
                    this.serverResponse = response.data;
                    this.formData = [];
                    setTimeout(() => {
                        this.serverResponse = [];
                    }, 10000);
                })
                .catch((errors) => {
                    this.errors = errors.response.data.errors;
                });
        },
    },
    watch: {},
};
</script>
