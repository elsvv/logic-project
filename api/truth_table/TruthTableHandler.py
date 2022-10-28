from flask_restful import Resource
from flask import request

from api.truth_table.tt_logic import print_truth_table_for_list


class TruthTableHandler(Resource):
    def post(self):
        request_data = request.get_json()

        formula = request_data['formula']
        valueFormat = request_data['valueFormat'].split('/')
        truthValue = valueFormat[0]
        falseValue = valueFormat[1]

        table = print_truth_table_for_list(formula, truthValue, falseValue)

        data = {
            "table": table
        }

        return data
