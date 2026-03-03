---
title: "std::regex_token_iterator"
source_path: "cpp/regex/regex_token_iterator"
header: "<regex>"
category: "regex"
since: "C++11"
---

std::regex_token_iterator is a read-only [LegacyForwardIterator](/cpp/named_req/forwarditerator/) that accesses the individual sub-matches of every match of a regular expression within the underlying character sequence. It can also be used to access the parts of the sequence that were not matched by the given regular expression (e.g. as a tokenizer).

## Declarations
```cpp
template<
class BidirIt,
class CharT = typename std::iterator_traits<BidirIt>::value_type,
class Traits = std::regex_traits<CharT>
> class regex_token_iterator
```
_(since C++11)_

## Notes
It is the programmer's responsibility to ensure that the [std::basic_regex](/cpp/regex/basic_regex/) object passed to the iterator's constructor outlives the iterator. Because the iterator stores a [std::regex_iterator](/cpp/regex/regex_iterator/) which stores a pointer to the regex, incrementing the iterator after the regex was destroyed results in undefined behavior.

## Example
```cpp
#include <algorithm>
#include <fstream>
#include <iostream>
#include <iterator>
#include <regex>
 
int main()
{
    // Tokenization (non-matched fragments)
    // Note that regex is matched only two times; when the third value is obtained
    // the iterator is a suffix iterator.
    const std::string text = "Quick brown fox.";
    const std::regex ws_re("\\s+"); // whitespace
    std::copy(std::sregex_token_iterator(text.begin(), text.end(), ws_re, -1),
              std::sregex_token_iterator(),
              std::ostream_iterator<std::string>(std::cout, "\n"));
 
    std::cout << '\n';
 
    // Iterating the first submatches
    const std::string html = R"(<p><a href="http://google.com">google</a> )"
                             R"(< a HREF ="http://cppreference.com">cppreference</a>\n</p>)";
    const std::regex url_re(R"!!(<\s*A\s+[^>]*href\s*=\s*"([^"]*)")!!", std::regex::icase);
    std::copy(std::sregex_token_iterator(html.begin(), html.end(), url_re, 1),
              std::sregex_token_iterator(),
              std::ostream_iterator<std::string>(std::cout, "\n"));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3698(P2770R0) | C++20 | regex_token_iterator was a forward_iteratorwhile being a stashing iterator | made input_iterator[1] |
