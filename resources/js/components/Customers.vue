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
                                <th class="text-left">Příjmení</th>
                                <th class="text-left">Adresa</th>
                                <th class="text-left">Email</th>
                                <th class="text-left">Telefon</th>
                                <th class="text-left">Promo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="customer in customers"
                                :key="customer.id"
                            >
                                <td>{{ customer.name }}</td>
                                <td>{{ customer.surname }}</td>
                                <td>
                                    {{ customer.street }} ,
                                    {{ customer.city }} ,
                                    {{ customer.post_code }}
                                </td>
                                <td>{{ customer.email }}</td>
                                <td>{{ customer.telephone }}</td>
                                <td>
                                    <div v-if="customer.promo == null">
                                        <v-chip class="text-red" color="#FAD1D1"
                                            >Není
                                        </v-chip>
                                    </div>
                                    <div
                                        v-else-if="
                                            customer.promo.isPassed == true
                                        "
                                    >
                                        <v-chip class="text-red" color="#FAD1D1"
                                            >Po expiraci -
                                            {{ customer.promo.subscriberCode }}
                                            /
                                            {{
                                                customer.promo.subscriberCode
                                            }}</v-chip
                                        >
                                    </div>
                                    <div v-else>
                                        <v-chip
                                            class="text-green"
                                            color="#E5FFF1"
                                            >Aktivní -
                                            {{ customer.promo.subscriberCode }}
                                            /
                                            {{
                                                customer.promo.subscriberCode
                                            }}</v-chip
                                        >
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            customers: [],
        };
    },

    created() {
        this.index();
    },

    methods: {
        index() {
            axios.get("customers").then((response) => {
                this.customers = response.data;
            });
        },
    },
};
</script>
