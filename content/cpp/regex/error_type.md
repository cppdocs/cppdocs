---
title: "std::regex_constants::error_type"
source_path: "cpp/regex/error_type"
header: "<regex>"
category: "regex"
since: "C++11"
---

1) The error_type is a type that describes errors that may occur during regular expression parsing.

## Declarations
```cpp
using error_type = /* implementation-defined */;
```
_(since C++11)_

```cpp
constexpr error_type error_collate = /* unspecified */;
constexpr error_type error_ctype = /* unspecified */;
constexpr error_type error_escape = /* unspecified */;
constexpr error_type error_backref = /* unspecified */;
constexpr error_type error_brack = /* unspecified */;
constexpr error_type error_paren = /* unspecified */;
constexpr error_type error_brace = /* unspecified */;
constexpr error_type error_badbrace = /* unspecified */;
constexpr error_type error_range = /* unspecified */;
constexpr error_type error_space = /* unspecified */;
constexpr error_type error_badrepeat = /* unspecified */;
constexpr error_type error_complexity = /* unspecified */;
constexpr error_type error_stack = /* unspecified */;
```
_(since C++11) (inline since C++17)_

## Example
```cpp
#include <cstddef>
#include <iomanip>
#include <iostream>
#include <regex>
#include <sstream>
#include <string>
 
void regular_expression_checker(const std::string& text,
                                const std::string& regex,
                                const std::regex::flag_type flags)
{
    std::cout << "Text: " << std::quoted(text) << '\n'
              << "Regex: " << std::quoted(regex) << '\n';
 
    try
    {
        const std::regex re{regex, flags};
        const bool matched = std::regex_match(text, re);
 
        std::stringstream out;
        out << (matched ? "MATCH!\n" : "DOES NOT MATCH!\n");
 
        std::smatch m;
        if (std::regex_search(text, m, re); !m.empty())
        {
            out << "prefix = [" << m.prefix().str().data() << "]\n";
 
            for (std::size_t i{}; i != m.size(); ++i)
                out << "  m[" << i << "] = [" << m[i].str().data() << "]\n";
 
            out << "suffix = [" << m.suffix().str().data() << "]\n";
        }
        std::cout << out.str() << '\n';
    }
    catch (std::regex_error& e)
    {
        std::cout << "Error: " << e.what() << ".\n\n";
    }
}
 
int main()
{
    constexpr std::regex::flag_type your_flags
        = std::regex::flag_type{0}
    // Choose one of the supported grammars:
        | std::regex::ECMAScript
    //  | std::regex::basic
    //  | std::regex::extended
    //  | std::regex::awk
    //  | std::regex::grep
    //  | std::regex::egrep
    // Choose any of the next options:
    //  | std::regex::icase
    //  | std::regex::nosubs
    //  | std::regex::optimize
    //  | std::regex::collate
    //  | std::regex::multiline
        ;
 
    const std::string your_text = "Hello regular expressions.";
    const std::string your_regex = R"(([a-zA-Z]+) ([a-z]+) ([a-z]+)\.)";
    regular_expression_checker(your_text, your_regex, your_flags);
 
    regular_expression_checker("Invalid!", R"(((.)(.))", your_flags);
    regular_expression_checker("Invalid!", R"([.)", your_flags);
    regular_expression_checker("Invalid!", R"([.]{})", your_flags);
    regular_expression_checker("Invalid!", R"([1-0])", your_flags);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2053 | C++11 | the constants were declared static | removed the static specifier |

## See also
- [regex_error](/cpp/regex/regex_error/)
