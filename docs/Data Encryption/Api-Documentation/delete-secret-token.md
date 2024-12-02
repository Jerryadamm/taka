---
sidebar_position: 12
---

# Delete secret token


#  JSON Request:
```jsx title

mutation Auth {
    Auth {
        APIKeys {
            Delete(in: { ID: "122bb7d6-7ad3-445a-a77d-792aad86a6ce" }) {
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
        "Auth": {
            "APIKeys": {
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