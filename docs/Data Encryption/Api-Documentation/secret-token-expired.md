---
sidebar_position: 17
---

# Secret token expired


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
                "Encrypt": {
                    "Status": {
                        "IsSuccess": false,
                        "Message": "Token is expired",
                        "MessageCode": "",
                        "StatusCode": 16,
                        "ErrDetails": [
                            "Token is expired"
                        ]
                    },
                    "Data": null
                }
            }
        }
    }
}
```