---
title: "std::experimental::make_ostream_joiner"
source_path: "cpp/experimental/ostream_joiner/make_ostream_joiner"
header: "<experimental/iterator>"
category: "experimental"
---

Creates an ostream_joiner object, deducing the template arguments from the types of the function arguments.

## Declarations
```cpp
template< class CharT, class Traits, class DelimT >
std::experimental::ostream_joiner<std::decay_t<DelimT>, CharT, Traits>
make_ostream_joiner( std::basic_ostream<CharT, Traits>& os,
DelimT&& delimiter );
```
_(library fundamentals TS v2)_

## Parameters
- `os`: the basic_ostream object that the iterator is to be associated to
- `delimiter`: the delimiter

## Return value
An ostream_joiner object, created as if by [std::experimental::ostream_joiner](/cpp/experimental/ostream_joiner/)<[std::decay_t](/cpp/types/decay/)<DelimT>, CharT, Traits>(os, [std::forward](/cpp/utility/forward/)<DelimT>(delimiter))

## Example
```cpp
#include <experimental/iterator>
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> x{1, 2, 3, 4};
    std::copy(x.begin(), x.end(),
              std::experimental::make_ostream_joiner(std::cout, ", "));
}
```
