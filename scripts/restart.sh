npx plugman uninstall --platform android --project $PWD/platforms/android --plugin $HOME/repos/gotenna/cordova-plugin-gotenna
npx plugman   install --platform android --project $PWD/platforms/android --plugin $HOME/repos/gotenna/cordova-plugin-gotenna
echo "Plugin reloaded. Running project..."
npm run android
