## express app

Access with browser http://localhost:8080

I created the following automation. 
- Once code is psuhed to this repository and merged with main branch. 
- Automation kicks in and does the following
    - Creates docker image 
    - Image gets published to my public Docker hub 
    - Image name is benjaminsuljic82/express-app:latest
    - Once deployed to Docker Hub automation connects to my Contabo VPS
    - Pulls latest image from benjaminsuljic82/express-app:latest
    - Stops currently running container express-app
    - Starts new express-app and exposes port 8080 