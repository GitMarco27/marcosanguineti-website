import dotenv
import streamlit as st
from loguru import logger

from marcosanguineti_website import ContactsPage, HomePage
from marcosanguineti_website.settings import PathSettings
from marcosanguineti_website.utils import load_css

if __name__ == "__main__":
    st.set_page_config(
        page_title="Marco Sanguineti WebSite",
        layout="wide",
        initial_sidebar_state="expanded",
    )

    load_css()

    if not dotenv.load_dotenv():
        logger.info("No .env file found. Looking into /etc/secrets/")
        dotenv.load_dotenv(dotenv_path=PathSettings.RENDER_ENV_PATH)

    homepage = HomePage()
    contacts = ContactsPage()

    pg = st.navigation(
        pages=[
            homepage.get_page(),
            contacts.get_page(),
        ]
    )

    pg.run()
