echo
echo "************************"
echo "* Variable subsitituion *"
echo "************************"
echo

awk '{gsub(/<REACT_APP_API_KEY>/,"'$4'")}1' /workspace/src/.env.production >/workspace/tmp.env && mv /workspace/tmp.env /workspace/src/.env.production

echo
echo "************************"
echo "* Build container *"
echo "************************"
echo

cd /workspace
docker build -f docker/prod.Dockerfile \
    -t gcr.io/$1/$2:$3 .

echo
echo "************************"
echo "* Push to Registry *"
echo "************************"
echo

docker push gcr.io/$1/$2:$3