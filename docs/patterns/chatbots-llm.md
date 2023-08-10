---
layout: pattern
order: 1
title: Chatbots and large learning models
date: git Last Modified
tags: # use `tags: []` for no tags, "Patterns" tag is included automatically
  - chatbots
  - AI
  - LLM

---

<!-- Pattern description -->

When and how to securely and safely use LLM in the workplace.

<!-- 
# Notes on using links

Internal links need to follow this format:
[link text to internal page]({{ '/standards/writing-a-standard/' | url }})
Note the use of the `url` filter. This ensures the link is appended to the base URL of the webpage correctly.

External links follow standard markdown formatting:
[link text to external page](https://example.com)
-->

---

## Solution
Chat bots have exploded in public popularity with the release of ChatGPT from OpenAI group. 
These services use large learning model machine learning to train a chat bot to respond to questions in a real life manner.
The whole service is predicated on storing and feeding the model with huge amounts of real life data, which includes subsequent questions asked of it since going live.

A lot of the current popular chat bots utilise the GPT3 (Generative Pre-trained Transformer, released in 2020) language model specifically designed to generate human-like text for chatbot applications.

Some other chat bot services include:

- Google's Bard Chatbot
- ChatSonic 
- YouChat
- Amazon Lex
- Bing Search AI

This machine learning and artificial intelligence is also becoming baked into services we use on a daily basis.  Services like Microsoft Bing search and IDE applications like GitHub CoPilot.

---

## Considerations

With this in mind there are some guidelines that engineers in Home Office must keep in mind when dealing with, asking questions and sending data to any of these services.

- You MUST NEVER put secrets into a 3rd party hosted site.
- Do not enter sensitive data or information.
- Do not ask questions related to un-released policy.
- Keep in mind that these sites could host their data anywhere.
- Never put in any code unless that code is already open sourced.
- Never send code that is related to anti-forgery or security related processes.

Some of these services are also able to generate code for you. 

- Take care to not expose internal business processes, technology, configuration or secret in prompts - if necessary abstract problems sufficiently to avoid specifics needing to be used.
- Tag generated code blocks with some tagging scheme.
- Do not explicitly trust generated code - it must be subject to regular peer review as with any other written code.
- You are responsible for all code you commit, regardless of how it has been created or generated.

---

