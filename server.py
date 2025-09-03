import flask as flask
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

GameStatus = {
    "gameName": {
        "player1-id": "placeholder",
        "player2-id": "placeholder",
        "last-move": "placeholder",
        "gameId": "placeholder",
        "gameStatus": [["u", "u", "u"], ["u", "u", "u"], ["u", "u", "u"]],
        "replay-p1": "u",
        "replay-p2": "u",
        "resetBtn-p1": False,
        "resetBtn-p2": False
    }
}

@app.route("/")
def home():
    return flask.render_template("index.html")


@app.route("/getGameStatus", methods=["GET"])
def sendGameStatus():
    for gameid, game in GameStatus.items():
        p1 = game["player1-id"]
        p2 = game["player2-id"]

        if game.get(p1 + "-replay") == True and game.get(p2 + "-replay") == True:
            game["gameStatus"] = [["u","u","u"],["u","u","u"],["u","u","u"]]
            game[p1 + "-replay"] = "u"
            game[p2 + "-replay"] = "u"
            game[p1 + "-resetBtn"] = True
            game[p2 + "-resetBtn"] = True
          
    return flask.jsonify(GameStatus)


@app.route("/updateGameStatus", methods=["POST"])
def updateGameStatus():
    global GameStatus
    GameStatus = flask.request.json
    return "Game status updated"

@app.route("/newGameStatus", methods=["POST"])
def newGameStatus():
    global GameStatus
    newGameStatus = flask.request.json
    print(newGameStatus)
    GameStatus[newGameStatus["gameId"]] = newGameStatus
    return "New game status created"

@app.route("/TikTakToe", methods=["GET"])
def render_index():
    return flask.render_template("TikTakToe.html")


app.run(debug=False, host="0.0.0.0", port=5050)
