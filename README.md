# Proton Authenticator for Raycast

A Raycast extension to quicly access your TOTP codes from Proton Pass authenticator exports.

## Features

### Import secrets

Easily import your secrets into the extension

<video src="https://github.com/user-attachments/assets/320dadf7-585d-4a2d-8dbe-eaacddee6af2" width="800" autoplay loop controls></video>

### Touch ID authentication

Secure your codes with Touch ID authentication

<video src="https://github.com/user-attachments/assets/4e56e7df-70d4-400f-8796-d1206e4e71be" width="800" autoplay loop controls></video>

### Copy/paste shortcuts

Convenient shortcuts for copying/pasting current and next codes

<video src="https://github.com/user-attachments/assets/30cabc38-48a4-4afb-99e0-32c59729dca0" width="800" autoplay loop controls></video>

### Enable/disable Touch ID

If that's how you roll, you may disable Touch ID if you wish

<video src="https://github.com/user-attachments/assets/5c687784-bfc5-4fe2-baab-57735743bd0a" width="800" autoplay loop controls></video>

### Control authentication timeout

Modify how long authentication sessions should last before they expire

<video src="https://github.com/user-attachments/assets/2f0f0504-f9e9-42f5-8ca1-7a6701c1939a" width="800" autoplay loop controls>
</video>

### Clear authentication session

Passing your laptop to someone else? Make sure to clear authentication before doing so!

<video src="https://github.com/user-attachments/assets/61aaf6cd-1d7f-45a9-8ee0-74ea3119b106" width="800" autoplay loop controls></video>

### Reset authenticator data

Wish to import a different JSON file? Reset your data (**Warning: this action cannot be undone**)

<video src="https://github.com/user-attachments/assets/ca1f25c9-e55d-4e1e-8a61-b496ff18fdc1" width="800" autoplay loop controls></video>

## Limitations

- Unfortunately, there is currently no way of automatically exporting the secrets from the Proton Authenticator app. Instead, you need to export the secrets yourself as a JSON file and upload the JSON file in the tool. This is only a one-time setup, but if you added new secrets to the Proton Authenticator app, then you need to repeat this step again.

- This is an alpha version - so it might not work as seamless as it should be.

## Setup

1. Export your authenticator data from Proton Pass
2. Upload the JSON file to the tool as prompted

## Notes

- This extension is compatible with only machines running Apple Silicon with a Touch ID.

## Credits

- The UI was inspired by <https://www.raycast.com/chkpwd/ente-auth>.
