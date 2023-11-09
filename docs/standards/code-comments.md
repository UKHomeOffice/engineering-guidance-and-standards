---
layout: standard
order: 1
title: Code Comments
date: 2023-10-18
id: SEGAS-TBC
tags:
  - Documentation
  - Ways of working
related:
  sections:
    - title: Related links
      items:
        - text: Minimal documentation set for a product
          href: /standards/minimal-documentation-set-for-a-product/
---

These Code Commenting Guidelines are designed to ensure that code is documented at a minimum standard, making it easy for new engineers to quickly get up to speed and preventing the isolation of knowledge within the team. By following these guidelines, you help streamline the onboarding process for new team members, ensuring that code is accessible and understandable. 

This standard promotes effective communication and knowledge sharing within the team, ultimately contributing to the overall success of the project.

---

## Requirement(s)

- [Comments MUST be enhance code comprehension and maintainability.](#comments-must-enhance-code-comprehension-and-maintainability)
- [Comments MUST be explanatory, not merely descriptive, and use concise, fully-formed sentences.](#comments-must-be-explanatory-not-merely-descriptive-and-use-concise-fully-formed-sentences)
- [Comments MUST add value to the understanding and readability of the code.](#comments-must-add-value-to-the-understanding-and-readability-of-the-code)
- [Comments MUST adhere to a documented standard, such as Docblock, and include all necessary information.](#comments-must-adhere-to-a-documented-standard-such-as-docblock-and-include-all-necessary-information)
- [Comments MUST use neutral, unopinionated language and remain applicable and relevant after a code refactor.](#comments-must-use-neutral-unopinionated-language-and-remain-applicable-and-relevant-after-a-code-refactor)
- [Comments MUST NOT be present in production deployments.](#comments-must-not-be-present-in-production-deployments)
- [Comments MUST NOT be duplicated or be used as a substitute for deleting code.](#comments-must-not-be-duplicated-or-be-used-as-a-substitute-for-deleting-code)
- [Comments MUST NOT contain sensitive data, such as API keys, tokens, etc.](#comments-must-not-contain-sensitive-data-such-as-api-keys-tokens-etc)

### Comments MUST enhance code comprehension and maintainability.

The placement of comments is essential for code comprehensibility and maintainability. Comments should be thoughtfully positioned to explain complex logic, significant decision points, or any non-trivial functionality.

Positioning comments at the top of files, above structural elements, or before specific code sections assists both newcomers and existing team members in understanding the code's purpose. This fosters a collaborative environment, ensuring seamless knowledge transfer and facilitating effective contributions from colleagues to the project.

#### Positive Example
```
"""
This function calculates the total price of items in the shopping cart.

:param cart: The shopping cart as a list of items.
:return: The total price as a float.
"""
def calculate_total_price(cart):
    total_price = 0.0
    for item in cart:
        total_price += item.price
    return total_price
```

#### Negative Example
```
def calculate_total_price(cart):
    # This function calculates the total price
    total_price = 0.0
    for item in cart:
        total_price += item.price
    return total_price
```

### Comments MUST be explanatory, not merely descriptive, and use concise, fully-formed sentences.

The use of language in your comments is essential for effective communication. Comments should serve the purpose of explaining the reasoning behind the code rather than solely describing its functionality. They should be clear, concise, and composed of fully-formed sentences.

This practice ensures that readers can grasp the code's intent without any ambiguity. Concise and explanatory comments contribute to enhanced code readability and easier maintenance. Developers, including yourself, can better understand the context and logic behind code segments, reducing the likelihood of misinterpretation and errors.

#### Positive Example
```
"""
Calculates the factorial of a given integer.

This function takes an integer as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n.

:param n: The non-negative integer for which to calculate the factorial.
:return: The factorial of the input integer.
"""
def calculate_factorial(n):
    if n < 0:
        return "Input must be a non-negative integer."
    elif n == 0:
        return 1
    else:
        factorial = 1
        for i in range(1, n + 1):
            factorial *= i
        return factorial
```

#### Negative Example
```
"""
This function computes the factorial of an integer, n.

This function takes an integer, n, as input and calculates its factorial. The factorial is calculated for any non-negative integer, denoted as n!, which is found by multiplying all the positive integers less than or equal to n. If the input, n, is negative, an error message is returned. Otherwise, the factorial is calculated using a loop.

:param n: An input integer, which should be a non-negative integer.
:return: The output of the function is the factorial of the provided integer.
"""
def calculate_factorial(n):
    if n < 0:
        return "An error has occurred. The input should be a non-negative integer."
    elif n == 0:
        return 1
    else:
        factorial = 1
        for i in range(1, n + 1):
            factorial *= i
        return factorial
```

### Comments MUST add value to the understanding and readability of the code.

Comments that provide value are essential for code documentation. Comments should not be added thoughtlessly but should genuinely enhance the codebase.

Each comment should contribute to the reader's understanding of the code by providing insights or explanations that might not be immediately evident from the code itself. Value-added comments act as a bridge between the code's functionality and the developer's comprehension, improving accessibility and efficiency for both current and future team members.

#### Positive Example
```
"""
This function validates user passwords.

This function takes a password as input and checks if it meets security requirements, including minimum length, the presence of both uppercase and lowercase letters, and the use of special characters.

:param password: The user's input password.
:return: True if the password meets security requirements, False otherwise.
"""
def validate_password(password):
    # Validation logic here
```

#### Negative Example
```
"""
This function validates user passwords.

:param password: The user's input password.
:return: True if the password is valid, False if it's not.
"""
def validate_password(password):
    # Check if the password is valid
```

### Comments MUST adhere to a documented standard, such as Docblock, and include all necessary information.

Adhering to a documented standard in your comments can assist in achieving consistency and comprehensiveness. Following established standards, like Docblock, helps harmonize the commenting style across the codebase, simplifying navigation and comprehension for all team members.

Furthermore, comments should encompass all pertinent information, including parameter descriptions, return values, and function or class descriptions. This practice ensures that any developer reviewing the code possesses all the necessary details to use, modify, or maintain it effectively, reducing the necessity for time-consuming back-and-forths or investigations.

#### Docblock Information
- [Docblock - Wikipedia](https://en.wikipedia.org/wiki/Docblock)

##### Language Specific Links (for reference only)
- [JavaDoc](https://www.oracle.com/uk/technical-resources/articles/java/javadoc-tool.html)
- [JSDoc](https://developer.adobe.com/commerce/php/coding-standards/js-docblock/)
- [TSDoc](https://tsdoc.org/)
- [Python Doc String](https://pandas.pydata.org/docs/development/contributing_docstring.html)

#### Positive Example
```
"""
Calculates the factorial of a given integer.

This function takes an integer as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n.

:param n: The non-negative integer for which to calculate the factorial.
:return: The factorial of the input integer.
"""
def calculate_factorial(n):
    # Factorial calculation logic here
```

#### Negative Example
```
"""
Calculate factorial, takes a param called `n` which is a number to compute the returned factorial.
"""
def calculate_factorial(n):
    # Logic to compute the factorial
```

### Comments MUST use neutral, unopinionated language and remain applicable and relevant after a code refactor.

The use of neutral language and ensuring post-refactor relevance in comments is essential for long-term code sustainability. Comments should avoid personal opinions, subjectivity, or emotional language. They should maintain a neutral and factual tone to enable consistent communication.

Furthermore, comments should remain pertinent even after code refactors or modifications. This practice ensures that the information conveyed in the comments stays accurate and valuable as the codebase undergoes changes, thereby reducing the risk of confusion and errors during future modifications.

#### Positive Example
```
"""
Calculates the total price of items in the shopping cart.

This function takes a shopping cart as input and calculates the total price. It iterates through the cart items and sums their prices. The code is designed to work efficiently with various cart structures.

:param cart: The shopping cart as a list of items.
:return: The total price as a float.
"""
def calculate_total_price(cart):
    total_price = 0.0
    for item in cart:
        total_price += item.price
    return total_price
```

#### Negative Example
```
"""
This function calculates the total price in a smart way.

This function takes a list of items as input and computes the total price in a highly efficient manner. It's the best way to do this, and it's really smart. You'd be crazy to change it.

:param items: The list of items.
:return: The total price, and trust me, it's the best way to do it.
"""
def smart_price_calculation(items):
    total = 0.0
    for item in items:
        total += item.price
    return total
```

### Comments MUST NOT be present in production deployments.

Comments in production deployments present potential security and performance risks. They can unintentionally expose sensitive information, such as API keys or debugging details, to unauthorized individuals. Additionally, comments may have a marginal impact on the code's size, which can affect performance in production environments.

It is important to ensure that no comments are included in production code to mitigate these issues. The removal of comments from production code enhances security and optimizes code performance, ultimately leading to an improved user experience.

#### Tools (for reference only)
- **React/JavaScript/TypeScript/Node:**
  - [Terser](https://terser.org/)
  - [Babel](https://babeljs.io/)

- **HTML/CSS:**
  - [HTML Minifier](https://www.npmjs.com/package/html-minifier)
  - [CSS Minifier](https://www.npmjs.com/package/css-minify)

#### Example
```
# This is a development comment that provides insights for developers.
def calculate_price(item):
    # Calculate the price based on item properties
    return item.base_price * item.discount

# In production code, comments are removed to enhance performance and security.
def calculate_price(item):
    return item.base_price * item.discount
```

### Comments MUST NOT be duplicated or be used as a substitute for deleting code.

Duplication of comments and using comments as a replacement for code deletion can impact code cleanliness. Developers are encouraged to steer clear of duplicating comments across various code sections, as it may result in inconsistencies when modifications are required. Rather than adding a comment to elucidate outdated or unnecessary code, it is advisable to remove the unused code entirely.

Replacing code deletion with comments can introduce confusion and clutter within the codebase. Ensuring that comments are employed for authentic explanations and not as a workaround for code removal contributes to a cleaner and more maintainable codebase.

#### Positive Example
```
"""
This function calculates the area of a rectangle.

:param length: The length of the rectangle.
:param width: The width of the rectangle.
:return: The area of the rectangle.
"""
def calculate_rectangle_area(length, width):
    return length * width
```

#### Negative Example
```
"""
This function calculates the area of a rectangle.

:param length: The length of the rectangle.
:param width: The width of the rectangle.
:return: The area of the rectangle.
"""
def calculate_rectangle_area(length, width):
    # Calculate the area of the rectangle
    return length * width
    # return width * length # Not used
```

### Comments MUST NOT contain sensitive data, such as API keys, tokens, etc.

Avoiding sensitive data in comments is a fundamental security practice. Storing confidential information, such as API keys or tokens, within comments can pose substantial security risks. Comments are typically part of the source code repository and may be accessible to unauthorized individuals.

To safeguard sensitive data and maintain the security of your application, it's essential to refrain from including such information within comments. Instead, it's advisable to utilize secure and designated storage mechanisms for sensitive data, guaranteeing the functionality and security of your code.

#### Good Example
```
"""
Connect to the database using secure credentials.

This function establishes a database connection using secure credentials stored in a separate, protected configuration file. Sensitive data, such as database usernames and passwords, are not exposed in comments or within the source code.

:return: A database connection object.
"""
def connect_to_database():
    # Database connection logic here
```

#### Bad Example
```
"""
Connect to the database using username 'my_user' and password 'my_password'.

This function establishes a database connection using hard-coded sensitive data within the comment itself. Storing sensitive data in this manner is a security risk and should be avoided.

:return: A database connection object.
"""
def connect_to_database():
    # Database connection logic here
```
