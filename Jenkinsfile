pipeline {
  agent any
  stages {
    stage('Build') {
      agent {
        node {
          label 'v10'
        }
        
      }
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'ng test --code-coverage --watch=false'
      }
    }
  }
}