from flask import Flask, request, jsonify
import pickle
import re
import string
import os

app = Flask(__name__)

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


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    news_text = data.get('text', '')
    model_choice = data.get('model', 'LR')  # Default to 'LR' if no model is specified

    if model_choice not in models:
        return jsonify({'error': 'Model not found'}), 400
    print(news_text)
    # Clean the news text
    cleaned_text = clean_text(news_text)
    
    # Make a prediction using the chosen model
    model = models[model_choice]
    prediction = model.predict(cleaned_text)[0]
    
    # Return the result as JSON
    result = True if prediction == 1 else False
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
