---
title: "std::regex_replace"
source_path: "cpp/regex/regex_replace"
header: "<regex>"
category: "regex"
since: "C++11"
---

regex_replace uses the regular expression re to perform substitution on the target character sequence:

## Declarations
```cpp
template< class OutputIt, class BidirIt, class Traits, class CharT,
class STraits, class SAlloc >
OutputIt regex_replace( OutputIt out, BidirIt first, BidirIt last,
const std::basic_regex<CharT, Traits>& re,
const std::basic_string<CharT, STraits, SAlloc>& fmt,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class OutputIt, class BidirIt, class Traits, class CharT >
OutputIt regex_replace( OutputIt out, BidirIt first, BidirIt last,
const std::basic_regex<CharT, Traits>& re,
const CharT* fmt,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class Traits, class CharT,
class STraits, class SAlloc, class FTraits, class FAlloc >
std::basic_string<CharT, STraits, SAlloc>
regex_replace( const std::basic_string<CharT, STraits, SAlloc>& str,
const std::basic_regex<CharT, Traits>& re,
const std::basic_string<CharT, FTraits, FAlloc>& fmt,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class Traits, class CharT, class STraits, class SAlloc >
std::basic_string<CharT, STraits, SAlloc>
regex_replace( const std::basic_string<CharT, STraits, SAlloc>& str,
const std::basic_regex<CharT, Traits>& re,
const CharT* fmt,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class Traits, class CharT, class STraits, class SAlloc >
std::basic_string<CharT>
regex_replace( const CharT* s, const std::basic_regex<CharT, Traits>& re,
const std::basic_string<CharT, STraits, SAlloc>& fmt,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class Traits, class CharT >
std::basic_string<CharT>
regex_replace( const CharT* s, const std::basic_regex<CharT, Traits>& re,
const CharT* fmt,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

## Parameters
- `first, last`: the target character range
- `str`: the target std::string
- `s`: the target null-terminated C-style string
- `re`: the regular expression
- `fmt`: the regex replacement format string, exact syntax depends on the value of flags
- `flags`: flags used to determine how the match will be performed
- `out`: output iterator to store the result of the replacement

## Return value
As described above.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <regex>
#include <string>
 
int main()
{
    std::string text = "Quick brown fox";
    std::regex vowel_re("a|e|i|o|u");
 
    // write the results to an output iterator
    std::regex_replace(std::ostreambuf_iterator<char>(std::cout),
                       text.begin(), text.end(), vowel_re, "*");
 
    // construct a string holding the results
    std::cout << '\n' << std::regex_replace(text, vowel_re, "[$&]") << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2213 | C++11 | out was not updated by the replacements | out is updated |

## See also
- [regex_search](/cpp/regex/regex_search/)
- [match_flag_type](/cpp/regex/match_flag_type/)
- [replace](/cpp/string/basic_string/replace/)
