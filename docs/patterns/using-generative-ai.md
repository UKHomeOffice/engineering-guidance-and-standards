---
layout: pattern
order: 1
title: Using generative AI
date: 2023-09-08
tags: 
  - Generative AI
  - Artificial intelligence (AI)
  - Source management
  - Secure development
  - Ways of working
---

Chatbots which utilise [generative Artifical Intelligence (AI)](https://www.gartner.com/en/topics/generative-ai) have exploded in public popularity with the release of ChatGPT from the OpenAI group. These services use large language model (LLM) machine learning to train a chat bot to respond to questions in a real life manner. 

A lot of the current popular chat bots utilise the GPT3 language model (Generative Pre-trained Transformer, released in 2020), this is specifically designed to generate human-like text for chatbot applications. This, and more recent machine learning and artificial intelligence, is becoming baked into services we use on a daily basis. For example:

- ChatGPT
- Google Bard
- StableDiffusion 
- GitHub Copilot
- Amazon Lex
- Bing Search AI

The capability of LLMs and generative AI is predicated on storing and feeding models with large amounts of real life data, which might include subsequent questions asked of it since going live. As the functionality of the models is largely opaque, and assurance of data confidentiality is not always assured, [use of these services potentially introduces risks to the governance of Home Office data, information and processes](https://www.ncsc.gov.uk/blog-post/chatgpt-and-large-language-models-whats-the-risk).

In addition to this, some of these services can generate or examine code, to provide suggested solutions. While there is a potential benefit to AI assisted development, care needs to be taken with what code is provided to the service, and how the assistance is assured for quality control.

---

## Solution

With this in mind there are some guidelines that engineers in Home Office must keep in mind when dealing with, asking questions and sending data to any of these services. This should be considered alongside [Cabinet Office guidance on using generative AI](https://www.gov.uk/government/publications/guidance-to-civil-servants-on-use-of-generative-ai/guidance-to-civil-servants-on-use-of-generative-ai).

- You MUST NEVER enter sensitive data, information, processes or secrets into a 3rd party hosted generative AI service
- Do not ask questions related to unreleased policy
- Keep in mind that these sites could host their data anywhere
- Never put in any code unless that code is already open sourced
- Never send code that is related to anti-forgery or security related processes

When using generative AI services to generate code. 

- Take care to not expose internal business processes, technology, configuration or secrets in prompts - if necessary, abstract problems sufficiently to avoid specifics needing to be used
- Tag generated code blocks with some tagging scheme
- [Be aware of the potential for data poisoning](https://www.ncsc.gov.uk/blog-post/thinking-about-security-ai-systems). Do not explicitly trust generated code - it must be subject to regular peer review as with any other written code
- You are responsible for all code you commit, regardless of how it has been created or generated

---
