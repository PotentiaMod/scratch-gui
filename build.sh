npm run build
npm run build:prepublish

cd ../potentiamod.github.io
git init
git add .
git commit -m "UPLOAD CODE"
git branch -M main
git remote add origin https://github.com/PotentiaMod/potentiamod.github.io.git
git push -f origin main
PAUSE
