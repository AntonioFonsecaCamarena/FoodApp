FROM openjdk:8-jdk-alpine
#MAINTAINER experto.com
VOLUME /tmp
EXPOSE 8080
ADD target/foodapp-0.0.1-SNAPSHOT.jar foodapp.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/foodapp.jar"]