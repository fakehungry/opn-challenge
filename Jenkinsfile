pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
              docker {
                image 'node:18-alpine'
                reuseNode true
              }
            }
            steps {
                cleanWs()
                sh '''
                    yarn install --frozen-lockfile
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                    yarn test
                '''
            }
        }
    }
}
