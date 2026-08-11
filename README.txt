SQUISITO BUSINESS — PWA / APK package
=====================================
This folder is your app, ready to put online and turn into an Android APK.

Files:
  index.html               <- the app (do not rename)
  manifest.webmanifest     <- app name, icons, colours
  service-worker.js        <- makes it work offline after first load
  icon-*.png / maskable-*  <- app icons
  apple-touch-icon.png     <- icon for iPhone/iPad

HOW TO USE (summary — see the chat for full step-by-step):
  1. Put this WHOLE folder online for free (Netlify Drop: https://app.netlify.com/drop)
     You'll get an address like  https://squisito.netlify.app
  2. Go to https://www.pwabuilder.com , paste that address, choose Android,
     and download the app package (APK/AAB).
  3. After building, PWABuilder gives you an "assetlinks.json" file.
     Put it online at:  <your-address>/.well-known/assetlinks.json
     (make a folder named  .well-known  and drop the file inside, re-publish)
  4. Copy the .apk to your phone and open it to install.

TO UPDATE THE APP LATER:
  - Change something in index.html.
  - Open service-worker.js and change  squisito-v1  to  squisito-v2  (next number).
  - Re-publish the folder online. Installed phones update automatically.
  - You do NOT need to rebuild the APK unless you change the icon or app name.

KEEP SAFE: the signing key PWABuilder creates (and its passwords).
You need it to publish updates or to put the app on Google Play later.

Your business data (quotes, receipts, clients) is NEVER uploaded.
Hosting only serves the app itself. All records stay on the phone.
