import base64
from pathlib import Path

import streamlit as st

from marcosanguineti_website.settings import PathSettings


def load_css():
    with open(PathSettings().CSS_PATH, "r", encoding="utf-8") as f:
        css = f"<style>{f.read()}</style>"
        st.markdown(css, unsafe_allow_html=True)


def load_html_component(path: Path, use_markdown: bool = True):
    with open(path, "r", encoding="utf-8") as f:
        if use_markdown:
            st.markdown(f.read(), unsafe_allow_html=True)
        else:
            st.html(f.read())


def load_profile_pic():
    image_path = PathSettings.PIC_PATH

    with open(image_path, "rb") as f:
        contents = f.read()

    data_url = base64.b64encode(contents).decode("utf-8")

    st.markdown(
        f"""
        <style>
            .center {{
                text-align: center;

            }}
            .image {{
                display: block;
                margin-left: auto;
                margin-right: auto;
                max-width: 100%;
                height: auto;
                transform: translateX(-10px);
            }}

        </style>
        <div class="center">
            <img src="data:image/png;base64,{data_url}" class="image" alt="Profile Picture">
        </div>
        """,
        unsafe_allow_html=True,
    )
