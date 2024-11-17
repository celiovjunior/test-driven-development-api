<!-- docker run \
 --name postgres \
 -e POSTGRES_USER=user \
 -e POSTGRES_PASSWORD=password \
 -e POSTGRES_DB=pizzeria \
 -p 5432:5432 \
 -d \
 postgres -->

<!-- docker run \
 --name adminer \
 -p 8080:8080 \
 --link postgres:postgres \
 -d \
 adminer -->
