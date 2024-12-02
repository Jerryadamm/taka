---
sidebar_position: 1
---

# Register Succes

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
                        "IsSuccess": true,
                        "Message": "successfully register",
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