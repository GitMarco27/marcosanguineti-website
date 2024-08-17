import streamlit as st

from marcosanguineti_website.pages import page
from marcosanguineti_website.settings import PathSettings, PersonalInfo
from marcosanguineti_website.utils import load_html_component, load_profile_pic


class HomePage(page.Page):
    configuration: page.PageConfiguration = page.PageConfiguration(
        title="Homepage",
        icon="🏡",
        url_path="/",
        default=True,
    )

    def render(self):
        with open(PathSettings.RESUME_PATH, "rb") as pdf_file:
            pdf_byte = pdf_file.read()

        load_profile_pic()

        st.markdown(
            f"<h1 style='text-align: center;'>{PersonalInfo.name}</h1>",
            unsafe_allow_html=True,
        )
        st.markdown(
            f"<h4 style='text-align: center;'>{PersonalInfo.description}</h4>",
            unsafe_allow_html=True,
        )

        load_html_component(PathSettings.SRC_DIR / "contacts.html")
        st.markdown("#####")
        st.download_button(
            label=" 📄 Download Resume",
            data=pdf_byte,
            file_name=PathSettings.RESUME_PATH.name,
            mime="application/octet-stream",
            use_container_width=True,
        )

        st.divider()

        st.info(
            "This website is a work in progress. For any question, please refer to "
            "**marcosanguineti.com/contacts**",
            icon="⚠️",
        )
