aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 583571304569.dkr.ecr.ap-northeast-2.amazonaws.com/junggri
rm -rf .next
yarn build
docker build -t blog-front .
docker tag blog-front 583571304569.dkr.ecr.ap-northeast-2.amazonaws.com/junggri:blog-front
docker push 583571304569.dkr.ecr.ap-northeast-2.amazonaws.com/junggri:blog-front
