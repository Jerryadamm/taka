---
sidebar_position: 6
---

# Login dengan email yang belum terdaftar


#  JSON Request:
```jsx title

mutation Auth {
    Auth {
        Authenticates {
            Authenticate(in: { Email: "iqbal@primasys.com", password: "iqbal" }) {
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
                        "Message": "User not found.",
                        "MessageCode": "VALIDATION_FAILED",
                        "StatusCode": 5,
                        "ErrDetails": [
                            "no rows in result set"
                        ]
                    },
                    "data": null
                }
            }
        }
    }
}
```