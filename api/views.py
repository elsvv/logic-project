from django.http import JsonResponse
from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt

from .table_resolver import print_truth_table_html

# Create your views here.


@csrf_exempt
def eval_formula(request, *args, **kwargs):
    print('---eval_formula---')
    try:
        data = json.loads(request.body.decode())
        formula = data['formula']

        table = print_truth_table_html(formula)
        data = {
            "table": table
        }

        return JsonResponse(data)

    except ValueError:
        return JsonResponse({"message": "NOT OK"})


@csrf_exempt
def save_events_json(request):
    try:
        data = json.loads(request.body.decode())
        print('data', data)
    except ValueError:
        return JsonResponse({'error': 'bla bla bla'})
