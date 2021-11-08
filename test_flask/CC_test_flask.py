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
#import requests
import sys,traceback
dev_mode = 'FALSE'

app = Flask(__name__)
# @app.route('/<path:filename>')

@app.route('/chordDict')
def getChordDict():
    f = open('Backend_Functions/chordDictionary.json')
    data = f.read()
    f.close()
    return data

@app.route('/<path:filename>')
def serve_static(filename):
    root_dir = app.root_path
    print("root ",root_dir,app.root_path,app.instance_path)
    print(os.path.join(root_dir, 'static\\keyboard\\'), filename)
    return send_from_directory(os.path.join(root_dir, 'static\\keyboard\\'), filename)




if __name__ == '__main__':
    if dev_mode == 'TRUE':
        app.run(host='0.0.0.0',port=8000,debug=True)
    else:
        app.run(port=8000,debug=False)