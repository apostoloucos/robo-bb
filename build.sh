set -e

rm -rf build
mkdir build
cd ./build
git clone git@github.com:extraton/kington.git .
git checkout "${1}"
yarn install
yarn run build
docker build -f ../deploy/Dockerfile -t docker.pkg.github.com/extraton/kington/kington-nginx:${1} -t docker.pkg.github.com/extraton/kington/kington-nginx:latest  .
docker push docker.pkg.github.com/extraton/kington/kington-nginx:${1}
docker push docker.pkg.github.com/extraton/kington/kington-nginx:latest