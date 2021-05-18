#/bin/sh

set -e

TEMP_DIR=${1}
GIT_SSH_URL="$(node ./tools/git-ssh.js)"
VERSION="$(node ./tools/version.js)"

echo "building app..."
npm run build

echo "fetching gp-pages..."
mkdir ${TEMP_DIR}
mkdir ${TEMP_DIR}/gh-pages
cd ${TEMP_DIR}/gh-pages
git init
git remote add origin ${GIT_SSH_URL}
git fetch
git checkout gh-pages

echo "preparing commit..."
git rm -rf .
mv -v ../../out/* .
echo -n "andres-kovalev.com" > CNAME
git add -A .
git config user.email "marcel@akovalev.ru"
git config user.name "marcelka-bot"
git commit -m "${VERSION}"

echo "publishing..."
git push

echo "done ;)"
