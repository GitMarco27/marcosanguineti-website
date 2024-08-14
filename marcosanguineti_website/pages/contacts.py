import os

import streamlit as st

from marcosanguineti_website.pages import page


class ContactsPage(page.Page):
    configuration: page.PageConfiguration = page.PageConfiguration(
        title="Contacts",
        icon="💬",
        url_path="/contacts",
        default=False,
    )

    def render(self):
        st.title("Contacts")
        st.header(":mailbox: Get In Touch With Me!")

        formsubmit_key = os.getenv("FORMSUBMIT_KEY")

        contact_form = f"""
        <form action="https://formsubmit.co/{formsubmit_key}" method="POST">
            <input type="hidden" name="_captcha value="false">
            <input type="text" name="name" placeholder="Your name" required>
            <input type="email" name="email" placeholder="Your email" required>
            <textarea name="message" placeholder="Your message here" required></textarea>
            <button type="submit">Send</button>
        </form>
        """
        st.markdown(contact_form, unsafe_allow_html=True)
