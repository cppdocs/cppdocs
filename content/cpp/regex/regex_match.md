---
title: "std::regex_match"
source_path: "cpp/regex/regex_match"
header: "<regex>"
category: "regex"
since: "C++11"
---

Determines if the regular expression e matches the entire target character sequence. The detailed match result is stored in m (if present).

## Declarations
```cpp
template< class BidirIt, class Alloc, class CharT, class Traits >
bool regex_match( BidirIt first, BidirIt last,
std::match_results<BidirIt, Alloc>& m,
const std::basic_regex<CharT, Traits>& e,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class BidirIt, class CharT, class Traits >
bool regex_match( BidirIt first, BidirIt last,
const std::basic_regex<CharT, Traits>& e,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class CharT, class Alloc, class Traits >
bool regex_match( const CharT* str,
std::match_results<const CharT*, Alloc>& m,
const std::basic_regex<CharT, Traits>& e,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class CharT, class Traits >
bool regex_match( const CharT* str, const std::basic_regex<CharT, Traits>& e,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class STraits, class SAlloc, class Alloc,
class CharT, class Traits >
bool regex_match
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
bool regex_match( const std::basic_string<CharT, STraits, SAlloc>& s,
const std::basic_regex<CharT, Traits>& e,
std::regex_constants::match_flag_type flags =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< class STraits, class SAlloc, class Alloc,
class CharT, class Traits >
bool regex_match
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
Returns true if the entire target sequence matches e, false otherwise.

## Notes
Because regex_match only considers full matches, the same regex may give different matches between regex_match and [std::regex_search](/cpp/regex/regex_search/):

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <regex>
#include <string>
 
int main()
{
    // Simple regular expression matching
    const std::string fnames[] = {"foo.txt", "bar.txt", "baz.dat", "zoidberg"};
    const std::regex txt_regex("[a-z]+\\.txt");
 
    for (const auto& fname : fnames)
        std::cout << fname << ": " << std::regex_match(fname, txt_regex) << '\n';
 
    // Extraction of a sub-match
    const std::regex base_regex("([a-z]+)\\.txt");
    std::smatch base_match;
 
    for (const auto& fname : fnames)
        if (std::regex_match(fname, base_match, base_regex))
            // The first sub_match is the whole string; the next
            // sub_match is the first parenthesized expression.
            if (base_match.size() == 2)
            {
                std::ssub_match base_sub_match = base_match[1];
                std::string base = base_sub_match.str();
                std::cout << fname << " has a base of " << base << '\n';
            }
 
    // Extraction of several sub-matches
    const std::regex pieces_regex("([a-z]+)\\.([a-z]+)");
    std::smatch pieces_match;
 
    for (const auto& fname : fnames)
        if (std::regex_match(fname, pieces_match, pieces_regex))
        {
            std::cout << fname << '\n';
            for (std::size_t i = 0; i < pieces_match.size(); ++i)
            {
                std::ssub_match sub_match = pieces_match[i];
                std::string piece = sub_match.str();
                std::cout << "  submatch " << i << ": " << piece << '\n';
            }
        }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2205 | C++11 | n could be zero in the postcondition | can only be positive |
| LWG 2273 | C++11 | it was unclear whether partial matches are considered | only considers full matches |
| LWG 2329 | C++11 | overload (5) accepted basic_string rvalues,which could result in dangling iterators | rejected via deleted overload (7) |

## See also
- [basic_regex](/cpp/regex/basic_regex/)
- [match_results](/cpp/regex/match_results/)
- [regex_search](/cpp/regex/regex_search/)
