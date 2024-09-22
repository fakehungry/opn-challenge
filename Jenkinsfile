pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = 'e176cc4d-5b70-4f10-89fa-2d19173a4168'
        NETLIFY_TOKEN = credentials('netlify-token')
    }

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
                    yarn test --coverage
                '''
            }
        }

        stage('Deploy') {
            agent {
              docker {
                image 'node:18-alpine'
                reuseNode true
              }
            }
            steps {
                sh '''
                    yarn add netlify-cli
                    node_modules/.bin/netlify status
                    node_modules/.bin/netlify deploy --dir=storybook-static --prod
                '''
            }
        }
    }

    post {
      always {
        junit 'junit.xml'
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'coverage/lcov-report', reportFiles: 'index.html', reportName: 'Coverage Report', reportTitles: '', useWrapperFileDirectly: true])
      }
    }
}
