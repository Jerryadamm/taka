---
sidebar_position: 19
---

# Delete Encryption configuration


#  JSON Request:
```jsx title

mutation Crypto {
    Crypto {
        EncryptionItems {
            Delete(in: { ID: "5a132228-21a8-4809-b004-6610fa4e37aa" }) {
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
                "Delete": {
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