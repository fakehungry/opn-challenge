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
                sh '''
                    yarn install --frozen-lockfile
                '''
            }
        }

        stage('Test') {
            agent {
              docker {
                image 'node:18-alpine'
                reuseNode true
              }
            }
            steps {
                sh '''
                    yarn jest --ci --reporters=default --reporters=jest-junit
                '''
            }
        }
    }

    post {
      always {
        junit '/junit.xml'
      }
    }
}
