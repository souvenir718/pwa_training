<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>멀티 페이지</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
        <!-- 라우터 페이지 렌더링 -->
        <v-main>
            <!-- 페이지 장면 전환 효과 넣기 -->
            <v-slide-y-transition mode="out-in">
                <router-view></router-view>
            </v-slide-y-transition>
        </v-main>

        <v-footer color="secondary" fixed dark>
            <div class="mx-auto">HMAPS.net</div>
        </v-footer>
    </v-app>
</template>
