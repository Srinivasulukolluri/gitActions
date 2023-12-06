// docker commands 
// docker run -it -v $PWD:/e2e -w /e2e cypress/included:12.3.0 --browser chrome

//docer image info 
//docker run -it -v $PWD:/e2e -w /e2e --entrypoint=cypress cypress/included:12.3.0 info

// install chrome in docker

// docker pull tekfik/chrome   
// docker run --name chrome --privileged -p 3000:3000 -d tekfik/chrome

//docker ps   
// docker ps -a
// docker run -it --entrypoint=cypress cypress/included:12.3.0 info 
// docker images    
// docker pull cypress/included:12.3.0    

//Record the tests
//docker run -it -v $PWD:/e2e -w /e2e \-e CYPRESS_RECORD_KEY cypress/included:3.2.0 --record