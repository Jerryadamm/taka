---
sidebar_position: 13
---

# Create Encrypt configuration


#  JSON Request:
```jsx title

mutation Crypto {
    Crypto {
        EncryptionItems {
            Store(in: { 
                Name: "KTP", 
                Method: RSA1024, 
                Param:  [{
                    Key:"Nama Lengkap",
                    Type:Alphabet
                },{
                    Key:"Alamat",
                    Type:Alphanumeric
                }]
            }) {
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
                "Store": {
                    "Status": {
                        "IsSuccess": true,
                        "Message": "request successfully filled",
                        "MessageCode": "",
                        "StatusCode": 0,
                        "ErrDetails": null
                    },
                    "Data": {
                        "ID": "21b0a3ee-77be-4768-bf2e-f47848333991",
                        "Name": "KTP",
                        "Method": "RSA1024",
                        "CreatedAt": "",
                        "CreatedBy": "",
                        "CreatedByName": "",
                        "UpdatedAt": "",
                        "UpdatedBy": "",
                        "UpdatedByName": "",
                        "Param": [
                            {
                                "Key": "Nama Lengkap",
                                "Type": "Alphabet"
                            },
                            {
                                "Key": "Alamat",
                                "Type": "Alphanumeric"
                            }
                        ]
                    }
                }
            }
        }
    }
}
```