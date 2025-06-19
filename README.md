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
