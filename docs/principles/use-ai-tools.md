---
layout: principle
order: 1
title: Use AI tools in Home Office Digital product teams
date: 2026-05-18
tags:
- Artifical intelligence (AI)
- Ways of working
---

When you design and build products in Home Office Digital, you should use generative AI to save time, be more efficient and test your code for bugs and errors.

---

## Rationale

The main ways Home Office Digital product teams are already using generative AI as tooling assistants are to:

-	automatically complete code they write manually
-	write small pieces of code for specific functions, manually reviewing the code that generative AI helps to create
-	work in the style of a product owner, letting generative AI take the developer role and work as an agent to create software 
-	generate summaries of GitHub pull requests
-	create small pieces of content, such as README files

You should experiment with the most effective ways you can use AI in your work.

---

## Applications and Implications

### Use GitHub Copilot in your code editor

#### Before you can use GitHub Copilot 

To use a GitHub Copilot license, you need a GitHub account that is suitable to use in the Home Office. You can sign up to GitHub using [GitHub’s own signup service](https://github.com/signup), but to be suitable for the Home Office, your account must:

-	link to your Home Office email address
-	contain your name or Home Office user ID  
-	be an account you intend to use to work with code repos in the [UKHomeOffice repo](https://github.com/UKHomeOffice)

#### Set up GitHub Copilot

You need a license to access GitHub Copilot. You can get a license by requesting one from the Home Office Digital IT service desk's self-service platform.

You should read self-help setup and acceptable use policy documentation on the Home Office Digital IT service desk's self-service platform.

When you have applied for a GitHub Copilot license, a member of the engineering team will manually process your application.

You will receive an email inviting you to join the [Home Office enterprise](https://github.com/enterprises/ukhomeoffice) on GitHub. This should arrive within 24 hours, but if it doesn’t, contact the CoPilot Enterprise Users SAS team on the Home Office enterprise.

When you have joined the Home Office enterprise on GitHub, a member of the engineering team will add you to the “copilot-enterprise-users-sas”  team on the Home Office enterprise.

You will receive an email confirming your access to GitHub Copilot. The email will give you links to Getting Started guides on how to install the GitHub Copilot extension for Visual Studio Code, Visual Studio, JetBrains, Vim or Neovim, Eclipse and Xcode.

**At the moment, the Home Office does not support other code editors for GitHub Copilot in the Home Office, but this could change in the future.**

**GitHub Copilot does not currently support SCIM integration, but this could change in the future.** 


### Ways you can use GitHub Copilot

Engineers across Home Office Digital and the wider Home Office are using GitHub Copilot in many ways, from simple, everyday additions to the way they already work, to experimental projects.

At the moment, most Home Office Digital engineers use GitHub Copilot in their integrated development environment (IDE).

Some use cases include using GitHub Copilot to:

-	find and fix errors and vulnerabilities in existing code
-	trial more complex code development, where an engineer or team gives GitHub Copilot a code specification, and it is allowed to code on its own
-	use documentation as prompts; building Copilot prompts directly from documentation, to help service design and prompts work closely together
-	write simple prompts to convert [JSON](https://en.wikipedia.org/wiki/JSON) files into clear data lists
-	convert and restructure documentation into interactive websites, complete with AI-generated chapters and sections, as well as suggestions for related topics for a user to read
-	use agents to read documentation and train itself on the information it finds, which helps to validate the way users interact with documentation
-	use Copilot to review code and feed its review back to an engineer who supervises
-	work with a business analyst (BA) to create and iterate wireframes together, rather than an engineer having to send changes to a wireframe back to a business analyst to work on alone
-	test Jira cards to find defects and help create actions to fix problems, as well as checking acceptance criteria across all stories in an epic to see how they relate to each other
-	write a simple agentic AI tool  to connect to Jira and summarise tickets

You can find more suggestions of ways to code with GitHub Copilot by:
- reading [GitHub’s code suggestions for using it in your IDE](https://docs.github.com/en/copilot/how-tos/get-code-suggestions/get-ide-code-suggestions?tool=vscode)
- visiting the [AI.GOV.UK Knowledge Hub](https://ai.gov.uk/knowledge-hub/)
- joining the [cross-government AI Knowledgehub site](https://khub.net/welcome?p_p_state=maximized&p_p_mode=view&refererPlid=723528807&_com_liferay_login_web_portlet_LoginPortlet_mvcRenderCommandName=%2Flogin%2Flogin&saveLastPath=false&p_p_id=com_liferay_login_web_portlet_LoginPortlet&p_p_lifecycle=0&_com_liferay_login_web_portlet_LoginPortlet_redirect=%2Fgroup%2Fai-engineering-lab%2Fgroup-home)  
