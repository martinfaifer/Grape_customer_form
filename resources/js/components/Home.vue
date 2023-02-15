<template>
    <v-main>
        <v-container>
            <v-col cols="12">
                <v-card
                    rounded="lg"
                    class="overflow-hidden rounded-xl blur shadow-blur"
                    elevation-12
                    color="white"
                >
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col v-if="serverResponse.length != 0" cols="12">
                                    <v-alert
                                        :color="serverResponse.status"
                                        :title="serverResponse.message"
                                    >
                                    </v-alert>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        density="compact"
                                        variant="outlined"
                                        :error-messages="errors.name"
                                        v-model="formData.name"
                                        label="Jméno"
                                        name="name"
                                        prepend-inner-icon="mdi-account"
                                        type="text"
                                        autofocus
                                        class="my-1"
                                        clearable
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="6" lg="6">
                                    <v-text-field
                                        density="compact"
                                        variant="outlined"
                                        :error-messages="errors.surname"
                                        v-model="formData.surname"
                                        label="Příjmení"
                                        name="surname"
                                        prepend-inner-icon="mdi-account"
                                        type="text"
                                        class="my-1"
                                        clearable
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        density="compact"
                                        variant="outlined"
                                        :error-messages="errors.street"
                                        v-model="formData.street"
                                        label="Ulice + číslo popisné"
                                        name="street"
                                        prepend-inner-icon="mdi-office-building-outline"
                                        type="text"
                                        class="my-1"
                                        clearable
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        density="compact"
                                        variant="outlined"
                                        :error-messages="errors.city"
                                        v-model="formData.city"
                                        label="Město"
                                        name="city"
                                        prepend-inner-icon="mdi-city"
                                        type="text"
                                        class="my-1"
                                        clearable
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        density="compact"
                                        variant="outlined"
                                        :error-messages="errors.post_code"
                                        v-model="formData.post_code"
                                        label="Číslo popisné"
                                        name="post_code"
                                        type="text"
                                        class="my-1"
                                        clearable
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        density="compact"
                                        variant="outlined"
                                        :error-messages="errors.birthday"
                                        v-model="formData.birthday"
                                        label="Datum narození"
                                        name="birthday"
                                        prepend-inner-icon="mdi-cake"
                                        type="text"
                                        class="my-1"
                                        clearable
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        density="compact"
                                        variant="outlined"
                                        :error-messages="errors.telephone"
                                        v-model="formData.telephone"
                                        label="Telefon"
                                        name="telephone"
                                        prepend-inner-icon="mdi-phone"
                                        type="text"
                                        class="my-1"
                                        clearable
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" lg="4">
                                    <v-text-field
                                        density="compact"
                                        variant="outlined"
                                        :error-messages="errors.email"
                                        v-model="formData.email"
                                        label="Email"
                                        name="email"
                                        prepend-inner-icon="mdi-email"
                                        type="text"
                                        class="my-1"
                                        clearable
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-text-field
                                        density="compact"
                                        variant="outlined"
                                        :error-messages="errors.service"
                                        v-model="formData.service"
                                        label="Služba"
                                        name="service"
                                        prepend-inner-icon="mdi-room-service"
                                        type="text"
                                        class="my-1"
                                        clearable
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-textarea
                                        density="compact"
                                        variant="outlined"
                                        :error-messages="errors.note"
                                        v-model="formData.note"
                                        label="Poznámka"
                                        name="note"
                                        prepend-inner-icon="mdi-note"
                                        type="text"
                                        class="my-1"
                                        clearable
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            @click="submitForm()"
                            block
                            rounded="lg"
                            class="text-white gradient-green-button"
                            style="
                                background: rgb(93, 214, 28);
                                background: linear-gradient(
                                    183deg,
                                    rgba(93, 214, 28, 1) 0%,
                                    rgba(13, 126, 53, 1) 100%
                                );
                            "
                        >
                            Odeslat
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-container>
    </v-main>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            formData: [],
            errors: [],
            serverResponse: [],
            alertData: [],
        };
    },

    components: {},
    created() {},
    methods: {
        submitForm() {
            axios
                .post("customer", {
                    name: this.formData.name,
                    surname: this.formData.surname,
                    street: this.formData.street,
                    city: this.formData.city,
                    post_code: this.formData.post_code,
                    birthday: this.formData.birthday,
                    telephone: this.formData.telephone,
                    email: this.formData.email,
                    service: this.formData.service,
                    note: this.formData.note,
                })
                .then((response) => {
                    this.serverResponse = response.data;
                    this.formData = [];
                    setTimeout(() => {
                        this.serverResponse = [];
                    }, 10000);
                })
                .catch((error) => {
                    this.errors = error.response.data.errors;
                });
        },
    },
    watch: {},
};
</script>
