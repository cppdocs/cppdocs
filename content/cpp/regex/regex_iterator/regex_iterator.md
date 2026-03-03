---
title: "std::regex_iterator<BidirIt,CharT,Traits>::regex_iterator"
source_path: "cpp/regex/regex_iterator/regex_iterator"
category: "regex"
since: "C++11"
---

Constructs a new regex_iterator:

## Declarations
```cpp
regex_iterator();
```
_(since C++11)_

```cpp
regex_iterator( BidirIt a, BidirIt b,
const regex_type& re,
std::regex_constants::match_flag_type m =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
regex_iterator( const regex_iterator& );
```
_(since C++11)_

```cpp
regex_iterator( BidirIt, BidirIt,
const regex_type&&,
std::regex_constants::match_flag_type =
std::regex_constants::match_default ) = delete;
```
_(since C++11)_

## Parameters
- `a`: LegacyBidirectionalIterator to the beginning of the target character sequence
- `b`: LegacyBidirectionalIterator to the end of the target character sequence
- `re`: regular expression used to search the target character sequence
- `m`: flags that govern the behavior of re

## Example
```cpp
#include <iostream>
#include <regex>
#include <string_view>
 
int main()
{
    constexpr std::string_view str{R"(
        #ONE: *p = &Mass;
        #Two: MOV %rd, 42
    )"};
    const std::regex re("[a-w]");
 
    // create regex_iterator, overload (2)
    auto it = std::regex_iterator<std::string_view::iterator>
    {
        str.cbegin(), str.cend(),
        re // re is lvalue; if an immediate expression was used
           // instead, e.g. std::regex{"[a-z]"}, this would
           // produce an error since overload (4) is deleted
    };
 
    for (decltype(it) last /* overload (1) */; it != last; ++it)
        std::cout << (*it).str();
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2332 | C++11 | a regex_iterator constructed from a temporarybasic_regex became invalid immediately | such construction is disallowed via a deleted overload |
