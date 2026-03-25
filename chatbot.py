from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

data = {
    "services": "We provide Civil, HVAC, Electrical, Plumbing and IT services",
    "contact": "Call us at +91 9725482695",
    "location": "Ahmedabad, Gujarat"
}

@app.route('/chat', methods=['POST'])
def chat():
    msg = request.json['msg'].lower()

    if "service" in msg:
        return jsonify("We provide Civil, HVAC, Electrical and Plumbing services")

    elif "contact" in msg:
        return jsonify("You can call +91 9725482695")

    elif "location" in msg:
        return jsonify("We are located in Ahmedabad")

    else:
        return jsonify("Please visit contact page for more info")

if __name__ == '__main__':
    app.run()