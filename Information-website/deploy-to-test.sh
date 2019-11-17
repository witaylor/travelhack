# Switch to deplotment branch
echo "\n👉 Switching to the deployment branch\n"
git fetch --all
git checkout gh-pages-deployment

# Make sure you're up to date
echo "\n👉 Updating from master\n"
git pull origin master

echo "\n👉 Deploying\n"
yarn run deploy

echo "\n👉 Successfully published on https://travelhack.github.io/ \n"