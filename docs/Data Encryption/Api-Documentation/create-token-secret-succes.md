---
sidebar_position: 10
---

# Create token secret succes


#  JSON Request:
```jsx title

mutation Auth {
    Auth {
        APIKeys {
            Store(in: { Name: "ktp", ExpTime: 48 }) {
                Status {
                    IsSuccess
                    Message
                    MessageCode
                    StatusCode
                    ErrDetails
                }
                Data {
                    Token
                    ExpTime
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
                "Store": {
                    "Status": {
                        "IsSuccess": true,
                        "Message": "request successfully filled",
                        "MessageCode": "",
                        "StatusCode": 0,
                        "ErrDetails": null
                    },
                    "Data": {
                        "Token": "9c7dac7e0fdeaf341b3b0b62a869aa24191a3e59cead71ef96dcdc415cb053d15b7456e643c59b08b1738f0e321d003babe6e57f24a693b18296dabc2a6605b8d781fd7edb4d80910b5a7148110c9784371c9ec13407de7479b8122cac77dd86c7d01aefe8ad3b596500aed266c75ee785ccadb43e89d4d9f372292f9e20cb643012b4ed2e4b9d968b7bf043410c59f10765f093530d1392c6b23c02726a20c4f79fd3e56c4ac715e624f42f782364ab921d65d332cc1e453e9da3ea9710ddc126b7552ccbd0ea7ce6db00131dd488801b8281f7399a70815f140966ba4786f8f42a962544838d0c079a693b3b168790f4ae1c11f73b249131f5351d04a4af4b2c7e4bebbffdc80d93e0eb25ae6403c45519114404090b5402ad01f846d970fd2964d787ba15ce78419fa15bf3ba74a6522eedf90c3ed858d31ad8058109668e0c1196ee28bc75731f74b7c129013486787e02facb4103f68aa0ac9d83aab9ae8c8e6d078c424cd6e6c239e9db5094b298066aa640b67449e58cb2e356ed539d",
                        "ExpTime": "2024-11-03T06:40:58Z"
                    }
                }
            }
        }
    }
}
```