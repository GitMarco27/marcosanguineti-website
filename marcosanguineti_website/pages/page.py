import streamlit as st
from pydantic import BaseModel


class PageConfiguration(BaseModel):
    title: str | None = None
    icon: str | None
    url_path: str | None = None
    default: bool = False


class Page(BaseModel):
    configuration: PageConfiguration

    def render(self):
        st.warning(f"Page {self.title} not implemented")

    def get_page(self):
        return st.Page(
            page=self.render,
            title=self.configuration.title,
            icon=self.configuration.icon,
            url_path=self.configuration.url_path,
            default=self.configuration.default,
        )
