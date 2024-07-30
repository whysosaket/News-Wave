pipeline{
    agent {
        docker { image 'node:20.16.0-alpine3.20' }
    }
    stages{
        stage("Clean Up"){
            steps{
                deleteDir()
            }
        }
        stage("Clone Repo"){
            steps{
                sh "git clone https://github.com/whysosaket/News-Website.git"
            }
        }
        stage("Build"){
            steps{
                dir("News-Website/frontend"){
                    sh "docker build -t whysosaket/news-frontend:latest ."
                }
                dir("News-Website/Flask-Server"){
                    sh "docker build -t whysosaket/flask-server:latest ."
                }
            }
        }
        stage("Run"){
            steps{
                dir("News-Website"){
                    sh "docker compose up -d"
                }
            }
        }
    }
}