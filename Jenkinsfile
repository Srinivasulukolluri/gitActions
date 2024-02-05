// Function to define build and test steps
def buildAndTest(installCommand, testCommand) {
    // Ensure the Node.js installation is available
    def nodeJSHome = tool 'NodeJS'
    // Include Node.js binaries in the PATH
    env.PATH = "${nodeJSHome}/bin:${env.PATH}"

    // Run installCommand (npm install) and testCommand (npm run ...)
    sh installCommand
    sh testCommand
}

pipeline {
    agent any

    stages {
        stage('Build and Test') {
            steps {
                script {
                    // Run build and test steps based on branch
                    def installCmd = 'npm install cypress'
                    def testCmd = ''

                    if (env.BRANCH_NAME == 'main') {
                        testCmd = 'npm run test'
                    } else if (env.BRANCH_NAME == 'branch1') {
                        testCmd = 'npm run run:twotests'
                    } else if (env.BRANCH_NAME == 'branch2') {
                        testCmd = 'npm run newTest'
                    }
                    
                    buildAndTest(installCmd, testCmd)
                }
            }
        }

        stage('Publish MochaAwesome Reports') {
            steps {
                script {
                    echo "Workspace contents:"
                    sh 'ls -R ${WORKSPACE}'
                    echo "Build directory contents:"
                    sh 'ls -R ${WORKSPACE}/path/to/build'
                    publishMochaAwesomeReports('path/to/build')
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
