const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
module.exports = {
    mode: "development",
    entry: "./src/script.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [new htmlPlugin({ template: "./src/template.html" })],
};
