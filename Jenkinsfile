// Function to define build and test steps
def buildAndTest(buildName, installCommand, testCommand) {
    stage("Build and Test - ${buildName}") {
        steps {
            script {
                // Ensure the Node.js installation is available
                def nodeJSHome = tool 'NodeJS'
                // Include Node.js binaries in the PATH
                env.PATH = "${nodeJSHome}/bin:${env.PATH}"

                // Change to the directory for the specific build
                dir("path/to/${buildName}") {
                    // Run installCommand (npm install) and testCommand (npm run ...)
                    sh "${installCommand}"
                    sh "${testCommand}"
                }
            }
        }
    }
}

pipeline {
    agent any

    stages {
        buildAndTest('main', 'npm ci', 'npm run test-main')
        buildAndTest('feature1', 'npm ci', 'npm run test-feature1')
        buildAndTest('feature2', 'npm ci', 'npm run test-feature2')

        stage('Publish MochaAwesome Reports') {
            steps {
                script {
                    publishMochaAwesomeReports('/Users/srinivasulukolluri/Documents/cypressActions/cypress/reports/html/') // Adjust the path accordingly
                }
            }
        }

        // Add more stages if necessary
    }
}

// Function to publish MochaAwesome reports
def publishMochaAwesomeReports(reportPath) {
    stage('Publish MochaAwesome Reports') {
        steps {
            script {
                // Archive the reports so they can be accessed later
                archiveArtifacts "${reportPath}/**/*"

                // Publish HTML reports
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, includes: "${reportPath}/**/*.html", reportDir: reportPath, reportFiles: 'index.html'])
            }
        }
    }
}
