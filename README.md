## bootstrap:

[tutorial](https://towardsdatascience.com/build-deploy-a-react-flask-app-47a89a5d17d9)

using pipenv (recommended):

```sh
python3 -m pipenv install
python3 -m pipenv shell
```

To deactivate pipenv shell run the exit command or CTRL-d

<!-- python -m venv venv
source venv/bin/activate
pip install -r requirements.txt -->

To run server app:

```sh
flask --debug --app main.py run
```

To start client app localy:

```sh
cd client
npm install
npm run start
```

To "freeze" python deps to requirements.txt:

```sh
pip freeze >> requirements.txt
```
