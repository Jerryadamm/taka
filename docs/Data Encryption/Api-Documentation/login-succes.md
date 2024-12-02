---
sidebar_position: 5
---

# Login Succes


#  JSON Request:
```jsx title

mutation Auth {
    Auth {
        Authenticates {
            Authenticate(in: { Email: "iqbal@primasys.co.id", password: "iqbal" }) {
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
                        "IsSuccess": true,
                        "Message": "",
                        "MessageCode": "",
                        "StatusCode": 0,
                        "ErrDetails": null
                    },
                    "data": {
                        "Token": {
                            "AccessToken": "9c5e4ba18cd0d1a9f21255ce94417b26115bff7f9121dfe8a87d22dd776763337b8f195d567dbd5c08ee580de02cac886071e0615e23ec31e54e7404710ffcb7ad89de91c6f47f9765f6bff67fd55b126a9261664b1f333996d189eef51490d565814a4b6a234a7fd22e385a5e557a15e807d8df13b72a466c2e30adde5d33c741a976723f2961062355c573bcf04991bf8916568ef78f37b5a3f93d7c7464d56c26893f5a5d9c66925eb21ef2a743935f7c056a279e91381e8ebc90b89ed08ebf184c459039c2424f28e7856f6b5156e0c6f61092d36f997e359286f87ea56279d8bb871f9a0a0c9ccd07cd9363e6265993a19553dc63ea94e1b5f4721a840a54608db43c04654e0da10a3f48f859337b2a80505712a58884fa09e28f726ae0254c4dc1ddb16b7a9d9e6fb75eebd734f46a8c617c349b393ff008a65c0d8c34afe9a39bf661becd2c9457bffddb275a63102d527c4666a8090f71c49b93d2d17ba8a5364abcadf0d194d61cef58891651b365fdb20645014a67c9b79c7865521aa4de6d20e6b079e5f9c9a3cabf60f33f6d84a99838c05fc1d20d4f73efed4b2f594e7cb33e89643abdc8147ce83d71a365142b04972a6d9560d82bb73b11c614d97cf4d8b7e41c55ae0221715f0c2f",
                            "RefreshToken": "",
                            "Created": 1730432814,
                            "Expiry": 1730476014
                        },
                        "User": {
                            "ID": "0e883aee-33e4-4819-a680-cffc078f8f37",
                            "Email": "iqbal@primasys.co.id",
                            "Fullname": "iqbal",
                            "RoleCode": "USR",
                            "IsActive": false
                        }
                    }
                }
            }
        }
    }
}
```