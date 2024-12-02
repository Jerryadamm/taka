---
sidebar_position: 7
---

# Login dengan password yang salah


#  JSON Request:
```jsx title
mutation Auth {
    Auth {
        Authenticates {
            Authenticate(in: { Email: "iqbal@primasys.co.id", password: "iqbal123" }) {
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
                        "Message": "Your email or password is invalid.",
                        "MessageCode": "",
                        "StatusCode": 16,
                        "ErrDetails": [
                            "crypto/bcrypt: hashedPassword is not the hash of the given password"
                        ]
                    },
                    "data": null
                }
            }
        }
    }
}
```