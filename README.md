# VectorBase 
### A Powerful and Accurate Search Engine for Your Image Collection

Our powerful image search engine uses vector databases to store and search for similar images. Upload your images and use an input image to quickly identify the closest matches. With our app, you can easily organize and search your image collection with speed and accuracy. Try it today!

## Run `DockerCompose` file

```bash
    docker-compose up --build
```

## Create schema for vector databases

```bash
    yarn run create-schema
```

## Add Images 

Add Images to `images` folder with proper `filename` that consist details about image and run the program to index them.
    
```bash
    yarn run add-imgs
```

## Run the program to search for images
Note : Please make sure before searching an same likely image please add you test image in to `test` folder.

```bash
    yarn run search
```
