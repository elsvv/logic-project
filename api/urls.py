from .views import eval_formula
from django.urls import path

urlpatterns = [
    path('', eval_formula)
]
