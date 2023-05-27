pipeline {
    agent any
    stages {
        stage('build') {
            steps {
               bat 'powershell -command "Stop-WebAppPool -Name pcp.kareinfinity.com"'              
               bat "npm i && npm run build-prod"
            }
        }
    }
    post {
        failure {
          mail to: "${devopsAdmin}",
          subject: 'Failed PCP UI Pipeline',
          body: 'The pipeline has failed. Please check the console output for more details.'
        }
    }
}
