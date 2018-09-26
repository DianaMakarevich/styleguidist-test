
cd docs

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:DianaMakarevich/styleguidist-test.git master:gh-pages

cd -