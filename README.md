This repository hosts the tutorial and template code for building a basic Jupyter Book website.Add commentMore actions
# Information Visualisation

Jupyter Book waarin het gamegedrag en de studieprestaties van studenten worden gevisualiseerd,
gebaseerd op verschillende datasets. Voor meer informatie over de bronnen en het opschonen van de data,
zie de pagina [Dataset en Voorbewerking](./docs/dataset-preprocessing.md).

# Inhoudsopgave

- [Information Visualisation: Gaming & Studie](#information-visualisation-gaming--studie)
- [Inhoudsopgave](#inhoudsopgave)
- [Aan de slag](#aan-de-slag)
- [Structuur](#structuur)
- [Gebruik](#gebruik)
- [Publiceren](#publiceren)
- [Dataset cleaning scripts](#dataset-cleaning-scripts)
- [Auteurs](#auteurs)

# Aan de slag

```bash
git clone git@github.com:EfeKarataz/Information-Visualization-Group-7.git
cd Information-Visualization-Group-7
pip3 install -r requirements.txt
```

Installeer daarnaast `conda` om een lokale omgeving op te zetten:
- [Installatie op MacOS](https://docs.conda.io/projects/conda/en/latest/user-guide/install/macos.html)
- [Installatie op Windows](https://docs.conda.io/projects/conda/en/latest/user-guide/install/windows.html)
- [Installatie op Linux](https://docs.conda.io/projects/conda/en/latest/user-guide/install/linux.html)

Als je `jupyter` niet lokaal hebt, installeer dit dan met: `pip3 install jupyter`

# Structuur

```
.
├── LICENSE             # Licentie
├── README.md           # Projectinformatie en instructies
├── _build              # Jupyter build voor deployment
├── _config.yml         # Jupyter configuratie
├── _toc.yml            # Inhoudsopgave configuratie
├── data                # Datasets en cleaning scripts
├── docs                # Te publiceren bestanden via GitHub Pages
├── notebooks           # Alle notebooks met visualisaties
├── requirements.txt    # Projectafhankelijkheden
├── scripts             # Scripts voor deployment of cleaning
└── static              # Afbeeldingen, css, js
```

# Gebruik

Start de notebooks met `jupyter notebook` in de hoofdmap. Alle notebooks voor het dataverhaal
staan in de `notebooks` map. Houd het overzichtelijk door per visualisatie één notebook te gebruiken.

Het hoofdverhaal staat in `./notebooks/story.ipynb`. Andere visualisaties kun je inladen met:
`%run naam_van_notebook.ipynb`. Alleen de output van de laatste cel wordt weergegeven.

# Publiceren

Gebruik het script `./scripts/deploy.sh` om de site te publiceren via GitHub Pages. Dit bouwt het project
en voegt metadata toe aan `story.ipynb` om inputcellen te verbergen.

# Dataset cleaning scripts

Klik [hier](./scripts/cleaning/) om de scripts te bekijken die zijn gebruikt voor het opschonen van de datasets.

# Auteurs
- Efe Karataz
- Samim Amdam
- Sharjeel Mohammad
- Zi Cheng Sunny Li

# Boxplot: Exam Score per Internet Access

Deze visualisatie toont de spreiding van tentamencijfers (Exam Score) per toegang tot internet.

```{code-cell} python
import pandas as pd
import plotly.express as px

# Simuleer een voorbeeld (vervang dit door echte data als je wilt)
df1 = pd.DataFrame({
    "Internet_Access": ["Yes", "No", "Yes", "No", "Yes", "No"] * 5,
    "Exam_Score": [75, 60, 80, 55, 90, 50, 65, 70, 85, 45, 95, 40, 88, 48, 77, 53, 66, 44, 92, 39, 79, 59, 83, 43, 68, 52, 74, 57, 81, 47]
})

# Filter exam scores tussen 0 en 100
df1 = df1[(df1["Exam_Score"] >= 0) & (df1["Exam_Score"] <= 100)]

# Maak de boxplot
fig = px.box(
    df1,
    x="Internet_Access",
    y="Exam_Score",
    title="Exam Score per Internet Access"
)

fig.update_layout(
    width=800,
    height=700,
    xaxis_title="Internet Access",
    yaxis_title="Exam Score",
    plot_bgcolor="white",
    xaxis=dict(showgrid=True, gridcolor="lightgrey"),
    yaxis=dict(showgrid=True, gridcolor="lightgrey")
)

fig.show()
```
