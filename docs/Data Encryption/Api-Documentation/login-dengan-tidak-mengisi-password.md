---
sidebar_position: 9
---

# Login dengan tidak mengisi password


#  JSON Request:
```jsx title

mutation Auth {
    Auth {
        Authenticates {
            Authenticate(in: { Email: "iqbal@primasys.co.id", password: "" }) {
                status {
                    IsSuccess
                    Message
                    MessageCode
                    StatusCode
                    ErrDetails
                }
                data {
                    Token {
                        AccessToken
                        RefreshToken
                        Created
                        Expiry
                    }
                    User {
                        ID
                        Email
                        Fullname
                        RoleCode
                        IsActive
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
            "Authenticates": {
                "Authenticate": {
                    "status": {
                        "IsSuccess": false,
                        "Message": "invalid AuthenticateRequest.Password: value length must be at least 5 bytes",
                        "MessageCode": "VALIDATION_FAILED",
                        "StatusCode": 3,
                        "ErrDetails": [
                            "invalid AuthenticateRequest.Password: value length must be at least 5 bytes"
                        ]
                    },
                    "data": null
                }
            }
        }
    }
}
```