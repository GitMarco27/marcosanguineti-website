from pathlib import Path

from pydantic import BaseModel

from marcosanguineti_website.pages.contacts import ContactsPage
from marcosanguineti_website.pages.homepage import HomePage

__all__ = [
    "ContactsPage",
    "HomePage",
    "PathSettings",
]


class PathSettings(BaseModel):
    BASE_DIR: Path = Path(__file__).parent.parent
    STATIC_DIR: Path = BASE_DIR / "static"
    CSS_PATH: Path = STATIC_DIR / "styles.css"
    RENDER_ENV_PATH: Path = Path("/etc/secrets/.env")
