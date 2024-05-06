## Azure AI Vision - Image Analysis


### List of Contents

- [Overview?](#overview)
- [Tools used](#tools-used)
- [Onboarding](#onboarding)
- [Sample Response](#sample-response)
- [Endpoints](#endpoints)
- [Response Codes](#response-codes)
- [Limitations](#limitations)
- [Thank you!](#if-youve-reached-till-here-youre-awesome-thanks-for-taking-the-time-to-use-my-api-🙌🏻)  

## Overview

This documentation presents an API designed to facilitate image analysis using Microsoft Azure Cognitive AI services, available through Azure Cognitive Services. The primary goal is to enhance accessibility through advanced image analysis capabilities.

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

## Swagger Documenation : (http://localhost:3000/docs/)


### Prerequisites
- [Postman](https://www.postman.com/)
- That's it! :D

### Steps
1. Open Postman and create a new request.

![Postman New Request](https://i.imgur.com/HD7vEjA.png)

2. Enter the base URL along with the required [endpoint](#endpoints). Change the request type to POST.

![Postman Change Request Type](https://i.imgur.com/vh5q66Q.png)

3. Navigate to Body and select *form-data*. Now add the key as "image" and change type to *File* from *Text*

![Postman Change File Type](https://i.imgur.com/t1I5I6v.png)

4. Click on *Select Files* under Value field and select an image (JPG, PNG, GIF, or BMP) from your system. Once selected, hit the Send button.

![Vibing Cat](https://s5.gifyu.com/images/SiWE9.gif)

5. And voila! You've got your first API response! 🎉

![Voila!](https://i.imgur.com/Xnjreoy.png)

You can achieve the same result using CLI with the help of [cURL](https://curl.se/) like this:
```
curl -X 'POST' \
  'http://159.65.225.73:3000/generate-caption' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'image=@/Users/aravind/Downloads/cat_compressed.gif;type=image/gif'
```
Just make sure to change the image path to that in your system and modify the type accordingly.

### Sample Response
```json
{
    "caption": {
        "text": "a cat lying on a blanket",
        "confidence": 0.7403799891471863
    },
    "metadata": {
        "width": 480,
        "height": 320
    }
}
```

## Endpoints

**URL structure:** 

    159.65.225.73:3000/<endpoint-here>

| Method | Endpoint | Description |
| :--------: | :------- | :------- |
| POST | /detect-colors | Detect dominant colors in an image. |
| POST | /detect-categories | Detect categories based on an image. |
| POST | /detect-objects | Detect objects in an image. |
| POST | /generate-caption | Generate caption for an image. |
| POST | /generate-tags | Generate tags for an image. |
| POST | /read-text | Read text from an image. |


## Response Codes

| Code | Type | Description |
| :--------: | :------- | :------- |
| 200 | OK | Congrats! Your API call went through just fine. |
| 400 | Bad Request | There's most likely an issue with the file you uploaded. Please check the limitations section to know more about supported file types. |
| 404 | Not Found | You'll get this error if you didn't send a file with your request. If you did, make sure the key is set to "image". |

## Limitations
- File format must be JPG, PNG, GIF, or BMP.
- Image resolution must be greater than 50x50 pixels and less than 16,000x16,000 pixels.
- File size must be within 4 megabytes (MB).
- Due to the current limitation in Azure free tier, the number of calls is limited to 10 per second.

### If you've reached till here, you're awesome! Thanks for taking the time to use my API 🙌🏻
s