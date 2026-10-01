# GSI-GUIDE

A clean, minimal and mobile-friendly guide for installing Android GSIs
using ADB and Fastboot.

> **Important:** GSI installation is device-dependent. Read the guide
> carefully and make sure your device, partition layout, architecture
> and GSI are compatible before running any command.

## ✨ Features

-   📱 Android GSI installation guide
-   🔧 ADB & Fastboot command reference
-   📦 Project Treble preparation steps
-   ⚡ FastbootD installation workflow
-   🛠️ Dynamic partition troubleshooting
-   📋 One-click command copy buttons
-   🌙 Premium dark glassmorphism UI
-   📱 Mobile-friendly responsive design
-   🔗 Useful Android development resources
-   🧩 Separate HTML, CSS and JavaScript files

## 📁 Project Structure

``` text
GSI-GUIDE/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Getting Started

Clone the repository:

``` bash
git clone https://github.com/ALAMIN2K7/GSI-GUIDE.git
cd GSI-GUIDE
```

Then open `index.html`.

No build system or package installation is required.

## 🌐 GitHub Pages

This project is designed to work directly with GitHub Pages.

1.  Open the repository on GitHub.
2.  Go to **Settings → Pages**.
3.  Under **Build and deployment**, select **Deploy from a branch**.
4.  Select the branch containing the project, usually `main`.
5.  Select `/ (root)`.
6.  Save the settings.

GitHub will then generate the Pages URL for the website.

## 📱 Before Installing a GSI

Make sure:

-   Your bootloader is unlocked.
-   USB Debugging is enabled.
-   Your device supports Project Treble.
-   You know your device architecture.
-   The selected GSI is compatible with your device.
-   You have the correct stock `vbmeta.img` when required.
-   You have a complete backup of important data.

> **Warning:** Some installation steps can erase user data. Proceed only
> if you understand the commands and their effects.

## 🔧 Main Fastboot Commands

### 01. Enter FastbootD

``` bash
adb reboot fastboot
```

### 02. Re-enter FastbootD

``` bash
fastboot reboot fastboot
```

### 03. Flash vbmeta

``` bash
fastboot --disable-verity --disable-verification flash vbmeta vbmeta.img
```

Use the correct stock `vbmeta.img` for your device.

### 04. Erase system

``` bash
fastboot erase system
```

### 05. Delete product_a

``` bash
fastboot delete-logical-partition product_a
```

### 06. Delete product_b

``` bash
fastboot delete-logical-partition product_b
```

### 07. Flash the GSI

``` bash
fastboot flash system gsi.img
```

Replace `gsi.img` with the actual name of your GSI file if necessary.

### 08. Erase userdata

``` bash
fastboot erase userdata
```

This erases user data.

### 09. Reboot

``` bash
fastboot reboot
```

## 🛠️ Troubleshooting

If Fastboot reports:

``` text
FAILED (remote: 'Not enough space to resize partition')
```

some dynamic-partition layouts may require additional space before
flashing a GSI.

Depending on the device layout, the following logical partitions may
need to be removed:

``` bash
fastboot delete-logical-partition system_ext
fastboot delete-logical-partition system_ext_a
fastboot delete-logical-partition system_ext_b
fastboot delete-logical-partition product
fastboot delete-logical-partition product_a
fastboot delete-logical-partition product_b
```

> **Important:** Do not blindly delete partitions on every device.
> Logical partition names and layouts vary between devices. Verify your
> device's partition layout and follow a device-specific guide when
> necessary.

## 🔗 Useful Resources

### Android SDK Platform Tools

https://developer.android.com/tools/releases/platform-tools

### Google USB Driver

https://developer.android.com/studio/run/oem-usb

### Treble Info

https://github.com/phhusson/treble_info

## 🎨 Website

The website uses a dark glassmorphism-inspired design with:

-   Responsive layout
-   Glass cards
-   Mobile optimization
-   Smooth scrolling
-   Copy-to-clipboard buttons
-   Troubleshooting command cards

## 🤝 Contributing

Contributions are welcome.

1.  Fork the repository.
2.  Create a new branch.
3.  Make your changes.
4.  Test the website.
5.  Open a Pull Request.

## ⚠️ Disclaimer

This project is provided for informational and educational purposes.

Flashing a GSI, modifying partitions, unlocking a bootloader, or wiping
userdata can potentially cause data loss or device boot problems.

**You are responsible for understanding the commands and verifying
compatibility with your own device before proceeding.**

## 📄 License

You can add your preferred license to this project, such as the MIT
License.

------------------------------------------------------------------------

Made for Android enthusiasts.

**GSI-GUIDE • Android • Treble • Fastboot**
