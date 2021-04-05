from flask import jsonify


def response_feedback(response_code, response_message):
    response = {'response_code': response_code, 'response_message': response_message}
    return jsonify(response)