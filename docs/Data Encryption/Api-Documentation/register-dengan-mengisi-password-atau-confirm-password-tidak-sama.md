---
sidebar_position: 3
---

# Register dengan mengisi password atau confirm password tidak sama

#  JSON Request:
```jsx title

mutation Auth {
    Auth {
        Authenticates {
            Register(
                in: {
                    Email: "iqbal@primasys.co.id"
                    Fullname: "iqbal"
                    Password: "iqbal"
                    ConfirmPassword: "iqball"
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
                        "Message": "password not match",
                        "MessageCode": "",
                        "StatusCode": 3,
                        "ErrDetails": [
                            ""
                        ]
                    }
                }
            }
        }
    }
}
```