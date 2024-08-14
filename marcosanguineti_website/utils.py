from pathlib import Path

import streamlit as st

from marcosanguineti_website.settings import PathSettings


def load_css():
    with open(PathSettings().CSS_PATH, "r", encoding="utf-8") as f:
        css = f"<style>{f.read()}</style>"
        st.markdown(css, unsafe_allow_html=True)


def load_html_component(path: Path):
    with open(path, "r", encoding="utf-8") as f:
        st.markdown(f.read(), unsafe_allow_html=True)
