var G='images/gif/',C='images/cert/',K='https://www.kaggle.com/code/mhmdsyed/';
/* title, description, media, link, link label, tags, isVideo/gif */
var P=[
['Mini-RAG System','Lightweight retrieval-augmented generation with OpenAI, Cohere, Ollama and vLLM, containerized with Docker.','','https://github.com/MhmdSyd','GitHub',['FastAPI','pgvector','Docker']],
['Recommendation System','Netflix-style recommendations using vector databases and cosine similarity, with two Power BI reports.',G+'film.gif','https://github.com/MhmdSyd/Film_Recommendation','GitHub',['Python','Power BI'],1],
['Face Mask Detection','Real-time mask compliance detection with YOLOv5 on photos and video.',G+'mask.gif',K+'face-mask-detection-yolov5','Kaggle',['YOLOv5','PyTorch'],1],
['Global COVID-19 Tracker','Daily and cumulative cases and deaths by country, in Power BI and Python Dash.',G+'covid19.gif','https://github.com/MhmdSyd/Covid_19_DashBoard_Tracker','GitHub',['Power BI','Dash'],1],
['FIFA 22 Player Card','Power BI report that recreates the FIFA player card, with data cleaning and modelling.',G+'fifa22.gif','https://github.com/MhmdSyd/FIFA22-Player-Card','GitHub',['Power BI','DAX'],1],
['Seoul Bike Rental Prediction','EDA, regression model and deployment for a Kaggle competition.',G+'soul-bike.jpg',K+'seoul-bike-basic-eda-for-everyone/notebook','Kaggle',['Regression','EDA']],
['COVID-19 Bar Race Chart','Bar chart race of the 10 countries with the most cases, Jan 2020 to May 2021.',G+'bar-race.gif',K+'covid-19-bar-chart-race-visualization','Kaggle',['Visualization'],1],
['Gender Classification','Image classification with Keras to predict gender from a photo.',G+'gender.png',K+'gender-classification-using-keras','Kaggle',['Keras','CNN']],
['Arabic Handwritten Characters','CNN that classifies images of handwritten Arabic characters.',G+'arabic.png',K+'cnn-for-arabic-handwritten-characters','Kaggle',['CNN','TensorFlow']],
['Dry Beans Classification','Predicts one of 7 bean types from shape features, for a Kaggle competition.',G+'dry.png',K+'dry-beans-final-teamup','Kaggle',['Classification'] ]];
var S=[
['Data Analyst with Python','DataCamp','data-analyst.png','https://www.datacamp.com/statement-of-accomplishment/track/7ace542f690df39b1c2e23bd7109737fb9d119dc'],
['Data Scientist with Python','DataCamp','datacamp-science.png','https://www.datacamp.com/statement-of-accomplishment/track/c0a3a17ab03af22182252b6ae0d7095ba219ee75'],
['Data Analysis with Python','freeCodeCamp','freecodecamp.png','https://www.freecodecamp.org/certification/Mohamed-Elsayed-Diab/data-analysis-with-python-v7'],
['Machine Learning with Python','freeCodeCamp','freecode-machine.png','https://www.freecodecamp.org/certification/mohamed-elsayed-diab/machine-learning-with-python-v7'],
['Data Analyst Career Track','365 Data Science','365analysis.jpg','https://learn.365datascience.com/certificates/DD-1C2CC45350/'],
['Data Scientist Career Track','365 Data Science','365science.jpg','https://learn.365datascience.com/certificates/DD-B73903DFB1/'],
['Data Visualization','Kaggle','visual.png','https://www.kaggle.com/learn/certification/mhmdsyed/data-visualization'],
['Intermediate Machine Learning','Kaggle','kaggle-machine.png','https://www.kaggle.com/learn/certification/mhmdsyed/intermediate-machine-learning'],
['CNN and Deep Learning','Coursera','coursera.png','https://www.coursera.org/account/accomplishments/verify/7H9LB23VCCEW']];
var SK=[['Architecture','Business requirements|Solution design|HLD / LLD|System integration'],['Generative AI','LLMs|Prompt engineering|RAG|Embeddings|Vector databases|Ollama|vLLM|LangChain'],['Data and ETL','Data mining|Cleaning|Modeling|Feature engineering|Power Query|DAX|Alteryx'],['Reporting','Power BI|Excel|Plotly Dash|ECharts'],['Programming','Python|JavaScript|C|Java|SQL'],['Python libraries','Pandas|Matplotlib|Plotly|Scikit-learn|TensorFlow|PyTorch|Django|FastAPI'],['Machine and deep learning','Logistic regression|KNN|Decision tree|XGBoost|Random forest|CNN|Object detection|Instance segmentation'],['Databases','MySQL|PostgreSQL|MongoDB'],['Tools and platforms','Git|Linux|Jira|VBA|Docker|Redis|Celery|HTML|CSS|Bootstrap']];
function e(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function chips(a){return a.map(function(x){return '<span>'+e(x)+'</span>'}).join('')}
document.getElementById('pj').innerHTML=P.map(function(p,i){
 var m=p[2]?'<button class="m" data-src="'+p[2]+'" aria-label="Open '+e(p[0])+' preview"><img src="'+p[2]+'" alt="'+e(p[0])+' preview" loading="lazy">'+(p[6]?'<i>Demo</i>':'')+'</button>':'<div class="m" style="display:grid;place-items:center;cursor:default;color:var(--mut)">Architecture diagram coming soon</div>';
 return '<article class="card pc"'+(i>5?' data-x hidden':'')+'>'+m+'<div class="b"><h3>'+e(p[0])+'</h3><p>'+e(p[1])+'</p><div class="chips">'+chips(p[5])+'</div><a class="lk" href="'+p[3]+'" rel="noopener">'+p[4]+'</a></div></article>'}).join('');
document.getElementById('ct').innerHTML=S.map(function(c){
 return '<article class="card pc"><button class="m" data-src="'+C+c[2]+'" aria-label="Open certificate '+e(c[0])+'"><img src="'+C+c[2]+'" alt="'+e(c[0])+' certificate" loading="lazy"></button><div class="b"><h3>'+e(c[0])+'</h3><p class="meta" style="margin:0">'+e(c[1])+'</p><a class="lk" href="'+c[3]+'" rel="noopener">Verify certificate</a></div></article>'}).join('');
document.getElementById('sk').innerHTML=SK.map(function(s){return '<div class="card"><h3>'+s[0]+'</h3>'+s[1].split('|').map(function(x){return '<span class="chip">'+e(x)+'</span>'}).join('')+'</div>'}).join('');
var pm=document.getElementById('pm');pm.onclick=function(){var h=document.querySelectorAll('[data-x]'),s=h[0].hidden;h.forEach(function(x){x.hidden=!s});pm.textContent=s?'Show fewer projects':'Show all projects'};
var root=document.documentElement;
document.getElementById('tt').onclick=function(){var t=root.dataset.theme=='dark'?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}};
var bg=document.getElementById('bg'),mn=document.getElementById('mn');
bg.onclick=function(){bg.setAttribute('aria-expanded',mn.classList.toggle('open'))};
mn.addEventListener('click',function(e){if(e.target.tagName=='A'){mn.classList.remove('open');bg.setAttribute('aria-expanded',false)}});
var md=document.getElementById('md'),mb=document.getElementById('mb');
function cl(){md.classList.remove('open');mb.innerHTML=''}
document.addEventListener('click',function(e){var b=e.target.closest('button.m');if(b){mb.innerHTML='<img src="'+b.dataset.src+'" alt="">';md.classList.add('open');document.getElementById('mc').focus()}else if(e.target===md)cl()});
document.getElementById('mc').onclick=cl;addEventListener('keydown',function(e){if(e.key=='Escape')cl()});
