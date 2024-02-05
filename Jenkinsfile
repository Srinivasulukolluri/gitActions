// Function to define build and test steps
def buildAndTest(buildName, installCommand, testCommand) {
    dir("path/to/${buildName}") {
        script {
            // Ensure the Node.js installation is available
            def nodeJSHome = tool 'NodeJS'
            // Include Node.js binaries in the PATH
            env.PATH = "${nodeJSHome}/bin:${env.PATH}"

            // Run installCommand (npm install) and testCommand (npm run ...)
            sh "${installCommand}"
            sh "${testCommand}"
        }
    }
}

// Function to publish MochaAwesome reports
def publishMochaAwesomeReports(reportPath) {
    script {
        // Archive the reports so they can be accessed later
        archiveArtifacts "${reportPath}/**/*"

        // Publish HTML reports
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, includes: "${reportPath}/**/*.html", reportDir: reportPath, reportFiles: 'index.html'])
    }
}

pipeline {
    agent any

    stages {
        stage('Build and Test') {
            steps {
                script {
                    // Run build and test steps based on branch
                    if (env.BRANCH_NAME == 'main') {
                        buildAndTest('main', 'npm install cypress', 'npm run test')
                    } else if (env.BRANCH_NAME == 'branch1') {
                        buildAndTest('branch1', 'npm install', 'npm run run:twotests')
                    } else if (env.BRANCH_NAME == 'branch2') {
                        buildAndTest('branch2', 'npm install', 'npm run newTest')
                    }
                    // Add more branches and build configurations as needed
                }
            }
        }

        stage('Publish MochaAwesome Reports') {
            steps {
                script {
                    publishMochaAwesomeReports('build') // Adjust the path accordingly
                }
            }
        }

        // Add more stages if necessary
    }
}
