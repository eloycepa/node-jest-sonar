const scanner = require("sonarqube-scanner")

scanner(
    {
        serverUrl: process.env.SONAR_HOST_URL,
        token: process.env.SONAR_LOGIN,
        options: {
            "sonar.projectName": "NodeTest",
            "sonar.projectDescription": "Example Node Test App",
            "sonar.sources": "src",
            "sonar.tests": "test",
            "sonar.javascript.coveragePlugin": "lcov",
            "sonar.javascript.lcov.reportPaths": "output/coverage/jest/lcov.info",
        },
    },
    () => process.exit(),
)