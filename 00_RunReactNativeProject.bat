set projectPath=C:\GitHub\mtp2
start /min cmd /k "cd %projectPath% & react-native start"
start /min cmd /k %LOCALAPPDATA%\Android\sdk\tools\emulator -avd Nexus_5X_API_23
start /min cmd /k "cd %projectPath% & react-native run-android"