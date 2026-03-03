---
title: "std::regex_iterator"
source_path: "cpp/regex/regex_iterator"
header: "<regex>"
category: "regex"
since: "C++11"
---

std::regex_iterator is a read-only iterator that accesses the individual matches of a regular expression within the underlying character sequence. It meets the requirements of a [LegacyForwardIterator](/cpp/named_req/forwarditerator/), except that for dereferenceable values a and b with a == b, *a and *b will not be bound to the same object.

## Declarations
```cpp
template<
class BidirIt,
class CharT = typename std::iterator_traits<BidirIt>::value_type,
class Traits = std::regex_traits<CharT>
> class regex_iterator
```
_(since C++11)_

## Notes
It is the programmer's responsibility to ensure that the [std::basic_regex](/cpp/regex/basic_regex/) object passed to the iterator's constructor outlives the iterator. Because the iterator stores a pointer to the regex, incrementing the iterator after the regex was destroyed accesses a dangling pointer.

If the part of the regular expression that matched is just an [assertion](/cpp/regex/ecmascript/#Assertions) (^, $, \b, \B), the match stored in the iterator is a zero-length match, that is, match[0].first == match[0].second.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <regex>
#include <string>
 
int main()
{
    const std::string s = "Quick brown fox.";
 
    std::regex words_regex("[^\\s]+");
    auto words_begin = std::sregex_iterator(s.begin(), s.end(), words_regex);
    auto words_end = std::sregex_iterator();
 
    std::cout << "Found " << std::distance(words_begin, words_end) << " words:\n";
 
    for (std::sregex_iterator i = words_begin; i != words_end; ++i)
    {
        std::smatch match = *i;
        std::string match_str = match.str();
        std::cout << match_str << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3698(P2770R0) | C++20 | regex_iterator was a forward_iteratorwhile being a stashing iterator | made input_iterator[1] |

## See also
- [match_results](/cpp/regex/match_results/)
- [regex_search](/cpp/regex/regex_search/)
