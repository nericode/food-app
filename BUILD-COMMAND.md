## Compilacion de app Android

tns run android

-   Las flags --bundle, --env.aot, --env.ugifly son opcionales.

## Compilacion de app Android para produccion

Creacion de keystore:

keytool -genkey -v -keystore food-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias food

Para compilar en produccion seguir el comando:

tns build android --bundle --env.uglify --env.aot --env.snapshot --release --key-store-path food-key.jks --key-store-password food123 --key-store-alias food --key-store-alias-password food123

# Aceptando Android App Bundle

tns build android --release --key-store-path food-key.jks --key-store-password food123 --key-store-alias food --key-store-alias-password food123 --aab --copy-to sampayo-aab.aab

## Compilacion de app iOS para produccion

# Primera compilacion

tns prepare ios --release

# Segunda compilacion

tns build ios --bundle --env.uglify --env.aot --env.snapshot --release --for-device --teamId TEAMID

# Tercero

Desde abrir el proyecto en XCode y subir la app desde ahi mismo.
