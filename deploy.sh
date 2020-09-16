npm install
npm run build
cd /usr/share/nginx/html/

rm -R backup/
mkdir backup
mv quant backup 
mkdir quant 
cp -R /home/thuquant2/.jenkins/workspace/quant-ui/dist/* /usr/share/nginx/html/quant
