---
sidebar_position: 16
---

# Salah satu field belum diisi


#  JSON Request:
```jsx title

mutation Crypto {
    Crypto {
        EncryptionItems {
            Store(in: { 
                Name: "KTP", 
                Method: RSA1024, 
                Param:  [{
                    Key:"",
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
                        "Message": "invalid StoreEncryptionItemRequest.Param[0]: embedded message failed validation | caused by: invalid EncryptionParam.Key: value length must be between 1 and 100 bytes, inclusive",
                        "MessageCode": "",
                        "StatusCode": 3,
                        "ErrDetails": [
                            "invalid StoreEncryptionItemRequest.Param[0]: embedded message failed validation | caused by: invalid EncryptionParam.Key: value length must be between 1 and 100 bytes, inclusive"
                        ]
                    },
                    "Data": null
                }
            }
        }
    }
}
```