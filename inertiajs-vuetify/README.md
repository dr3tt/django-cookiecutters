# Project Template: Django - InertiaJS - Vuetify

## Download the template

```shell
cookiecutter gh:dr3tt/django-cookiecutters --directory="inertiajs-vuetify"
```

Sample output:
```shell
cookiecutter gh:dr3tt/django-cookiecutters --directory="inertiajs-vuetify"
  [1/2] project_name (Your Project): 
  [2/2] project_slug (your_project): foo
```

## Local development

### Backend setup
```shell
cd [project_slug dir]
# Create virtualenv
python -m venv venv
# Activate virtualenv
source ./venv/bin/activate
# Install Python dependencies
pip install -r requirements.txt
# Change to backend directory
cd backend
# Run initial migrations
python manage.py migrate
# Run development server
python manage.py runserver
```

Sample output:
```shell
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
April 07, 2024 - 16:50:47
Django version 4.2.11, using settings 'foo.settings.local'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.

```


### Frontend setup
Open *another* terminal.
```shell
cd [project_slug dir]
# Install JS dependencies
npm install
# Run development server
npm run dev
```

Sample output:
```shell
  VITE v5.2.8  ready in 177 ms

  ➜  Local:   http://localhost:3000/static/app/
  ➜  press h + enter to show help

```

Open browser at: http://localhost:8000 .