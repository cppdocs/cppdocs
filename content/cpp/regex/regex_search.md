---
title: "std::regex_search"
source_path: "cpp/regex/regex_search"
header: "<regex>"
category: "regex"
since: "C++11"
---

Determines if there is a match between the regular expression e and some subsequence in the target character sequence. The detailed match result is stored in m (if present).

## Declarations
```cpp
template< class BidirIt, class Alloc, class CharT, class Traits >
bool regex_search( BidirIt first, BidirIt last,
std::match_results<BidirIt, Alloc>& m,
const std::basic_regex<CharT, Traits>& e,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class BidirIt, class CharT, class Traits >
bool regex_search( BidirIt first, BidirIt last,
const std::basic_regex<CharT, Traits>& e,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class CharT, class Alloc, class Traits >
bool regex_search( const CharT* str,
std::match_results<const CharT*, Alloc>& m,
const std::basic_regex<CharT, Traits>& e,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class CharT, class Traits >
bool regex_search( const CharT* str, const std::basic_regex<CharT, Traits>& e,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class STraits, class SAlloc, class Alloc,
class CharT, class Traits >
bool regex_search
( const std::basic_string<CharT, STraits, SAlloc>& s,
std::match_results
<typename std::basic_string<CharT, STraits, SAlloc>::const_iterator,
Alloc>& m,
const std::basic_regex<CharT, Traits>& e,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class STraits, class SAlloc, class CharT, class Traits >
bool regex_search( const std::basic_string<CharT, STraits, SAlloc>& s,
const std::basic_regex<CharT, Traits>& e,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class STraits, class SAlloc, class Alloc,
class CharT, class Traits >
bool regex_search
( const std::basic_string<CharT, STraits, SAlloc>&&,
std::match_results
<typename std::basic_string<CharT, STraits, SAlloc>::const_iterator,
Alloc>&,
const std::basic_regex<CharT, Traits>&,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default ) = delete;
```
_(since C++11)_

## Parameters
- `first, last`: the target character range
- `str`: the target null-terminated C-style string
- `s`: the target std::basic_string
- `m`: the match results
- `e`: the regular expression
- `flags`: flags used to determine how the match will be performed

## Return value
Returns true if a match exists, false otherwise.

## Notes
In order to examine all matches within the target sequence, std::regex_search may be called in a loop, restarting each time from m[0].second of the previous call. [std::regex_iterator](/cpp/regex/regex_iterator/) offers an easy interface to this iteration.

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <regex>
#include <string>
 
int main()
{
    std::string lines[] = {"Roses are #ff0000",
                           "violets are #0000ff",
                           "all of my base are belong to you"};
 
    std::regex color_regex("#([a-f0-9]{2})"
                            "([a-f0-9]{2})"
                            "([a-f0-9]{2})");
 
    // simple match
    for (const auto& line : lines)
        std::cout << line << ": " << std::boolalpha
                  << std::regex_search(line, color_regex) << '\n';
    std::cout << '\n';
 
    // show contents of marked subexpressions within each match
    std::smatch color_match;
    for (const auto& line : lines)
        if (std::regex_search(line, color_match, color_regex))
        {
            std::cout << "matches for '" << line << "'\n";
            std::cout << "Prefix: '" << color_match.prefix() << "'\n";
            for (std::size_t i = 0; i < color_match.size(); ++i) 
                std::cout << i << ": " << color_match[i] << '\n';
            std::cout << "Suffix: '" << color_match.suffix() << "\'\n\n";
        }
 
    // repeated search (see also std::regex_iterator)
    std::string log(R"(
        Speed:	366
        Mass:	35
        Speed:	378
        Mass:	32
        Speed:	400
	Mass:	30)");
    std::regex r(R"(Speed:\t\d*)");
    for (std::smatch sm; regex_search(log, sm, r);)
    {
        std::cout << sm.str() << '\n';
        log = sm.suffix();
    }
 
    // C-style string demo
    std::cmatch cm;
    if (std::regex_search("this is a test", cm, std::regex("test"))) 
        std::cout << "\nFound " << cm[0] << " at position "
                  << cm.prefix().length() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2205 | C++11 | n could be zero in the postcondition | can only be positive |
| LWG 2329 | C++11 | overload (5) accepted basic_string rvalues,which could result in dangling iterators | rejected via deleted overload (7) |

## See also
- [basic_regex](/cpp/regex/basic_regex/)
- [match_results](/cpp/regex/match_results/)
- [regex_match](/cpp/regex/regex_match/)
