pipeline {
    agent any

    stages {
        stage('Hello') {
            agent {
              docker {
                image 'node:18-alpine'
                reuseNode true
              }
            }
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    yarn ci
                    yarn client
                    ls -la
                '''
            }
        }
    }
}
