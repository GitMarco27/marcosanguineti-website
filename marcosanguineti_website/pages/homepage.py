import streamlit as st

from marcosanguineti_website.pages import page


class HomePage(page.Page):
    configuration: page.PageConfiguration = page.PageConfiguration(
        title="Homepage",
        icon="🏡",
        url_path="/",
        default=True,
    )

    def render(self):
        st.title("Marco Sanguineti")
        st.header("AI Enginner")

        st.subheader("⚙️ WORK IN PROGRESS ⚙️")
        st.balloons()
