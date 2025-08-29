from flask import Flask, render_template, request
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import ast

app = Flask(__name__)

# Load and prepare data
DF_PATH = 'data2.csv'
df = pd.read_csv(DF_PATH)
df['About'] = df['About'].fillna('')
# Convert Genre string representation to list
try:
    df['GenreList'] = df['Genre'].apply(ast.literal_eval)
except Exception:
    df['GenreList'] = df['Genre'].apply(lambda x: [])

# Generate TF-IDF matrix on About descriptions
vectorizer = TfidfVectorizer(stop_words='english')
about_matrix = vectorizer.fit_transform(df['About'])

@app.route('/', methods=['GET', 'POST'])
def index():
    results = None
    query = ''
    if request.method == 'POST':
        query = request.form.get('query', '')
        # Transform user query and compute cosine similarity
        q_vec = vectorizer.transform([query])
        sim_scores = cosine_similarity(q_vec, about_matrix).flatten()
        top_indices = sim_scores.argsort()[-5:][::-1]
        results = []
        for idx in top_indices:
            movie = df.iloc[idx]
            results.append({
                'Name': movie['Name'],
                'Image': movie['Image'],
                'Genres': movie['GenreList'],
                'Score': movie['Score']
            })
    return render_template('index.html', results=results, query=query)

if __name__ == '__main__':
    app.run(debug=True)
