import streamlit as st

from marcosanguineti_website.components import repos_gallery_component
from marcosanguineti_website.pages import page


class RepositoriesPage(page.Page):
    configuration: page.PageConfiguration = page.PageConfiguration(
        title="Github Repositories",
        icon="💾",
        url_path="/repos",
        default=False,
    )

    @st.fragment
    def render(self):
        st.title("💾 Github Repositories")
        repos_gallery_component()
