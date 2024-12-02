---
sidebar_position: 2
---

# Register dengan email yang sudah terdaftar


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
                    ConfirmPassword: "iqbal"
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
                        "Message": "email already taken",
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