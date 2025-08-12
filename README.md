# Proton Authenticator for Raycast

A Raycast extension to quickly access your TOTP codes from Proton Authenticator.

> [!IMPORTANT]
> Please note that this is not the official [Proton Authenticator extension](https://www.raycast.com/Fared/proton-authenticator), but rather a fork that integrates Touch ID support and other authentication-related features.
> This version cannot be published to the Raycast Store in the meantime due to security concerns, so it is only available as a local extension.

## Features

### Import secrets

Easily import your secrets into the extension

<video src="https://github.com/user-attachments/assets/ef76a293-ff78-445f-8d4e-98cf8d75a597" width="800" autoplay loop controls></video>

### Touch ID authentication

Secure your codes with Touch ID authentication

<video src="https://github.com/user-attachments/assets/3d96c1c2-563b-469a-9297-a87beca720b0" width="800" autoplay loop controls></video>

### Fuzzy search

Quickly find accounts with partial matches

<video src="https://github.com/user-attachments/assets/4d664351-9a31-45ee-997b-3c5c1f5f0fe0" width="800" autoplay loop controls></video>

### Flexible sorting

Control how entries are sorted either alphabetically or by usage

<video src="https://github.com/user-attachments/assets/31e3758b-9321-462c-a41d-20004e1c007e" width="800" autoplay loop controls></video>

### Enable/disable Touch ID

If that's how you roll, you may disable Touch ID if you wish

<video src="https://github.com/user-attachments/assets/0ea91593-81d3-43af-bb43-1dc6f5fa1e12" width="800" autoplay loop controls></video>

### Control authentication timeout

Modify how long authentication sessions should last before they expire

<video src="https://github.com/user-attachments/assets/731981da-fb47-418e-b770-c7832f90fe05" width="800" autoplay loop controls>
</video>

### Clear authentication session

Passing your laptop to someone else? Make sure to clear authentication before doing so!

<video src="https://github.com/user-attachments/assets/90a32405-4deb-4f9f-93a0-81a8cdc62ab6" width="800" autoplay loop controls></video>

### Reset authenticator data

Wish to import a different JSON file? Reset your data (**Warning: this action cannot be undone**)

<video src="https://github.com/user-attachments/assets/dd9b8f9b-ddf9-4def-bb60-618503036db7" width="800" autoplay loop controls></video>

## Limitations

- Unfortunately, there is currently no way of automatically exporting the secrets from the Proton Authenticator app. Instead, you need to export the secrets yourself as a JSON file and upload the JSON file in the tool. This is only a one-time setup, but if you added new secrets to the Proton Authenticator app, then you need to repeat this step again.

- This is an alpha version - so it might not work as seamless as it should be.

## Setup

1. Install NPM dependencies:

   ```bash
   npm install
   ```

2. Run the extension in dev mode as follows:

   ```bash
   npm run dev
   ```

3. Copy the prebuilds folder into the extension directory as follows:

   ```bash
   cp -r prebuilds $HOME/.config/raycast/extensions/proton-authenticator
   ```

4. Export your authenticator data from Proton Pass
5. Upload the JSON file to the tool as prompted

## Compatibility

Apple Silicon Macs with Touch ID
