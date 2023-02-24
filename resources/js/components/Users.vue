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
                    <v-table fixed-header height="600px">
                        <thead>
                            <tr>
                                <th class="text-left">Jméno</th>
                                <th class="text-left">Email</th>
                                <th>
                                    <v-btn
                                        variant="outlined"
                                        rounded="lg"
                                        color="green"
                                        @click="openNewAdminDialog()"
                                    >
                                        Nový správce</v-btn
                                    >
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td>
                                    <v-btn
                                        flat
                                        @click="showAlertDialog(user.id)"
                                    >
                                        <v-icon color="red">mdi-delete</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card-text>
            </v-card>

            <div class="text-center">
                <v-dialog v-model="adminDialog" max-width="600" persistent>
                    <v-card rounded="lg">
                        <v-card-text>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field
                                    prepend-inner-icon="mdi-account"
                                    autofocus
                                    density="compact"
                                    variant="outlined"
                                    label="Jméno"
                                    required
                                    v-model="formData.name"
                                    :error-messages="errors.name"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field
                                    prepend-inner-icon="mdi-account"
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
                                    readonly
                                    disabled
                                    prepend-inner-icon="mdi-lock"
                                    density="compact"
                                    variant="outlined"
                                    label="Heslo"
                                    required
                                    v-model="formData.password"
                                    :error-messages="errors.password"
                                ></v-text-field>
                            </v-col>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                color="red"
                                variant="outlined"
                                rounded="lg"
                                @click="closeDialog()"
                                >Zavřít</v-btn
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                color="green"
                                variant="outlined"
                                rounded="lg"
                                @click="storeNewAdmin()"
                                >Uložit</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-dialog>

                <v-dialog v-model="alertDialog" max-width="600" persistent>
                    <v-card rounded="lg">
                        <v-card-text>
                            <v-container fluid>
                                <v-row>
                                    <v-col cols="1">
                                        <v-icon size="x-large" color="red"
                                            >mdi-alert</v-icon
                                        >
                                    </v-col>
                                    <v-col cols="11">
                                        <p class="text-h5 text-center">
                                            Opravdu si přejete odebrat
                                            uživatele?
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                variant="outlined"
                                color="red"
                                rounded="lg"
                                @click="closeDialog()"
                            >
                                Zavřít
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                variant="outlined"
                                color="green"
                                rounded="lg"
                                @click="removeUser()"
                            >
                                Odebrat
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </v-container>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            users: [],
            adminDialog: false,
            alertDialog: false,
            formData: [],
            errors: [],
        };
    },

    created() {
        this.index();
    },

    methods: {
        index() {
            axios.get("users").then((response) => {
                this.users = response.data;
            });
        },

        openNewAdminDialog() {
            axios.get("users/password").then((response) => {
                this.formData.password = response.data;
            });
            this.adminDialog = true;
        },

        storeNewAdmin() {
            axios
                .post("users", {
                    name: this.formData.name,
                    password: this.formData.password,
                    email: this.formData.email,
                })
                .then((response) => {
                    this.closeDialog();
                    this.index();
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },

        closeDialog() {
            this.adminDialog = false;
            this.alertDialog = false;
            this.formData = [];
            this.errors = [];
        },

        showAlertDialog(userId) {
            this.formData.userId = userId;
            this.alertDialog = true;
        },
        removeUser() {
            axios
                .delete("users/" + this.formData.userId)
                .then((response) => {
                    this.closeDialog();
                    this.index();
                })
                .catch((error) => {
                    this.closeDialog();
                });
        },
    },
};
</script>
