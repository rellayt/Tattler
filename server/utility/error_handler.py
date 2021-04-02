from flask import jsonify


def response_feedback(response_code, response_message, response_data=""):
    response = {'response_code': response_code, 'response_message': response_message, 'response_data': response_data}
    # queryUtils.create_log(json.dumps(response), status)
    return jsonify(response)