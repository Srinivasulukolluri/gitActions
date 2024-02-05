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

            // Ensure the build directory exists
            dir("${WORKSPACE}/path/to/build") {
                // Run build and test steps
                buildAndTest(installCmd, testCmd)
            }
        }
    }
}
