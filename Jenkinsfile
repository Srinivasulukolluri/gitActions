// Function to define build and test steps
def buildAndTest(buildName, installCommand, testCommand) {
    dir("path/to/${buildName}") {
        // Change to the directory for the specific build
        // Perform build steps
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

pipeline {
    agent any

    stages {
        stage('Build and Test') {
            steps {
                script {
                    // Run build and test steps based on branch
                    def branchSpecificBuild = [
                        'main': ['npm install', 'npm run test'],
                        'branch1': ['npm install', 'npm run run:twotests'],
                        'branch2': ['npm install', 'npm run newTest']
                        // Add more branches and build configurations as needed
                    ]

                    def branchCommands = branchSpecificBuild[env.BRANCH_NAME]
                    if (branchCommands) {
                        buildAndTest(env.BRANCH_NAME, branchCommands[0], branchCommands[1])
                    }
                }
            }
        }

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
    script {
        // Archive the reports so they can be accessed later
        archiveArtifacts "${reportPath}/**/*"

        // Publish HTML reports
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, includes: "${reportPath}/**/*.html", reportDir: reportPath, reportFiles: 'index.html'])
    }
}
