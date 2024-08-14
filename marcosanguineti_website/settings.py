from pathlib import Path


class PathSettings:
    BASE_DIR: Path = Path(__file__).parent.parent

    STATIC_DIR: Path = BASE_DIR / "static"

    CSS_PATH: Path = STATIC_DIR / "styles.css"
    PIC_PATH: Path = STATIC_DIR / "ms.png"
    RESUME_PATH: Path = STATIC_DIR / "resume_latest.pdf"

    RENDER_ENV_PATH: Path = Path("/etc/secrets/.env")


class PersonalInfo:
    name: str = "Marco Sanguineti"
    email: str = "marco.sanguineti.info@gmail.com"
    description: str = "AI Engineer | Senior Python Dev"
