<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>멀티페이지</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn-icon>
        </v-app-bar>
        <v-content>
            <v-slide-x-transition mode="out-in">
                <router-view></router-view>
            </v-slide-x-transition>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        //
    }),
};
</script>
