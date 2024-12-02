---
sidebar_position: 8
---

# Login dengan tidak mengisi field email


#  JSON Request:
```jsx title

mutation Auth {
    Auth {
        Authenticates {
            Authenticate(in: { Email: "", password: "iqbal" }) {
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
                        "Message": "invalid AuthenticateRequest.Email: value length must be between 5 and 100 bytes, inclusive",
                        "MessageCode": "VALIDATION_FAILED",
                        "StatusCode": 3,
                        "ErrDetails": [
                            "invalid AuthenticateRequest.Email: value length must be between 5 and 100 bytes, inclusive"
                        ]
                    },
                    "data": null
                }
            }
        }
    }
}
```