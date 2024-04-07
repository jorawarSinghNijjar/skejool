#
# Build
#
FROM gradle:7.3.3-jdk17 AS build
COPY . /home/app
WORKDIR /home/app
# COPY build.gradle /home/app/
# COPY gradlew /home/app/
RUN chmod +x ./gradlew
RUN ./gradlew build

#
# Package stage
#
FROM eclipse-temurin:17-jdk-jammy
COPY --from=build /home/app/build/libs/skejool-0.0.1-SNAPSHOT.jar /home/app/
EXPOSE 80
ENTRYPOINT ["java","-jar","/home/app/skejool-0.0.1-SNAPSHOT.jar"]