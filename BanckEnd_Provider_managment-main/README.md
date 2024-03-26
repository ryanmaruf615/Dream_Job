# PROVIDER MANAGEMENT COMPONENT  (PMC) 
## Contains
### Important URLs
#### Agreement API URL


 ```
 https://dg4gi3uw0m2xs.cloudfront.net/docs#/agreement
```
#### Material Group API URL

```
https://dg4gi3uw0m2xs.cloudfront.net/docs#/materialGroup
```
#### Provider API URL
```
https://dg4gi3uw0m2xs.cloudfront.net/docs#/provider
```
### How To Use Our API
#### API For Agreement(Post Request)
![image](https://github.com/imonbhuiya2/Provider_managment/assets/148837357/fcc0ade7-26b1-428f-a7bc-2826b34d480d)

Format is below for the POST request:
```
{
  "title": "Software Engineer",
  "position": "Software Engineer",
  "description": "Greeting from TCS Walk In drive (Java SpringBoot Developer)",
  "salary": "1000",
  "providerName": "provider A",
  "providerEmail": "provider@gmail.com",
  "technologyLevel": "common",
  "role": "Junior",
  "materialGroup": "Software",
  "teamMember": "5",
  "skill": "Spring,JWt",
  "jobStartDate": "12/12/24",
  "jobEndDate": "12/12/24",
  "startContractDate": "12/12/24",
  "endContractDate": "12/12/24"
}
```
#### API For Agreement(GET Request)
![agg](https://github.com/imonbhuiya2/Provider_managment/assets/148837357/7ae58c37-d5dc-4abc-90a9-eb47885a0490)
Format is below for the GET request:
```
{
  "id": 22,
  "title": "Software Engineer",
  "position": "Software Engineer",
  "description": "Greeting from TCS Walk In drive (Java SpringBoot Developer)",
  "skill": "Spring,JWt",
  "salary": "1000",
  "providerName": "provider A",
  "providerEmail": "provider@gmail.com",
  "technologyLevel": "common",
  "materialGroup": "Software",
  "teamMember": "5",
  "role": "Junior",
  "status": "pending",
  "cycle": "2",
  "review": null,
  "comment": null,
  "jobStartDate": "12/12/24",
  "jobEndDate": "12/12/24",
  "startContractDate": "12/12/24",
  "endContractDate": "12/12/24",
  "createdAt": "2024-01-27T20:16:08.964Z",
  "updatedAt": "2024-01-27T20:16:08.964Z"
}
```
#### Material group(POST Request)
![material group](https://github.com/imonbhuiya2/Provider_managment/assets/148837357/2d927a93-118f-4c98-b9ce-1871a9a99cf4)
Format is below for the GET request:
```
{
  "name": "string",
  "description": "string",
  "price": "string"
}

```
#### Material group(GET Request)
![material group post](https://github.com/imonbhuiya2/Provider_managment/assets/148837357/4e9d0ac6-62cc-4901-9f91-b0583a9a831a)
Format is below for the POST request:
```
{
  "id": 7,
  "name": "string",
  "description": "string",
  "price": "string",
  "createdAt": "2024-01-27T20:21:28.052Z",
  "updatedAt": "2024-01-27T20:21:28.052Z"
}
```
#### Porvider (POST Request)
![provider post](https://github.com/imonbhuiya2/Provider_managment/assets/148837357/c3389ae0-7f18-4181-92f7-a6a8ab254f64)
Format is below for the POST request:
```
{
  "name": "Jhon",
  "address": "Kurigram",
  "phone": "0123456789",
  "rule": "Admin",
  "role": "Manager",
  "email": "jhon@gmail.com",
  "contactName": "jhon",
  "masterAgreementType": "common",
  "existSince": "12/12/24",
  "validFrom": "12/12/24",
  "validUntil": "12/12/24"
}
```
#### Porvider (GET Request)
![provider get request](https://github.com/imonbhuiya2/Provider_managment/assets/148837357/9347c93e-ddc8-4fdd-85aa-e82d3775d5d5)
Format is below for the GET request:
```
{
    "id": 3,
    "name": "Jhon",
    "address": "Kurigram",
    "phone": "0123456789",
    "rule": "Admin",
    "contactName": "jhon",
    "role": "Manager",
    "email": "jhon@gmail.com",
    "existSince": "12/12/24",
    "validFrom": "12/12/24",
    "validUntil": "12/12/24",
    "masterAgreementType": "common",
    "review": "0.00",
    "createdAt": "2024-01-27T20:29:19.216Z",
    "updatedAt": "2024-01-27T20:29:19.216Z"
  }
```
