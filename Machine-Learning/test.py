import re
import string
from sklearn.feature_extraction.text import TfidfVectorizer
import os
import pickle
import pandas as pd

# Directory where models are stored
model_dir = 'models'

# Load all models from the models directory
model_filenames = {
    'LR': os.path.join(model_dir, 'LR.pkl'),
    'DT': os.path.join(model_dir, 'DT.pkl'),
    'GBC': os.path.join(model_dir, 'GBC.pkl'),
    'RFC': os.path.join(model_dir, 'RFC.pkl'),
    'TFIDF': os.path.join(model_dir, 'TFIDF.pkl')
}

models = {}

for model_name, model_filename in model_filenames.items():
    with open(model_filename, 'rb') as file:
        models[model_name] = pickle.load(file)


def wordopt(text):
    text = text.lower()
    text = re.sub('\[.*?\]', '', text)
    text = re.sub("\\W"," ",text) 
    text = re.sub('https?://\S+|www\.\S+', '', text)
    text = re.sub('<.*?>+', '', text)
    text = re.sub('[%s]' % re.escape(string.punctuation), '', text)
    text = re.sub('\n', '', text)
    text = re.sub('\w*\d\w*', '', text)    
    return text

def vectorize(text):
    vectorization = models['TFIDF']
    xv_test = vectorization.transform([text])
    return xv_test

def clean_text(text):
    phase1 = wordopt(text)
    phase2 = vectorize(phase1)
    return phase2

def predict(text):
    # Clean the news text
    cleaned_text = clean_text(text)
    # cleaned_text = cleaned_text.reshape(-1,1)
    model = models['LR']
    prediction = model.predict(cleaned_text).reshape(1, -1)
    
    # Return the result as JSON
    result = 'true' if prediction == 1 else 'false'
    print(result)

df = pd.read_csv("./data/True.csv")
value = df.at[1, 'text']

predict(value)