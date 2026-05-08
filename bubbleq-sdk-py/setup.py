from setuptools import setup

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setup(
    name="bubbleq-sdk", 
    version="1.0.0",
    author="Mikol838",
    author_email="github22.retaliate644@passmail.com",
    description="Official Python SDK for the Bubbleq Intelligence Gateway.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/Mikol838/bubbleq-agents",
    py_modules=["bubbleq_sdk", "bubbleq_langchain"],
    install_requires=[
        "requests>=2.25.1",
        "pydantic"
    ],
    extras_require={
        "test": ["pytest", "responses", "langchain-core"]
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3.7",
)
