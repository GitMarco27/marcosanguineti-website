import streamlit as st

from marcosanguineti_website.pages import page
from marcosanguineti_website.settings import PathSettings
from marcosanguineti_website.utils import load_html_component


class WorkExperiencePage(page.Page):
    configuration: page.PageConfiguration = page.PageConfiguration(
        title="Work Experience",
        icon="👨🏼‍💻",
        url_path="/workexperience",
        default=False,
    )

    def render(self):
        st.title("👨🏼‍💻 Work Experience")
        load_html_component(
            PathSettings.SRC_DIR / "work_experience.html", use_markdown=False
        )
