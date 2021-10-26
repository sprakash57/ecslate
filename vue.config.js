module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                appId: "com.suprdev.ecslate",
                productName: "Ecslate",
                copyright: "Copyright © 2021 Sunny Prakash",
                win: {
                    target: "nsis",
                    icon: "./src/assets/icon.ico"
                },
                nsis: {
                    oneClick: false,
                    allowToChangeInstallationDirectory: true,
                    installerIcon: "./src/assets/icon.ico",
                    installerHeaderIcon: "./src/assets/icon.ico",
                    installerSidebar: "./src/assets/sidebar.bmp",
                    uninstallerIcon: "./src/assets/icon.ico",
                    uninstallDisplayName: "Ecslate 0.6.1"
                }
            }
        }
    }
}