---
sidebar_position: 11
---

# List token secret


#  JSON Request:
```jsx title

query Auth {
    Auth {
        APIKeys {
            Fetch(in: { Limit: 10, Page: 1 }) {
                Status {
                    IsSuccess
                    Message
                    MessageCode
                    StatusCode
                    ErrDetails
                }
                Data {
                    Page
                    Limit
                    Sort
                    SortBy
                    LastPage
                    Keyword
                    TotalRows
                    Items {
                        ID
                        Token
                        ExpTime
                        CreatedAt
                        CreatedBy
                        CreatedByName
                        UpdatedAt
                        UpdatedBy
                        UpdatedByName
                    }
                    Filters {
                        Column
                        Keyword
                    }
                }
            }
        }
    }
}
```


# Response:
```jsx titles
{
    "data": {
        "Auth": {
            "APIKeys": {
                "Fetch": {
                    "Status": {
                        "IsSuccess": true,
                        "Message": "request successfully filled",
                        "MessageCode": "",
                        "StatusCode": 0,
                        "ErrDetails": null
                    },
                    "Data": {
                        "Page": 1,
                        "Limit": 10,
                        "Sort": "",
                        "SortBy": "",
                        "LastPage": 0,
                        "Keyword": "",
                        "TotalRows": 0,
                        "Items": [
                            {
                                "ID": "7d8906b0-d63c-4376-9935-484ca2f2c95e",
                                "Token": "63f******************",
                                "ExpTime": "2024-11-03T06:56:27Z",
                                "CreatedAt": "2024-11-01T06:56:27Z",
                                "CreatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "CreatedByName": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "UpdatedAt": "2024-11-01T06:56:27Z",
                                "UpdatedBy": "",
                                "UpdatedByName": ""
                            },
                            {
                                "ID": "3da9a8c0-96f9-4366-8127-5a5f5409c1ab",
                                "Token": "9b6******************",
                                "ExpTime": "2024-11-03T06:56:24Z",
                                "CreatedAt": "2024-11-01T06:56:24Z",
                                "CreatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "CreatedByName": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "UpdatedAt": "2024-11-01T06:56:24Z",
                                "UpdatedBy": "",
                                "UpdatedByName": ""
                            },
                            {
                                "ID": "d8fd51e2-f9d1-4398-abda-cff83b0734fa",
                                "Token": "9c7******************",
                                "ExpTime": "2024-11-03T06:40:58Z",
                                "CreatedAt": "2024-11-01T06:40:58Z",
                                "CreatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "CreatedByName": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "UpdatedAt": "2024-11-01T06:40:58Z",
                                "UpdatedBy": "",
                                "UpdatedByName": ""
                            },
                            {
                                "ID": "ebd67b6f-88b8-4a6c-81fa-fd867911af4b",
                                "Token": "ac8******************",
                                "ExpTime": "2024-11-02T07:20:26Z",
                                "CreatedAt": "2024-10-31T07:20:26Z",
                                "CreatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "CreatedByName": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "UpdatedAt": "2024-10-31T07:20:26Z",
                                "UpdatedBy": "",
                                "UpdatedByName": ""
                            },
                            {
                                "ID": "7143bfb5-3b6d-49ee-8e09-c8334a707333",
                                "Token": "835******************",
                                "ExpTime": "2102-03-08T10:26:32Z",
                                "CreatedAt": "2024-10-31T07:14:14Z",
                                "CreatedBy": "84fbac8f-f536-4f0e-be15-6be6a2c4a5f4",
                                "CreatedByName": "84fbac8f-f536-4f0e-be15-6be6a2c4a5f4",
                                "UpdatedAt": "2024-10-31T07:14:14Z",
                                "UpdatedBy": "",
                                "UpdatedByName": ""
                            },
                            {
                                "ID": "122bb7d6-7ad3-445a-a77d-792aad86a6ce",
                                "Token": "c32******************",
                                "ExpTime": "2102-03-08T10:25:57Z",
                                "CreatedAt": "2024-10-31T07:13:38Z",
                                "CreatedBy": "84fbac8f-f536-4f0e-be15-6be6a2c4a5f4",
                                "CreatedByName": "84fbac8f-f536-4f0e-be15-6be6a2c4a5f4",
                                "UpdatedAt": "2024-10-31T07:13:38Z",
                                "UpdatedBy": "",
                                "UpdatedByName": ""
                            }
                        ],
                        "Filters": null
                    }
                }
            }
        }
    }
}
```