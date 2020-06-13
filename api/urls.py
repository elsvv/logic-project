from .views import eval_formula
from django.conf.urls import url

urlpatterns = [
    url(r'^formula/', eval_formula)
]
