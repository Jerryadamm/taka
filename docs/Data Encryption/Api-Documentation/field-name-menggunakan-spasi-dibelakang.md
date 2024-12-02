---
sidebar_position: 14
---

# Field name menggunakan spasi di belakang


#  JSON Request:
```jsx title

mutation Crypto {
    Crypto {
        EncryptionItems {
            Store(in: { 
                Name: "KTP", 
                Method: RSA1024, 
                Param:  [{
                    Key:"Nama Lengkap ",
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
                        "IsSuccess": false,
                        "Message": "invalid StoreEncryptionItemRequest.Param[0]: embedded message failed validation | caused by: invalid EncryptionParam.Key: value does not match regex pattern \"^[0-9A-Za-z]+( [0-9A-Za-z]+)*$\"",
                        "MessageCode": "",
                        "StatusCode": 3,
                        "ErrDetails": [
                            "invalid StoreEncryptionItemRequest.Param[0]: embedded message failed validation | caused by: invalid EncryptionParam.Key: value does not match regex pattern \"^[0-9A-Za-z]+( [0-9A-Za-z]+)*$\""
                        ]
                    },
                    "Data": null
                }
            }
        }
    }
}
```