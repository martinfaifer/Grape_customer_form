<template>
    <v-main>
        <v-app-bar flat>
            <v-app-bar-title>
                <v-img
                    style="cursor: pointer"
                    @click="goHome()"
                    width="120"
                    src="images/png.png"
                ></v-img>
            </v-app-bar-title>
            <template v-slot:append>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn
                            icon="mdi-account"
                            size="small"
                            v-bind="props"
                        ></v-btn>
                    </template>

                    <v-list density="compact">
                        <v-list-item prepend-icon="mdi-account-multiple">
                            <v-list-item-title
                                class="text-body-2"
                                @click="goToCustomer()"
                                style="cursor: pointer"
                            >
                                Přehled zákazníklů
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item prepend-icon="mdi-account-multiple">
                            <v-list-item-title
                                class="text-body-2"
                                @click="goToUsers()"
                                style="cursor: pointer"
                            >
                                Přehled uživatelů
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item prepend-icon="mdi-lock">
                            <v-list-item-title
                                class="text-body-2"
                                @click="goToUser()"
                                style="cursor: pointer"
                            >
                                Změna hesla
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item prepend-icon="mdi-logout">
                            <v-list-item-title
                                class="text-body-2"
                                @click="logout()"
                                style="cursor: pointer"
                            >
                                Odhlásit se
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-app-bar>
        <v-container>
            <v-row>
                <!-- <v-col cols="12" sm="12" md="3" lg="3">
                    <v-btn
                        type="text"
                        color="blue"
                        @click="generatePromo()"
                        :loading="loading"
                    >
                        Vygenerovat promo přístupy do GeniusTV
                    </v-btn>
                </v-col> -->
                <v-col cols="12" sm="12" md="12" lg="12">
                    <Form v-if="!$route.params.component"></Form>
                    <Customers
                        v-if="$route.params.component == 'customers'"
                    ></Customers>
                    <User v-if="$route.params.component == 'user'"></User>
                    <Users v-if="$route.params.component == 'users'"></Users>
                </v-col>
            </v-row>
            <div class="text-center">
                <v-dialog v-model="promoDialog" max-width="450" persistent>
                    <v-card>
                        <v-card-text>
                            <p class="my-2">
                                Uživatelské jméno:
                                <span class="font-weight-medium">{{
                                    promoLogin.subscriberCode
                                }}</span>
                            </p>
                            <p class="my-2">
                                Heslo:
                                <span class="font-weight-medium">{{
                                    promoLogin.subscriberCode
                                }}</span>
                            </p>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" block @click="closeDialog()"
                                >Zavřít</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </v-container>
    </v-main>
</template>

<script>
import axios from "axios";

import Form from "./Form.vue";
import Customers from "./Customers.vue";
import User from "./User.vue";
import Users from "./Users.vue";
export default {
    data() {
        return {
            loading: false,
            user: [],
            promoLogin: [],
            promoDialog: false,
        };
    },

    components: { Form, Customers, User, Users },
    created() {
        this.index();
    },
    methods: {
        index() {
            axios
                .get("user/logged")
                .then((response) => {
                    this.user = response.data;
                })
                .catch((error) => {
                    if (error.response.status == 403) {
                        this.$router.push("/login");
                    }

                    if (error.response.status == 401) {
                        this.$router.push("/login");
                    }
                });
        },

        generatePromo() {
            this.loading = true;
            axios.post("customer/promo").then((response) => {
                this.loading = false;
                this.promoLogin = response.data;
                this.promoDialog = true;
            });
        },

        closeDialog() {
            this.promoDialog = false;
            this.promoLogin = [];
        },

        goHome() {
            this.$router.push("/");
        },

        goToCustomer() {
            this.$router.push("/customers");
        },

        goToUser() {
            this.$router.push("/user");
        },

        goToUsers() {
            this.$router.push("/users");
        },

        logout() {
            axios.post("logout").then((response) => {
                this.$router.push("/login");
            });
        },
    },
    watch: {},
};
</script>
