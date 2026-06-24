module.exports = function (api) {
    api.cache(true);
    return {
        targets: {
            browsers: ["chrome 48", "safari >= 7"]
        },
        presets: [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        plugins: [
            ["babel-plugin-react-compiler", {
            target: "19",
            // disableMemoizationForDebugging: true,
            panicThreshold: "all_errors",
            logger: {
                logEvent (filename, event) {
                    // eslint-disable-next-line no-console
                    console.log(`[Compiler] ${event.kind}: ${filename}`);
                }
            }
        }]
        ]
    };
}