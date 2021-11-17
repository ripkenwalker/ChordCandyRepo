from __future__ import unicode_literals
from flask import Flask, jsonify, render_template, request,json,send_from_directory, flash, url_for, redirect, session,send_file,redirect
import os
from wtforms import Form, BooleanField, TextField, PasswordField, validators,RadioField
#import requests
import sys,traceback
dev_mode = 'FALSE'
from Backend_Functions.mainCallMultiple import mainCallMultiple
from Backend_Functions.getDictPath import getDictPath

app = Flask(__name__)
# @app.route('/<path:filename>')

@app.route('/chordDict')
def getChordDict():
    f = open(getDictPath())
    data = f.read()
    f.close()
    return data

@app.route('/<path:filename>')
def serve_static(filename):
    root_dir = app.root_path
    print("root ",root_dir,app.root_path,app.instance_path)
    print(os.path.join(root_dir, 'static\\keyboard\\'), filename)
    return send_from_directory(os.path.join(root_dir, 'static\\keyboard\\'), filename)

@app.route('/chordsend')
def chordsend():
    #print("got in")
    chordIn1 = request.args.get('chord1')
    chordIn2 = request.args.get('chord2')
    chordIn3 = request.args.get('chord3')
    chordIn4 = request.args.get('chord4')
    
    inputChord = [str(chordIn1), str(chordIn2), str(chordIn3), str(chordIn4)]
    print(inputChord)

    destChords = mainCallMultiple(inputChord)

    return jsonify(destChords)





if __name__ == '__main__':
    if dev_mode == 'TRUE':
        app.run(host='0.0.0.0',port=8000,debug=True)
    else:
        app.run(port=8000,debug=False)