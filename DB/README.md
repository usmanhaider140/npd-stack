# To create our image by typing this command in the terminal

docker build -t my-postgres-db ./

## We can run it as a container by doing the following

    `docker run -d --name my-postgresdb-container -p 5432:5432 my-postgres-db`

## In case you want to remove images you can run this command

    `docker image rm 'nameOfTheImage'`
