import json
import os
import time
from flask import Flask, Response, request, render_template


app = Flask(__name__, static_url_path='', static_folder='public')
app.add_url_rule('/QuantumFrontier/', 'root', lambda: app.send_static_file('index.html'))  # client and server side with json file

@app.route('/QuantumFrontier/')
def index():
    return render_template("index.html")

@app.route('/QuantumFrontier/mnist/handwriteImage', methods=['GET', 'POST'])  # Check1!
def comments_handler():
    with open('handwriteImage.json', 'r') as f:
        comments = json.loads(f.read())  # Check2!

    if request.method == 'POST':
        new_comment = request.form.to_dict()
        new_comment['id'] = int(time.time() * 1000)
        comments.append(new_comment)

        with open('handwriteImage.json', 'w') as f:
            f.write(json.dumps(comments, indent=4, separators=(',', ': ')))

    return Response(
        json.dumps(comments),  # Check3!
        mimetype='application/json',
        headers={
            'Cache-Control': 'no-cache',
            'Access-Control-Allow-Origin': '*'
        }
    )

if __name__ == '__main__':
    app.run(port=int(os.environ.get("PORT", 8000)), debug=True)