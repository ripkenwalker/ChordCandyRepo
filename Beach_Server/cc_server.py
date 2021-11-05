from __future__ import unicode_literals
from flask import Flask, jsonify, render_template, request,json,send_from_directory, flash, url_for, redirect, session,send_file,redirect
# from flask_wtf import FlaskForm
# from wtforms import SelectField,HiddenField,SubmitField,FieldList,FormField
# import pretty_midi
# import librosa
import os
import subprocess
# from functools import wraps
from wtforms import Form, BooleanField, TextField, PasswordField, validators,RadioField
import gc
import requests
import sys,traceback
from Backend_Functions.mainCallMultiple import mainCallMultiple


midipitches = ['C','C#','D','Eb','E','F','F#','G','G#','A','Bb','B']
 

app = Flask(__name__)
app.config['SESSION_TYPE'] = 'memcached'
app.config['SECRET_KEY'] = 'pretty secret key'
UPLOAD_FOLDER = './static/audio_uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
dev_mode = 'FALSE'
#print("fn ",Flask(__name__))

@app.route('/chordsend')
def chordsend():
    print("got in")
    chordIn1 = request.args.get('chord1')
    chordIn2 = request.args.get('chord2')
    chordIn3 = request.args.get('chord3')
    chordIn4 = request.args.get('chord4')
    
    inputChord = [str(chordIn1), str(chordIn2), str(chordIn3), str(chordIn4)]
    print(inputChord)

    destChords = mainCallMultiple(inputChord)

    return jsonify(destChords)


@app.route('/<path:filename>')
def serve_static(filename):
    root_dir = app.root_path
    print("root ",root_dir,app.root_path,app.instance_path)
    print(os.path.join(root_dir, 'static\\'), filename)
    return send_from_directory(os.path.join(root_dir, 'static\\'), filename)

if __name__ == '__main__':
    #app = Flask(__name__)
    # sess = Session()
    if dev_mode == 'TRUE':
        app.run(host='0.0.0.0',port=8000,debug=True)
    else:
        app.run(port=8000,debug=False)
        
   

            
