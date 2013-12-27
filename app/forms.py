"""
WTForms Documentation:    http://wtforms.readthedocs.org/en/latest/
Flask WTForms Patterns:   http://flask.pocoo.org/docs/patterns/wtforms/
Flask-WTF Documentation:  https://flask-wtf.readthedocs.org/en/latest/

Forms for your application can be stored in this file.
"""

from flaskext.wtf import Form, SubmitField, TextField, Required, Email

class ExampleForm(Form):
    """Just a simple example form."""
    name = TextField('Name', validators=[Required()])
    email = TextField('Email', validators=[Email()])
    location = TextField('Location')
    submit = SubmitField('Submit')
