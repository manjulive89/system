from flask import Flask, render_template, redirect, request, url_for, session, flash
from flask import g
from functools import wraps
import sqlite3

app = Flask(__name__)

app.secret_key = "my key"
app.database = "sample.db"

def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if "logged_in" in session:
            return f(*args, **kwargs)
        else:
            flash("You need to login first")
            return redirect(url_for("login"))
    return wrap

@app.route("/")
@login_required
def home():
    posts=[]
    try:
        g.db = connect_db()
        cur = g.db.execute("select * from posts")
        for row in cur.fetchall():
            post={}
            post["title"] = row[0]
            post["description"] = row[1]
            posts.append(post)
#        print posts
#        posts = [ dict(title=row[0], description=row[1]) for row in cur.fetchall() ]
        cur.close()
        g.db.close()
    except sqlite3.OperationalError:
        flash("You have no database!")
    return render_template("index.html", posts=posts)

@app.route("/welcome")
def welcome():
    return render_template("welcome.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        if request.form["username"] == "admin" and request.form["password"] == "admin":
            session["logged_in"] = True
            flash("You were logged in")
            return redirect(url_for("home"))
        else:
            error = "Invalid Credentials. Please try again"
    return render_template("login.html", error=error)

@app.route("/logout")
@login_required
def logout():
    session.pop("logged_in", None)
    flash("You were logged out")
    return redirect(url_for("welcome"))

def connect_db():
    return sqlite3.connect(app.database)

if __name__ == "__main__":
    app.run(host='0.0.0.0')
