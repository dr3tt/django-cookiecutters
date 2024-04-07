from django.views import View
from inertia import render


class IndexView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "Index")
