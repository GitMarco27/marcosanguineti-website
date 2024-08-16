# Start with a base image that includes Python 3.11
FROM python:3.11-slim

# Install system dependencies required for Poetry and npm
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    lsb-release \
    && rm -rf /var/lib/apt/lists/*

# Install Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# Make sure Poetry is in the PATH
ENV PATH="${PATH}:/root/.local/bin"

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest

# Create a directory for the app
WORKDIR /app

# Copy your application code
COPY . /app

# Install Python dependencies
RUN poetry install

# Build custom components
RUN sh scripts/build_components.sh

# Expose a port if your application uses it
EXPOSE 8501

# Command to run your application
CMD ["poetry", "run", "python", "-m", "streamlit", "run", "app.py"]
