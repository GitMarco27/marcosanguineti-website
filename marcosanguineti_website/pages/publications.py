import streamlit as st

from marcosanguineti_website.components import publications_gallery_component
from marcosanguineti_website.pages import page


class PublicationsPage(page.Page):
    configuration: page.PageConfiguration = page.PageConfiguration(
        title="Publications",
        icon="📚",
        url_path="/publications",
        default=False,
    )

    def render(self):
        st.title("📚 Publications")
        publications_gallery_component()
