---
title: "std::regex_traits<CharT>::lookup_collatename"
source_path: "cpp/regex/regex_traits/lookup_collatename"
category: "regex"
---

If the character sequence [first,last) represents the name of a valid collating element in the currently imbued locale, returns the name of that collating element. Otherwise, returns an empty string.

## Declarations
```cpp
template< class ForwardIt >
string_type lookup_collatename( ForwardIt first, ForwardIt last ) const;
```

## Parameters
- `first, last`: a pair of iterators which determines the sequence of characters that represents a collating element name

## Return value
The representation of the named collating element as a character string.

## Example
```cpp
#include <iostream>
#include <regex>
#include <string>
 
struct noisy_traits : std::regex_traits<char>
{
    template<class Iter>
    string_type lookup_collatename(Iter first, Iter last) const
    {
        string_type result = regex_traits::lookup_collatename(first, last);
        std::cout << "regex_traits<>::lookup_collatename(\""
                  << string_type(first, last)
                  << "\") returns \"" << result << "\"\n";
        return result;
    }
};
 
int main()
{
    std::string str = "z|}a"; // C locale collation order: x,y,z,{,|,},~
    std::basic_regex<char, noisy_traits> re("[x-[.tilde.]]*a", std::regex::basic);
    std::cout << std::boolalpha << std::regex_match(str, re) << '\n';
}
```
