---
title: "std::basic_regex<CharT,Traits>::basic_regex"
source_path: "cpp/regex/basic_regex/basic_regex"
category: "regex"
since: "C++11"
---

Constructs a new regular expression from a sequence of characters interpreted according to the flags f.

## Declarations
```cpp
basic_regex();
```
_(since C++11)_

```cpp
explicit basic_regex( const CharT* s,
flag_type f = std::regex_constants::ECMAScript );
```
_(since C++11)_

```cpp
basic_regex( const CharT* s, std::size_t count,
flag_type f = std::regex_constants::ECMAScript );
```
_(since C++11)_

```cpp
basic_regex( const basic_regex& other );
```
_(since C++11)_

```cpp
basic_regex( basic_regex&& other ) noexcept;
```
_(since C++11)_

```cpp
template< class ST, class SA >
explicit basic_regex( const std::basic_string<CharT,ST,SA>& str,
flag_type f = std::regex_constants::ECMAScript );
```
_(since C++11)_

```cpp
template< class ForwardIt >
basic_regex( ForwardIt first, ForwardIt last,
flag_type f = std::regex_constants::ECMAScript );
```
_(since C++11)_

```cpp
basic_regex( std::initializer_list<CharT> init,
flag_type f = std::regex_constants::ECMAScript );
```
_(since C++11)_

## Parameters
- `s`: pointer to a null-terminated string
- `count`: length of a character sequence used to initialize the regex
- `first, last`: range of a character sequence used to initialize the regex
- `str`: a basic_string used as a source used to initialize the regex
- `other`: another regex to use as source to initialize the regex
- `init`: initializer list used to initialize the regex
- `f`: flags used to guide the interpretation of the character sequence as a regular expression

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <regex>
#include <string>
 
void match_and_print(const std::string& text, const std::regex& pattern)
{
    std::sregex_iterator it(text.begin(), text.end(), pattern), it_end;
    int count = 0;
    for (; it != it_end; ++it)
    {
        const std::smatch& match = *it;
        std::cout << ++count << ". " << std::quoted(match.str()) << '\n';
    }
    std::cout << (count ? "\n" : "no match found\n\n");
}
 
int main()
{
    const std::string text = "Hello, World! 12345";
 
    // Matches one or more digits
    std::string pattern_text = "\\d+";
    std::cout << "digits (" << pattern_text << "):\n";
    auto pattern = std::regex(pattern_text);
    match_and_print(text, pattern);
 
    // Matches one or more characters split by space
    pattern_text = "[^\\s]+";
    std::cout << "words (" << pattern_text << "):\n";
    pattern = std::regex(pattern_text);
    match_and_print(text, pattern);
 
    // Matches one or more characters split by space
    pattern_text = "[a-zA-Z]+";
    std::cout << "words without symbols and digits (" << pattern_text << "):\n";
    pattern = std::regex(pattern_text);
    match_and_print(text, pattern);
 
    // Matches one non digits, non alphabet
    pattern_text = "[^0-9A-Za-z]";
    std::cout << "symbol (" << pattern_text << "):\n";
    pattern = std::regex(pattern_text);
    match_and_print(text, pattern);
 
    // Matches one or more lowercase
    pattern_text = "[a-z]+";
    std::cout << "lowercase (" << pattern_text << "):\n";
    pattern = std::regex(pattern_text);
    match_and_print(text, pattern);
 
    // Matches one or more lowercase with std::regex::icase flag
    pattern_text = "[a-z]+";
    std::cout << "lowercase with ignore case flag (" << pattern_text << "):\n";
    pattern = std::regex(pattern_text, std::regex::icase);
    match_and_print(text, pattern);
 
    // Matches basic POSIX regular expression
    pattern_text = "[[:digit:]]+";
    std::cout << "basic POSIX regex (" << pattern_text << "):\n";
    pattern = std::regex(pattern_text, std::regex::basic);
    match_and_print(text, pattern);
 
    // Matches extended POSIX regular expression
    pattern_text = "[[:digit:]]+";
    std::cout << "extended POSIX regex (" << pattern_text << "):\n";
    pattern = std::regex(pattern_text, std::regex::extended);
    match_and_print(text, pattern);
}
```
