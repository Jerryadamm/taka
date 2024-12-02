---
sidebar_position: 4
---

# Register dengan mengisi fullname kurang dari 5 huruf

#  JSON Request:
```jsx title

mutation Auth {
    Auth {
        Authenticates {
            Register(
                in: {
                    Email: "iqbal@mail.com"
                    Fullname: "adhi"
                    Password: "coba123"
                    ConfirmPassword: "coba123"
                }
            ) {
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
            "Authenticates": {
                "Register": {
                    "Status": {
                        "IsSuccess": false,
                        "Message": "invalid RegisterRequest.Fullname: value length must be between 5 and 100 bytes, inclusive",
                        "MessageCode": "",
                        "StatusCode": 3,
                        "ErrDetails": [
                            "invalid RegisterRequest.Fullname: value length must be between 5 and 100 bytes, inclusive"
                        ]
                    }
                }
            }
        }
    }
}
```