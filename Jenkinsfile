pipeline {
    agent any

    environment {
        IMAGE_NAME = "ghcr.io/abdulmannanbutt03/ecommerce-devops"
        REGISTRY   = "ghcr.io"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Run Tests') {
            steps {
                sh 'node --version'
                sh 'npm ci'
                sh 'npm test -- --watchAll=false --passWithNoTests'
            }
        }

        stage('Build and Push Image') {
            when {
                allOf {
                    branch 'main'
                    not { changeRequest() }
                }
            }
            steps {
                sh '''
                    docker build -t "$IMAGE_NAME:${GIT_COMMIT}" .
                    docker push "$IMAGE_NAME:${GIT_COMMIT}"
                '''
            }
        }

        stage('Update Image Tag for Argo CD') {
            when {
                allOf {
                    branch 'main'
                    not { changeRequest() }
                }
            }
            steps {
                sh """
                    sed -i "s/newTag: .*/newTag: ${GIT_COMMIT}/" \
                        k8s/overlays/prod/kustomization.yaml

                    git config user.name  "jenkins-bot"
                    git config user.email "jenkins-bot@users.noreply.github.com"

                    git add k8s/overlays/prod/kustomization.yaml

                    git diff --cached --quiet \
                        && echo "Nothing to commit" \
                        || git commit -m "ci: deploy ${GIT_COMMIT}"

                    git push origin HEAD:main
                """
            }
        }
    }

    post {
        success { echo "Pipeline completed successfully." }
        failure  { echo "Pipeline failed — check the logs above." }
    }
}
