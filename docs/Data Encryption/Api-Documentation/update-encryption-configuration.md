---
sidebar_position: 20
---

# Update Encryption configuration


#  JSON Request:
```jsx title

mutation Crypto {
    Crypto {
        EncryptionItems {
            Update(
                in: {
                    ID: "3b695fa2-266e-4d10-9756-1b30565873ff"
                    Name: "DATA KTP"
                    Param: [{ Key: "Nama LengkaP", Type: Alphabet }]
                }
            ) {
                Status {
                    IsSuccess
                    Message
                    MessageCode
                    StatusCode
                    ErrDetails
                }
                Data {
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
                "Update": {
                    "Status": {
                        "IsSuccess": true,
                        "Message": "request successfully filled",
                        "MessageCode": "",
                        "StatusCode": 0,
                        "ErrDetails": null
                    },
                    "Data": {
                        "ID": "3b695fa2-266e-4d10-9756-1b30565873ff",
                        "Name": "DATA KTP",
                        "Method": "",
                        "CreatedAt": "",
                        "CreatedBy": "",
                        "CreatedByName": "",
                        "UpdatedAt": "",
                        "UpdatedBy": "",
                        "UpdatedByName": "",
                        "Param": [
                            {
                                "Key": "Nama LengkaP",
                                "Type": "Alphabet"
                            }
                        ]
                    }
                }
            }
        }
    }
}
```