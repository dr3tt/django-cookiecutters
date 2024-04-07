# ruff: noqa: F403, F405
import os

import environ

from .base import *

env = environ.Env()
environ.Env.read_env(os.path.join(ROOT_DIR, ".env"), overwrite=True)


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
# If use HMR or not.
DJANGO_VITE_DEV_MODE = DEBUG

SECRET_KEY = os.environ["DJANGO_SECRET_KEY"]

ALLOWED_HOSTS = ["*"]

USE_HTTPS = False

# print(f"env.db_url(): {env.db_url()}")

DATABASES = {"default": env.db_url()}
