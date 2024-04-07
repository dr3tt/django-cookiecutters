"""
Django JS Routes resolver dump command
======================================

This command allows to export a JS module containing the Django URLs that should be exposed on
the client side as of a resolver helper allowing to perform URL lookups.

See


"""

from django.conf import settings
from django.core.management.base import BaseCommand
from django.template.loader import render_to_string
from js_routes.serializers import url_patterns_serializer


class Command(BaseCommand):
    """Dumps Django URLs and the resolver helper in a single JS file."""

    help = "Dump Django URLs and the resolver helper in a single JS file."

    def handle(self, *args, **options):
        """Performs the command actions."""
        with open(settings.JS_ROUTES_PATH, "w") as f:
            f.write(
                render_to_string(
                    "js_routes/_dump/es6.js",
                    {"routes": url_patterns_serializer.to_json()},
                )
            )
        self.stdout.write(f"{settings.JS_ROUTES_PATH} updated")
