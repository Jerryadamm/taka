---
sidebar_position: 21
---

# Encryption Succes


#  JSON Request:
```jsx title

mutation Crypto {
    Crypto {
        EncryptionItems {
            Encrypt(in: { ID: "ee309cfb-5184-4eb9-a708-989aaf1f0793", Data: [{ Key: "Nama Lengkap", Value: "iqbal adhi surachman" },{ Key: "Alamat", Value: "jalan 123" }] }) {
                Status {
                    IsSuccess
                    Message
                    MessageCode
                    StatusCode
                    ErrDetails
                }
                Data {
                    Key
                    Value
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
    "Crypto": {
      "EncryptionItems": {
        "Encrypt": {
          "Status": {
            "IsSuccess": true,
            "Message": "request successfully filled",
            "MessageCode": "",
            "StatusCode": 0,
            "ErrDetails": null
          },
          "Data": [
            {
              "Key": "No KTP",
              "Value": "QUL7179P8W88ZKkxIMLj95s7cR4J09NMC2m_tYzJbfVtj6T4jCY9OrC1E4EH0puJA0RMoIGmsGCJd6MWZ0K5qY1nFG9_eODgzjw-2rKQjfp1cv0J9JmYVSlEvgv20ou822ajuChiUUvWJp-m3DAb5q_mzrLxqik0W0DzRqtkSAAeCvBmC4CmJ8yINFr7Y6szw4nRjBhOQX5muUodiwEeFRqJQVrxTWrKC9LmkvAZdf-UCyuEBeB7QmLoAz1QftqanqmDIgy8EnrHJXR98vJfRRW0rPEQ4NHeBk_us9biSmC53AP2DNtT7ySxAM3Mw0TmIYSEgX5FbpCcZtUCjkn9Og65zwEWy7N9okXyxyl1DMvGgKZvbubsRjfbu9oyftbN4mVaPN-HY-NbHx8hpU6wEeIIhOgvMBovSNIbZ1xFpIx9Hyb7JA2UIuNj78jp23sqnjgH2bdhWvHn7n8RN4RwnXani_SWXBpLXzlxyXw1EGNpzuKxs65is7v-iGr-o0IQRCv-cc3-RDzjj7xShms60Wk1HXvgZX-exSHthYZEV1n2qeg2_7sGUbn8ENvud1iL7necOA8i6ZnrGQ2I9bJKgGGit1b6tDfeP9n5HLSmFeyLqxdwKXWNLml-fZYmHtEM9Rv1mKeLzqscsWzDNnDi9PiXVxO6ZnJb44XSl8Kpypw="
            },
            {
              "Key": "Nama Lengkap",
              "Value": "S73aZo2niZlb7C_TS3GrCpRFF_qU3PtTHdqtD8pqlT2OEPdO8wCeKTVh9h9NjtUOYjd0LNaeWOYVbjgiX7N1xKG1Er9B7k1wQXRNacyx-h3H4Bfj1clJcm4HOoOJUChV7EcSCMu4ddHl6t-cN1pLtw0hp_WhrPu0ubpqVSvZYlqnpWEODLi8Y1-3nDf-g6yFjB_teCYcblULJuNkXIGK1ePEtMVE_TavPeOD9r_DIX0i7ug1VX7am-aA64aiKr_BNPgYBOfuShdg3lhc98x3h0xhiCgafZVb8OSmtlBYBnslXt4YX6Xv68dZjwSRyAega6AGZV99c0D3GuXE05awAVX62E1RFpBvzJ5jsGHs2zVSXj4rCGHVc5ZeFGQ8vQ5a_kz96Wz5HF_5z0CAH6SL6i7IZ0Yh5d3JSYXTiRtxCc6Z9bmwd3-gcasdW2qcPqGFMvSZSCewj5nGmDb2BphgWS62LKPEYLcLxWdlc0IWS1sbiIp0y86Mb7gQAZ1gz1q4J0IORpjlnXKFIhEmq5BZ3XZec17lmweWa-CxvF-wZr-NM4c4Q3fE36x0E_coRdraoCvqlhMr1bpxwquP_uy5U3zaJ7sQNqb2x-GI7nmtqkziTvNRe8O7mTy1dW2F0UVEQT3LXHdMCBDr_u1K-kC6aPsEDRwd1GVMwb37rSfA5VM="
            },
            {
              "Key": "Alamat",
              "Value": "SXcFJBq6JFW0vUSAbtmbDkiGh5By3H0yHIPCZw6TckgHY1MszhN91ycJ3HRBZ06TzEGODpMkEk6nmlwYWYcivjukon0-ggiYvNTT5lYs9FGFciNDwZtdacThfLWavlp4ljduMd4v8B9nkUu4za6xYEHnVnZz4YgTmbDvoow9lCRJtuGP_6mJLGfkOxdAoLwfbrNjH5W4UO2UEqEwkWpW51Vo6b-HFkZKKSDkf86BmsJpOx08EkPMx0H-5ELqn-4z8mHUtP9nZeTshfVsYVu-CFj4mZHV-a019kGswXvUvixdZHcb9_cL3ByMMSgZ7rFVl_Q2Lrdjn3pFPgKrDlCc-5qlxN5HGjJw2Hhc0Iwo0beA1a8xYIuHhd30F-iTbI1BEM3xXPq4jELgy0ox16mmQyF9h1frpCOl6Z9pAWZZsWF6iHabQNxO16KcX_JGrU0547CiI49ObB94Tsr1nUy3ZrZr0W_YvAsqwSWFwUWE67QgP2YeSXSXOY0NYjjNz5xgnMmsCQ5yzEYSAnPbOz5s1bfzmIh_nyShwiQdfcUjM7cAgVx729jTg5iWS_RPXRemkDD0Vnyenem5iTJ6fsEc5XqRkowVJbLgt-ne6e7KuaqpKy-627Cns98kE069_CM1jSZ1OiBIZPtkPwr1XNSxPjO5RbUbCBsG98R6s7jd85k="
            },
            {
              "Key": "Email",
              "Value": "qCS3okECNPyFH7kMNxXWvB0E0d5gjYUM8fER1v0nVy018XySkNiBJQcjP0iIUCNd87Pn_vb_1ZISIk3FuXPlr8sscEvwWFk6b9cC-F23_YJz74SwRykmUE_C5uW6xFFECnOLUVWqMuUy2ykOpndByOIlnP3bvUb6IcMdBiHF0qePXZw-rTq8GcpFL8RXjbGm3SeVZqOAKK7r9UrZi3cDOsEFf7MWnhT81h4HCnTwGFXInZYCgMIBs6_g8d_yoCD1Uml60N_3rM3aQPHEhxxspbaPLIBuIPHj1G9Uo5ZWG9oU1M3Bp2NTE3tWfOppoqllVMtxDxcTJ38WCKQIfin4uCjpAfbAi2qVs1HBMx-q5m_uYWVxKSeeDlCNjiIyY4TMlORmqSA_TsPFpJGf5Od22PQCWeDS58iEdQInw0eMMersBhT6RBFOnENGvr97ED4HLxrGlm8-AGO2tjWudZf3YbGXsChLjN8LffyVihLX5FmjiVNRM2hIyT2DRiDrSALj4wDmUfRVcjz_GLYP5q-29d5oimQc-bBUPrsHOFJH7cWvUGiJQzSueS9CKEnh6Dr_Bb551ApsPBzlDaHRRFgZ93GYHhSBUHJwI5k8W8zA5DPahuavazZPl9TH1xvsFZYC-F-xClN2NKXoIvyEvontyTZXrsR4PidZcGl_C4_7-Ic="
            }
          ]
        }
      }
    }
  }
}
```