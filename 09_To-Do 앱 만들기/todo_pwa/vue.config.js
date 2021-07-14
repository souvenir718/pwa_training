module.exports = {
    pwa: {
        // GenerateSW는 기본값이므로 모드 선언을 생략해도 됨
        workboxPluginMode: "GenerateSW",
        workboxOptions: {
            // 프리캐시 옵션 지정
            include: [/^index\.html$/, /\.css$/, /\.js$/, /^manifest\.json$/, /\.png$/],
            exclude: [],
            runtimeCaching: [
                {
                    // 런타임 캐시 옵션 지정
                },
            ],
        },
    },
    transpileDependencies: ["vuetify"],
};
