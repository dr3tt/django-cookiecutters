# ruff: noqa: F403, F405
import environ

from .base import *

# Env variables should be configured in deployment environment
env = environ.Env()

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

DJANGO_VITE_DEV_MODE = False

SECRET_KEY = os.environ["DJANGO_SECRET_KEY"]

# db_url() search for DATABASE_URL env variable
DATABASES = {"default": env.db_url()}
