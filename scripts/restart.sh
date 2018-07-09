npx plugman uninstall --platform android --project $PWD/platforms/android --plugin $HOME/repos/gotenna/plugin-simple
npx plugman   install --platform android --project $PWD/platforms/android --plugin $HOME/repos/gotenna/plugin-simple
echo "Plugin reloaded. Running project..."
cordova run android
