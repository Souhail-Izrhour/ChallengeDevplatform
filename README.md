# Engineering Challenge — From Code to Container to Infrastructure

## 🚀 Project Purpose
This project is a collaborative DevOps engineering challenge designed to establish a professional development lifecycle (SDLC) for a Node.js microservice. It covers automated testing, continuous integration (CI), containerization (Docker), package registry publishing (GHCR), and infrastructure validation (Terraform).

## 🏛️ Architecture & Workflow
The project follows a strict branching strategy and peer-review workflow:
- **`main`**: Protected branch, production-ready code. Only accepts approved PRs with successful CI.
- **`feature/...`**: Used for new feature development (Issues #1 to #4).
- **`fix/...`**: Used for bug fixes and quality-gate demonstrations.
- **`chore/...`**: Used for infrastructure and CI pipeline configurations.

```text
[Issues / PRs] ---> [GitHub Actions CI] ---> [Docker Build & GHCR] ---> [Terraform Validation]

🛠️ Local Setup & Installation
Clone the repository:

Bash
git clone [https://github.com/Souhail-Izrhour/ChallengeDevplatform.git](https://github.com/Souhail-Izrhour/ChallengeDevplatform.git)
cd ChallengeDevplatform
Install dependencies:

Bash
npm install
Run the application locally:

Bash
npm start
🧪 Tests
The project uses the native Node.js test runner. To execute the automated test suite:

Bash
npm test
🐳 Docker Usage
To build and run the application inside a container locally:

Build the image:

Bash
docker build -t devops-platform-challenge .
Run the container:

Bash
docker run --rm -p 3000:3000 devops-platform-challenge
🔄 CI/CD Pipelines (GitHub Actions)
Node CI (node-ci.yml): Automatically installs dependencies and runs npm test on every push and pull request.

Docker CI (docker.yml): Builds the container image and pushes it securely to the GitHub Container Registry (GHCR).

Terraform CI (terraform.yml): Validates syntax and configuration using terraform fmt -check, terraform init, and terraform validate.

📋 Useful Commands
npm test : Run automated test suite

docker build -t devops-platform-challenge . : Build Docker image

terraform -chdir=terraform fmt -check : Check Terraform formatting

terraform -chdir=terraform validate : Validate Terraform configuration
