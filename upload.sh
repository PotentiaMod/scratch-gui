git init
git add .
git commit -m "UPLOAD CODE"
git branch -M develop
git remote add origin https://github.com/PotentiaMod/scratch-gui.git
git push -f origin develop

cd build
git init
git add .
git commit -m "UPLOAD CODE"
git branch -M offline-build
git remote add origin https://github.com/PotentiaMod/scratch-gui.git
git push -f origin offline-build