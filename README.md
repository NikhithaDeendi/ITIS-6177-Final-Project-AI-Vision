## Azure AI Vision - Image Analysis


### List of Contents
- [Overview](#overview)
- [Tools Utilized](#tools-utilized)
- [Onboarding](#onboarding)
- [Sample Response](#sample-response)
- [Endpoints](#endpoints)
- [Limitations](#limitations)
- [Response Codes](#response-codes)


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

![Swagger Image](https://github.com/NikhithaDeendi/ITIS-6177-Final-Project-AI-Vision/blob/main/swagger%20image.png?raw=true)



### Steps
1. Open Postman and create a new request.
   ![Step 0 Image](https://github.com/NikhithaDeendi/ITIS-6177-Final-Project-AI-Vision/blob/main/step-0.png?raw=true)

2. Change the request from GET to POST. Enter the URL Endpoint(Example: http://localhost:3000/caption-generator)
   ![Step 1 Image](https://github.com/NikhithaDeendi/ITIS-6177-Final-Project-AI-Vision/blob/main/step-1.png?raw=true)

3. Go to Body and select *form-data* from the options and add the key as "image" and change type to *File*. Select an image (JPG, PNG, GIF, or BMP) from your system. Click on SEND.
   ![Step 3 Image](https://github.com/NikhithaDeendi/ITIS-6177-Final-Project-AI-Vision/blob/main/step-3.png?raw=true)
   
4. And yes! We have got our firt API response.
   ![Step 4 Image](https://github.com/NikhithaDeendi/ITIS-6177-Final-Project-AI-Vision/blob/main/step-4.png?raw=true)

5. Lets compare/look how the image and generated caption is
   ![Output Image](https://github.com/NikhithaDeendi/ITIS-6177-Final-Project-AI-Vision/blob/main/output.png?raw=true)



### Sample Response
**endpoint: http://localhost:3000/caption-generator**
```json
{
    "caption": {
        "text": "a cartoon rabbit sitting on a white background",
        "confidence": 0.7668482065200806
    },
    "metadata": {
        "width": 187,
        "height": 270
    }
}
```

## Endpoints

**URL structure:**

localhost:3000/<endpoint-here>

| Method | Endpoint | Description |
| :--------: | :------- | :------- |
    
| POST | /identify-colors | Idenfify bright colors in an image. |
| POST | /read-text | Read all text from an image. |
| POST | /caption-generator | Generate caption for an image. |
| POST | /tags-generator | Generate tags for an image. |



 ## Limitations
Ensure compliance with the following limitations:
- Supported file formats: JPG, PNG, GIF, BMP.
- Image resolution: 50x50 pixels to 16,000x16,000 pixels.
- File size: Up to 4 megabytes (MB).
- Limited API calls due to Azure free tier restrictions.


 ## Response Codes
 | Status Code | Error Type | Description |
| :--------: | :------- | :------- |
| 200 | OK | Successful API call |
| 400 | Bad Request | File-related issues or incorrect parameters. |
| 404 | Not Found | File not provided or incorrect endpoint. |

## Thank you Professor! One of the intersting course in my masters.
