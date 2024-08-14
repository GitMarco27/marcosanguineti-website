import streamlit as st

from marcosanguineti_website import PathSettings


def load_css():
    with open(PathSettings().CSS_PATH, "r", encoding="utf-8") as f:
        css = f"<style>{f.read()}</style>"
        st.markdown(css, unsafe_allow_html=True)
