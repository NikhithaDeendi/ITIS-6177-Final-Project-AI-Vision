## Azure AI Vision - Image Analysis


### List of Contents

- Overview
- Tools Utilized
- Onboarding
- Sample Response
- Endpoints
- Response Codes
- Limitations


## Overview

This documentation presents an API designed to facilitate Image Analysis using Microsoft Azure Cognitive AI services, available through Azure Cognitive Services. The primary goal is to enhance accessibility through advanced image analysis capabilities.

## Tools Utilized

* Microsoft Azure Cognitive AI
* Node.js
* Swagger UI
* image-size
* Multer
* Express
* Axios


## Onboarding

* Documentation and API Usage *

Explore the API endpoints and their functionalities through the Swagger Documenation : (http://localhost:3000/docs/). This interface provides a comprehensive overview of available endpoints and their respective operations.

## Swagger Documenation endpoint: (http://localhost:3000/docs/)


### Steps
1. Open Postman and create a new request.

2. Enter the base URL along with the required . Change the request type to POST.


3. Navigate to Body and select *form-data*. Now add the key as "image" and change type to *File* from *Text*


4. Click on *Select Files* under Value field and select an image (JPG, PNG, GIF, or BMP) from your system. Once selected, hit the Send button.


5. And voila! You've got your first API response! 🎉



### Sample Response
**endpoint: http://localhost:3000/caption-generator**
```json
{
    "caption": {
        "text": "a cartoon of a couple of red tags",
        "confidence": 0.5857794284820557
    },
    "metadata": {
        "width": 750,
        "height": 350
    }
}
```

## Endpoints

**URL structure:**

localhost:3000/<endpoint-here>
    
POST      -> Endpoint =  /identify-colors       -> Description: Identify bright colors in an image.
POST      -> Endpoint =  /read-text             -> Description: Read all text from an image. 
POST      -> Endpoint =  /caption-generator     -> Description: Generate caption for an image. 
POST      -> Endpoint =  /tags-generator        -> Description: Generate tags for an image. 



 ## Limitations
Ensure compliance with the following limitations:
- Supported file formats: JPG, PNG, GIF, BMP.
- Image resolution: 50x50 pixels to 16,000x16,000 pixels.
- File size: Up to 4 megabytes (MB).
- Limited API calls due to Azure free tier restrictions.


 ## Response Codes
200:  OK           -> Successful API call.
400:  Bad Request  -> File-related issues or incorrect parameters.
404:  Not Found    -> File not provided or incorrect endpoint.


## Thank you Professor! One of the intersting course in my masters.
