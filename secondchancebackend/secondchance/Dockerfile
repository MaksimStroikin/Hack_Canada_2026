FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY . /workspace/app
WORKDIR /workspace/app
RUN chmod +x ./gradlew
RUN ./gradlew build -x test
ENTRYPOINT ["java","-jar","build/libs/secondchance-0.0.1-SNAPSHOT.jar"]
