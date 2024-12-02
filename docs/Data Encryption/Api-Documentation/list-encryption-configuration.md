---
sidebar_position: 18
---

# List Encryption configuration


#  JSON Request:
```jsx title

query Crypto {
    Crypto {
        EncryptionItems {
            Fetch(
                in: {
                    Page: 1,
                    Limit: 10
                }
            ) {
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
                        Name
                        Method
                        CreatedAt
                        CreatedBy
                        CreatedByName
                        UpdatedAt
                        UpdatedBy
                        UpdatedByName
                        Param {
                            Key
                            Type
                        }
                    }
                    Filters {
                        Column
                        Keyword
                    }
                }
                Status {
                    IsSuccess
                    Message
                    MessageCode
                    StatusCode
                    ErrDetails
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
        "Crypto": {
            "EncryptionItems": {
                "Fetch": {
                    "Data": {
                        "Page": 1,
                        "Limit": 10,
                        "Sort": "",
                        "SortBy": "",
                        "LastPage": 1,
                        "Keyword": "",
                        "TotalRows": 10,
                        "Items": [
                            {
                                "ID": "3b695fa2-266e-4d10-9756-1b30565873ff",
                                "Name": "KTP",
                                "Method": "RSA1024",
                                "CreatedAt": "2024-11-01T07:15:19Z",
                                "CreatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "CreatedByName": "iqbal",
                                "UpdatedAt": "2024-11-01T07:15:19Z",
                                "UpdatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "UpdatedByName": "iqbal",
                                "Param": null
                            },
                            {
                                "ID": "2badb874-677d-42ab-8fb9-b3d5d012f658",
                                "Name": "KTP",
                                "Method": "RSA1024",
                                "CreatedAt": "2024-11-01T07:14:46Z",
                                "CreatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "CreatedByName": "iqbal",
                                "UpdatedAt": "2024-11-01T07:14:46Z",
                                "UpdatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "UpdatedByName": "iqbal",
                                "Param": null
                            },
                            {
                                "ID": "21b0a3ee-77be-4768-bf2e-f47848333991",
                                "Name": "KTP",
                                "Method": "RSA1024",
                                "CreatedAt": "2024-11-01T07:07:39Z",
                                "CreatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "CreatedByName": "iqbal",
                                "UpdatedAt": "2024-11-01T07:07:39Z",
                                "UpdatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "UpdatedByName": "iqbal",
                                "Param": null
                            },
                            {
                                "ID": "ee309cfb-5184-4eb9-a708-989aaf1f0793",
                                "Name": "KTP",
                                "Method": "RSA1024",
                                "CreatedAt": "2024-11-01T06:38:59Z",
                                "CreatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "CreatedByName": "iqbal",
                                "UpdatedAt": "2024-11-01T06:38:59Z",
                                "UpdatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "UpdatedByName": "iqbal",
                                "Param": null
                            },
                            {
                                "ID": "0b51982c-bd71-47f0-b567-2764eb6b50ee",
                                "Name": "tes",
                                "Method": "RSA1024",
                                "CreatedAt": "2024-10-31T09:16:56Z",
                                "CreatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "CreatedByName": "iqbal",
                                "UpdatedAt": "2024-10-31T09:16:56Z",
                                "UpdatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "UpdatedByName": "iqbal",
                                "Param": null
                            },
                            {
                                "ID": "de364352-c7b2-4f12-9fdc-e5c2065f9904",
                                "Name": "tes",
                                "Method": "RSA1024",
                                "CreatedAt": "2024-10-31T09:03:48Z",
                                "CreatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "CreatedByName": "iqbal",
                                "UpdatedAt": "2024-10-31T09:03:48Z",
                                "UpdatedBy": "0e883aee-33e4-4819-a680-cffc078f8f37",
                                "UpdatedByName": "iqbal",
                                "Param": null
                            },
                            {
                                "ID": "3bec9c18-0fca-4c24-bad8-b64ec7c9bf66",
                                "Name": "tes",
                                "Method": "RSA1024",
                                "CreatedAt": "2024-10-31T07:38:18Z",
                                "CreatedBy": "",
                                "CreatedByName": "",
                                "UpdatedAt": "2024-10-31T07:38:18Z",
                                "UpdatedBy": "",
                                "UpdatedByName": "",
                                "Param": null
                            },
                            {
                                "ID": "e1fe2c23-6afb-434b-93c2-b0ab6da7f0b4",
                                "Name": "tes",
                                "Method": "RSA1024",
                                "CreatedAt": "2024-10-31T07:34:24Z",
                                "CreatedBy": "",
                                "CreatedByName": "",
                                "UpdatedAt": "2024-10-31T07:34:24Z",
                                "UpdatedBy": "",
                                "UpdatedByName": "",
                                "Param": null
                            },
                            {
                                "ID": "147039bc-e2cb-400e-ab1e-d8061b2a1d48",
                                "Name": "tes",
                                "Method": "RSA1024",
                                "CreatedAt": "2024-10-31T07:24:43Z",
                                "CreatedBy": "",
                                "CreatedByName": "",
                                "UpdatedAt": "2024-10-31T07:24:43Z",
                                "UpdatedBy": "",
                                "UpdatedByName": "",
                                "Param": null
                            },
                            {
                                "ID": "5a132228-21a8-4809-b004-6610fa4e37aa",
                                "Name": "tes",
                                "Method": "RSA1024",
                                "CreatedAt": "2024-10-31T07:23:40Z",
                                "CreatedBy": "",
                                "CreatedByName": "",
                                "UpdatedAt": "2024-10-31T07:23:40Z",
                                "UpdatedBy": "",
                                "UpdatedByName": "",
                                "Param": null
                            }
                        ],
                        "Filters": null
                    },
                    "Status": {
                        "IsSuccess": true,
                        "Message": "request successfully filled",
                        "MessageCode": "",
                        "StatusCode": 0,
                        "ErrDetails": null
                    }
                }
            }
        }
    }
}
```