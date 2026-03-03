---
title: "std::regex_token_iterator<BidirIt,CharT,Traits>::regex_token_iterator"
source_path: "cpp/regex/regex_token_iterator/regex_token_iterator"
category: "regex"
since: "C++11"
---

Constructs a new regex_token_iterator:

## Declarations
```cpp
regex_token_iterator();
```
_(since C++11)_

```cpp
regex_token_iterator( BidirIt a, BidirIt b,
const regex_type& re,
int submatch = 0,
std::regex_constants::match_flag_type m =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
regex_token_iterator( BidirIt a, BidirIt b,
const regex_type& re,
const std::vector<int>& submatches,
std::regex_constants::match_flag_type m =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
regex_token_iterator( BidirIt a, BidirIt b,
const regex_type& re,
std::initializer_list<int> submatches,
std::regex_constants::match_flag_type m =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
template< std::size_t N >
regex_token_iterator( BidirIt a, BidirIt b,
const regex_type& re,
const int (&submatches)[N],
std::regex_constants::match_flag_type m =
std::regex_constants::match_default );
```
_(since C++11)_

```cpp
regex_token_iterator( const regex_token_iterator& other );
```
_(since C++11)_

```cpp
regex_token_iterator( BidirIt a, BidirIt b,
const regex_type&& re,
int submatch = 0,
std::regex_constants::match_flag_type m =
std::regex_constants::match_default ) = delete;
```
_(since C++11)_

```cpp
regex_token_iterator( BidirIt a, BidirIt b,
const regex_type&& re,
const std::vector<int>& submatches,
std::regex_constants::match_flag_type m =
std::regex_constants::match_default ) = delete;
```
_(since C++11)_

```cpp
regex_token_iterator( BidirIt a, BidirIt b,
const regex_type&& re,
std::initializer_list<int> submatches,
std::regex_constants::match_flag_type m =
std::regex_constants::match_default ) = delete;
```
_(since C++11)_

```cpp
template< std::size_t N >
regex_token_iterator( BidirIt a, BidirIt b,
const regex_type&& re,
const int (&submatches)[N],
std::regex_constants::match_flag_type m =
std::regex_constants::match_default ) = delete;
```
_(since C++11)_

## Parameters
- `a`: LegacyBidirectionalIterator to the beginning of the target character sequence
- `b`: LegacyBidirectionalIterator to the end of the target character sequence
- `re`: regular expression used to search the target character sequence
- `submatch`: the index of the submatch that should be returned. "0" represents the entire match, and "-1" represents the parts that are not matched (e.g, the stuff between matches)
- `submatches`: the sequence of submatch indices that should be iterated over within each match, may include the special value -1 for the non-matched fragments
- `m`: flags that govern the behavior of re

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2332 | C++11 | a regex_token_iterator constructed from atemporary basic_regex became invalid immediately | such construction is disallowed via deleted overloads |
