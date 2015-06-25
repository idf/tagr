# Tagr
Corpus-free auto tagging for text in any length. Web: http://tagr.deepreader.io/

# Public API
Post the document text to be analyzed to URL `/` in the json format of:
```json
{"text": "the document text to be analyzed"}
```
The response json format is:
```json 
{"keywords": ["phrase1", "phrase2"]}
```

# Design 
* AngularJS + Django 
* Main logic is calculation rather than data storage.
* [Rapid Automatic Keyword Extraction (RAKE) algorithm](http://www.researchgate.net/publication/227988510_Automatic_Keyword_Extraction_from_Individual_Documents)
* [RAKE Python code](https://github.com/aneesha/RAKE)
